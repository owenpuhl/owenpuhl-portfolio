import { getAssetFromKV, NotFoundError, MethodNotAllowedError } from '@cloudflare/kv-asset-handler';
import manifestJSON from '__STATIC_CONTENT_MANIFEST';

const manifest = JSON.parse(manifestJSON);

interface Env {
  __STATIC_CONTENT: any;
}

interface ExecutionContext {
  waitUntil: (promise: Promise<any>) => void;
}

export default {
  async fetch(
    request: Request,
    env: Env,
    ctx: ExecutionContext
  ): Promise<Response> {
    if (request.method !== 'GET' && request.method !== 'HEAD') {
      return new Response('Method Not Allowed', { status: 405 });
    }

    const url = new URL(request.url);

    try {
      return await getAssetFromKV(
        {
          request,
          waitUntil: ctx.waitUntil.bind(ctx),
        },
        {
          ASSET_NAMESPACE: env.__STATIC_CONTENT,
          ASSET_MANIFEST: manifest,
        }
      );
    } catch (e) {
      // If asset not found, serve index.html for SPA routing
      if (e instanceof NotFoundError) {
        try {
          const indexAsset = await getAssetFromKV(
            {
              request: new Request(new URL('/', url).toString()),
              waitUntil: ctx.waitUntil.bind(ctx),
            },
            {
              ASSET_NAMESPACE: env.__STATIC_CONTENT,
              ASSET_MANIFEST: manifest,
            }
          );
          return indexAsset;
        } catch {
          return new Response('Not Found', { status: 404 });
        }
      }

      if (e instanceof MethodNotAllowedError) {
        return new Response('Method Not Allowed', { status: 405 });
      }

      return new Response('Internal Server Error', { status: 500 });
    }
  },
};
