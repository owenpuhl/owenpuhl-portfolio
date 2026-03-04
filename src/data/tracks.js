export const TRACKS = [
  {
    id: 'main-beat',
    title: 'Electroclash Framework',
    description: 'The full kit — kicks, bass, lead, glitch, the works. This is the skeleton I build most tracks on top of.',
    genre: 'Electroclash',
    tags: ['electroclash', 'drums', 'bass', 'lead', 'framework', 'live-coding'],
    bpm: 120,
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01',
    source: 'main-beat.js',
    featured: true,
    code: `// ELECTROCLASH / WITCHPOP / CYBER BEAT FRAMEWORK

// ============ KICK DRUM ============
$: s("bd:3 bd bd:3 bd")
  .gain(1.2)
  .distort(0.3)
  .lpf(800)

// ============ SNARE / CLAP ============
$: s("~ cp:4 ~ cp:4")
  .gain(0.9)
  .room(0.3)
  .delay(0.15)
  .delaytime(0.125)
  .delayfeedback(0.3)

// ============ HI-HATS ============
$: s("hh:3*8")
  .gain("0.4 0.3 0.5 0.3 0.4 0.3 0.6 0.3")
  .hpf(8000)
  .pan(sine.range(0.4, 0.6).slow(4))

// Open hat accents
$: s("~ ~ oh:2 ~")
  .gain(0.5)
  .room(0.4)

// ============ BASS SYNTH ============
$: note("c2 c2 [eb2 f2] c2")
  .s("sawtooth")
  .lpf(sine.range(400, 1200).slow(2))
  .resonance(8)
  .gain(0.7)
  .distort(0.3)
  .cutoff(800)

// ============ LEAD SYNTH ============
$: note("c4 eb4 f4 g4 [ab4 g4] f4 eb4 c4")
  .s("square")
  .slow(2)
  .lpf(2000)
  .gain(0.5)
  .delay(0.15)
  .delaytime(0.375)
  .delayfeedback(0.4)
  .room(0.3)

// ============ PERCUSSION ============
$: s("~ ~ [reverbkick:3 ~] ~")
  .gain(0.6)
  .speed(1.5)

$: s("click:4*16")
  .gain("0 0.3 0 0.2 0 0.4 0 0.2 0 0.3 0 0 0 0.4 0 0.3")
  .hpf(6000)

// ============ SUB BASS ============
$: note("c1!4")
  .s("sine")
  .gain(0.8)
  .lpf(150)

// ============ GLITCH ============
$: s("glitch:4 ~ ~ [glitch:7 ~]")
  .sometimes(x => x.speed(rand.range(0.5, 2)))
  .gain(0.4)
  .pan(rand)
  .distort(0.3)

// Noise sweep
$: s("~ ~ ~ white")
  .gain(0.3)
  .hpf(perlin.range(1000, 8000))
  .ad(0.01, 0.3)`,
  },
  {
    id: 'chords-classic-pop',
    title: 'Classic Pop Progression',
    description: 'Classic pop progression (I–V–vi–IV) enhanced with aggressive sawtooth articulation. Harmonic familiarity paired with textural interest.',
    genre: 'Electroclash',
    tags: ['chords', 'pop', 'bright', 'progression', 'sawtooth'],
    bpm: 120,
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01',
    source: 'chord-progressions.js',
    featured: false,
    code: `// Classic Pop: I - V - vi - IV (C - G - Am - F)
$: note("c4*8 g4*8 a4*8 f4*8")
  .s("sawtooth")
  .lpf(2500).resonance(6)
  .gain(0.5).coarse(6).distort(0.5)
  .ad(0.01, 0.08)`,
  },
  {
    id: 'chords-lydian-magic',
    title: 'Lydian Magic',
    description: 'Two major chords alternating with Lydian modal inflection. Harmonic suspension and atmospheric color through modal interchange.',
    genre: 'Witchpop',
    tags: ['chords', 'lydian', 'dreamy', 'ethereal', 'witchpop'],
    bpm: 120,
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01',
    source: 'chord-progressions.js',
    featured: false,
    code: `// Lydian Magic: I - II - I - II (C - D - C - D)
// Creates floating, witchpop ethereal quality
$: note("c4*8 d4*8 c4*8 d4*8")

  .s("sawtooth")
  .lpf(2500).resonance(8)
  .gain(0.5).coarse(8).distort(0.6)
  .ad(0.005, 0.06)`,
  },
  {
    id: 'theme-minimal-dark',
    title: 'Minimal Dark',
    description: 'Minimalist composition with kick, hi-hat, bass note, and noise layer. Restraint in arrangement and dynamic depth through rhythmic precision.',
    genre: 'Electroclash',
    tags: ['theme', 'minimal', 'dark', 'hypnotic', 'techno', 'arrangement'],
    bpm: 120,
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01',
    source: 'themes/minimal-dark.js',
    featured: true,
    code: `// MINIMAL DARK ELECTROCLASH
// Stripped-down, hypnotic pattern

// Kick - relentless 4/4
$: s("bd:3*4")
  .gain(1.2)
  .distort(0.4)
  .lpf(700)

// Minimal hat pattern
$: s("~ hh:3 ~ hh:3")
  .gain(0.4)
  .hpf(9000)

// Dark bass line - minimal movement
$: note("c2!3 bb1")
  .s("sawtooth")
  .lpf(500)
  .resonance(12)
  .gain(0.8)
  .distort(0.6)

// Rare glitch accent
$: s("~ ~ ~ glitch:4")
  .rarely(x => x.speed(rand.range(0.5, 3)))
  .gain(0.3)
  .pan(rand)

// Atmospheric noise layer
$: s("white")
  .slow(4)
  .gain(0.2)
  .hpf(perlin.range(2000, 6000))
  .ad(0.5, 2)`,
  },
  {
    id: 'chords-chromatic-descent',
    title: 'Chromatic Descent',
    description: 'Chromatic chord descent creating harmonic tension and resolution. Tonal gravitational pull through sequential major chord movement.',
    genre: 'Electroclash',
    tags: ['chords', 'chromatic', 'dark', 'tension', 'square-wave'],
    bpm: 120,
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01',
    source: 'chord-progressions.js',
    featured: true,
    code: `// Chromatic Descent: I - bVII - bVI - V (C - Bb - Ab - G)
// Major chords descending = tension and release
$: note("c4*8 bb4*8 ab4*8 g4*8")

  .s("square")
  .lpf(2200).resonance(10)
  .gain(0.55).coarse(10).shape(0.5)
  .ad(0.005, 0.05)`,
  },
  {
    id: 'chords-modal-interchange',
    title: 'Modal Interchange',
    description: 'Modal mixture applied to major key context using minor mode chords. Expanded harmonic palette with cinematic depth and scale.',
    genre: 'Electroclash',
    tags: ['chords', 'modal', 'cinematic', 'epic', 'sophisticated'],
    bpm: 120,
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01',
    source: 'chord-progressions.js',
    featured: false,
    code: `// Modal Interchange: I - bVI - bIII - bVII (C - Ab - Eb - Bb)
// Borrowed from C minor, but all major chords
$: note("c4*8 ab4*8 eb4*8 bb4*8")

  .s("sawtooth")
  .lpf(2800).resonance(7)
  .gain(0.5).distort(0.6).coarse(6)
  .ad(0.01, 0.08)`,
  },
  {
    id: 'chords-tritone-sub',
    title: 'Tritone Substitution',
    description: 'Jazz tritone substitution applied to dominant chord. Unexpected harmonic context and dissonance with deliberate tonal estrangement.',
    genre: 'Cyber',
    tags: ['chords', 'tritone', 'jazz', 'dissonant', 'futuristic'],
    bpm: 120,
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01',
    source: 'chord-progressions.js',
    featured: false,
    code: `// Tritone Substitution: I - bII - I - V (C - Db - C - G)
// Very dissonant and futuristic
$: note("c4*8 db4*8 c4*8 g4*8")

  .s("sawtooth")
  .lpf(2400).resonance(12)
  .gain(0.5).coarse(12).distort(0.7)
  .ad(0.005, 0.05)`,
  },
  {
    id: 'chords-whole-tone',
    title: 'Whole Tone Movement',
    description: 'Whole-step chord progression without tonal center or resolution. Sustained tension through systemic harmonic progression.',
    genre: 'Cyber',
    tags: ['chords', 'whole-tone', 'avant-garde', 'experimental', 'bright'],
    bpm: 120,
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01',
    source: 'chord-progressions.js',
    featured: false,
    code: `// Whole Tone Movement: I - II - III - #IV (C - D - E - F#)
// All major = very bright, no traditional resolution
$: note("c4*8 d4*8 e4*8 fs4*8")

  .s("square")
  .lpf(2600).resonance(8)
  .gain(0.5).coarse(8).shape(0.4)
  .ad(0.005, 0.06)`,
  },
  {
    id: 'chords-phrygian-dominant',
    title: 'Phrygian Dominant',
    description: 'Minor key progression with half-step chromatic movement. Microtonal harmonic inflection suggesting non-Western tonal systems.',
    genre: 'Witchpop',
    tags: ['chords', 'phrygian', 'exotic', 'dark', 'mystical', 'witch-house'],
    bpm: 120,
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01',
    source: 'chord-progressions.js',
    featured: true,
    code: `// Phrygian Dominant: I - bII - III - IV (C - Db - E - F)
// Exotic, dark, mystical
$: note("c4*8 db4*8 e4*8 f4*8")

  .s("sawtooth")
  .lpf(2200).resonance(10)
  .gain(0.55).coarse(10).distort(0.65)
  .ad(0.005, 0.05)`,
  },
  {
    id: 'theme-witchpop-full',
    title: 'Witchpop Full',
    description: 'Complete witchpop composition featuring Lydian modal harmony, sustaining pads, and granular synthesized textures. Full ensemble arrangement.',
    genre: 'Witchpop',
    tags: ['theme', 'witchpop', 'ethereal', 'dreamy', 'full-arrangement', 'lydian'],
    bpm: 120,
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01',
    source: 'themes/witchpop-full.js',
    featured: true,
    code: `// WITCHPOP FULL ARRANGEMENT
// Ethereal, dreamy, with major chord progressions

// Kick
$: s("bd:3 bd bd:3 bd")
  .gain(1.1)
  .distort(0.2)
  .lpf(800)

// Snare with reverb
$: s("~ cp:4 ~ cp:4")
  .gain(0.8)
  .room(0.5)
  .size(0.9)

// Shimmery hi-hats
$: s("hh:3*8")
  .gain("0.3 0.25 0.4 0.25 0.3 0.25 0.5 0.25")
  .hpf(8000)
  .pan(sine.range(0.3, 0.7).slow(8))
  .room(0.3)

// Minor bass for contrast
$: note("c2 c2 eb2 g2")
  .s("sawtooth")
  .lpf(600)
  .resonance(6)
  .gain(0.7)
  .distort(0.3)

// Sub bass layer
$: note("c1!4")
  .s("sine")
  .gain(0.6)
  .lpf(120)

// Lydian major progression (dreamy)
$: note("c4*8 d4*8 c4*8 d4*8")

  .s("sawtooth")
  .lpf(2800)
  .resonance(6)
  .hpf(250)
  .gain(0.5)
  .coarse(4)
  .distort(0.4)
  .ad(0.01, 0.1)
  .room(0.4)
  .delay(0.2)
  .delaytime(0.0625)
  .delayfeedback(0.3)

// Floaty lead line
$: note("c5 eb5 g5 bb5 ab5 g5 f5 eb5")
  .s("square")
  .slow(2)
  .lpf(3000)
  .gain(0.45)
  .delay(0.4)
  .delaytime(0.375)
  .delayfeedback(0.5)
  .room(0.6)
  .pan(sine.range(0.3, 0.7).slow(16))

// Pad layer
$: note("c3 eb3 g3 bb3")
  .s("sine")
  .slow(4)
  .gain(0.3)
  .ad(1, 2)
  .room(0.8)
  .size(0.9)
  .lpf(1500)

// Sparkle effects
$: s("~ ~ click:4 ~")
  .gain(0.3)
  .speed(rand.range(1.5, 3))
  .pan(rand)
  .room(0.6)
  .hpf(8000)

// Noise sweep on 4
$: s("~ ~ ~ white")
  .gain(0.25)
  .hpf(perlin.range(2000, 8000))
  .ad(0.01, 0.4)
  .room(0.5)`,
  },
  {
    id: 'theme-cyber-glitch',
    title: 'Cyber Glitch',
    description: 'Algorithmic generative composition using randomized control functions. Unique output on each iteration through probabilistic synthesis methods.',
    genre: 'Cyber',
    tags: ['theme', 'cyber', 'glitch', 'experimental', 'chaos', 'generative', 'noise'],
    bpm: 120,
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01',
    source: 'themes/cyber-glitch.js',
    featured: true,
    code: `// CYBER GLITCH EXPERIMENTAL
// Maximum digital destruction and chaos

// Glitchy, unstable kick
$: s("bd:3 bd bd:3 bd")
  .sometimes(x => x.speed(rand.range(0.8, 1.5)))
  .gain(1.2)
  .distort(0.6)
  .coarse(16)
  .lpf(700)

// Fragmented snare
$: s("~ sd:5 ~ [sd:5 sd:5]")
  .degradeBy(0.4)
  .gain(0.9)
  .distort(0.5)
  .coarse(12)

// Chaotic hi-hats
$: s("hh:3*16")
  .gain(rand.range(0.2, 0.5))
  .speed(rand.range(0.8, 1.3))
  .hpf(7000)
  .pan(rand)

// Stuttering bass
$: note("c2 c2 [c2 c2 c2] c2")
  .s("square")
  .lpf(sine.range(300, 800).fast(4))
  .resonance(15)
  .gain(0.8)
  .distort(0.7)
  .coarse(8)
  .shape(0.6)

// Heavy glitch percussion
$: s("glitch:4 glitch:7 glitch:2 glitch:9")
  .often(x => x.speed(rand.range(0.25, 4)))
  .gain(rand.range(0.3, 0.6))
  .pan(rand)
  .distort(0.5)
  .coarse(rand.range(4, 16))

// Bitcrushed clicks
$: s("click:4*32")
  .gain(rand.range(0, 0.5))
  .speed(rand.range(0.5, 2))
  .hpf(perlin.range(5000, 12000))
  .coarse(rand.range(8, 32))

// Random pitch stabs
$: note(rand.range(36, 72))
  .s("sawtooth")
  .lpf(rand.range(800, 4000))
  .resonance(rand.range(5, 15))
  .gain(0.4)
  .coarse(rand.range(4, 16))
  .ad(0.001, rand.range(0.05, 0.2))
  .pan(rand)

// Tritone chaos chords
$: note("c4*8 db4*8 c4*8 b3*8")

  .s("square")
  .degradeBy(0.5)
  .lpf(rand.range(1500, 3000))
  .resonance(rand.range(8, 15))
  .gain(0.45)
  .coarse(rand.range(8, 16))
  .shape(rand.range(0.3, 0.7))
  .ad(0.005, 0.05)

// Noise madness
$: s("white white white white")
  .gain(rand.range(0.2, 0.5))
  .hpf(rand.range(1000, 10000))
  .lpf(rand.range(4000, 15000))
  .ad(0.001, rand.range(0.05, 0.3))
  .pan(rand)
  .distort(rand.range(0.3, 0.8))`,
  },
  {
    id: 'theme-pc-synth',
    title: 'PC Music Synth',
    description: 'Digital distortion and bit-reduction applied to harmonic content. Hyper-compressed dynamics and deliberate digital artifacts.',
    genre: 'Cyber',
    tags: ['theme', 'pc-music', 'hyperpop', 'sophie', 'ag-cook', 'bitcrush'],
    bpm: null,
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01',
    source: 'themes/pc-synth-beat',
    featured: true,
    code: `// PC MUSIC SYNTH
// SOPHIE (rip) / AG Cook vibes

setcps(0.6)

// Glitchy kick
$: s("bd:5 bd:5 bd:5 bd:5")
  .sometimes(x => x.speed(rand.range(0.8, 1.5)))
  .gain(1.5)
  .distort(0.8)
  .coarse(17)
  .lpf(700)

// Fragmented snare
$: s("~ sd:5 ~ [sd:5 sd:5]")
  .degradeBy(0.4)
  .gain(0.9)
  .distort(0.5)
  .coarse(12)

// Chaotic hi-hats
$: s("hh:3*16")
  .gain(rand.range(0.2, 0.5))
  .speed(rand.range(0.8, 1.3))
  .hpf(7000)
  .pan(rand)

// Heavy glitch percussion
$: s("glitch:6 glitch:7 glitch:2 glitch:9")
  .often(x => x.speed(rand.range(0.25, 4)))
  .gain(rand.range(0.3, 0.6))
  .pan(rand)
  .distort(0.5)
  .coarse(rand.range(4, 16))

// Bitcrushed clicks
$: s("click:4*32")
  .gain(rand.range(0, 0.5))
  .speed(rand.range(0.5, 2))
  .hpf(perlin.range(5000, 12000))
  .coarse(rand.range(8, 32))

// Random pitch stabs
$: note(rand.range(36, 72))
  .s("sawtooth")
  .lpf(rand.range(800, 4000))
  .resonance(rand.range(5, 15))
  .gain(0.4)
  .coarse(rand.range(4, 16))
  .ad(0.001, rand.range(0.05, 0.2))
  .pan(rand)

// Lydian chord stabs
$: note("c4*8 d4*8 c4*8 d4*8")

  .s("square")
  .degradeBy(0.3)
  .lpf(2800)
  .resonance(6)
  .gain(1.5)
  .coarse(4)
  .ad(0.01, 0.1)
  .room(0.3)
  .delay(0.2)
  .delaytime(0.0625)
  .delayfeedback(0.3)

// Noise bursts
$: s("white white white white")
  .gain(rand.range(0.2, 0.5))
  .hpf(rand.range(1000, 10000))
  .lpf(rand.range(4000, 15000))
  .ad(0.001, rand.range(0.05, 0.3))
  .pan(rand)
  .distort(rand.range(0.3, 0.8))

// Ultra-random glitch
$: s("glitch").n(rand.range(0, 9))
  .degradeBy(0.8)
  .speed(rand.range(0.1, 5))
  .gain(rand.range(0.2, 0.6))
  .pan(rand)`,
  },
]

export function getAllGenres() {
  return [...new Set(TRACKS.map((t) => t.genre))].sort()
}

export function getAllTags() {
  return [...new Set(TRACKS.flatMap((t) => t.tags))].sort()
}

export function getTrackById(id) {
  return TRACKS.find((t) => t.id === id)
}

export function getFeaturedTracks() {
  return TRACKS.filter((t) => t.featured)
}

export function getTracksByGenre(genre) {
  return TRACKS.filter((t) => t.genre === genre)
}

export function getTracksByTag(tag) {
  return TRACKS.filter((t) => t.tags.includes(tag))
}

export function searchTracks(query) {
  const q = query.toLowerCase().trim()
  if (!q) return TRACKS
  return TRACKS.filter((t) => {
    const searchable = [t.title, t.description, t.genre, ...t.tags].join(' ').toLowerCase()
    return searchable.includes(q)
  })
}
