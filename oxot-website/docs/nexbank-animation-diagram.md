# NexBank Animation System Architecture

## Video Transition Flow Diagram

```
┌─────────────────────────────────────────────────────────────────────┐
│                         NEXBANK ANIMATION SYSTEM                     │
│                         (Custom JavaScript)                          │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│                            INITIAL LOAD                              │
└─────────────────────────────────────────────────────────────────────┘

1. HTML Loads (Data Attributes Only)
   ↓
2. Poster Images Display (intro.jpg)
   ↓
3. Intersection Observer Triggers
   ↓
4. intro.mp4 Loads & Plays
   ↓
5. Slide 1 Becomes Active


┌─────────────────────────────────────────────────────────────────────┐
│                         VIDEO TRANSITION MATRIX                      │
└─────────────────────────────────────────────────────────────────────┘

                        ┌──────────────────────┐
                        │     SLIDE SYSTEM     │
                        └──────────────────────┘
                                  │
        ┌─────────────────────────┼─────────────────────────┐
        │                         │                         │
        ▼                         ▼                         ▼
┌───────────────┐         ┌───────────────┐       ┌───────────────┐
│   SLIDE 1     │         │   SLIDE 2     │       │   SLIDE 3     │
│ Institutional │         │  Commercial   │       │   Mortgage    │
│   Banking     │         │   Banking     │       │   Banking     │
└───────────────┘         └───────────────┘       └───────────────┘
        │                         │                         │
        │                         │                         │
        ├────── 1-2.mp4 ─────────►│                         │
        │                         │                         │
        ├────────────── 1-3.mp4 ──────────────────────────►│
        │                         │                         │
        │◄────── 2-1.mp4 ─────────┤                         │
        │                         │                         │
        │                         ├────── 2-3.mp4 ─────────►│
        │                         │                         │
        │◄──────────────── 3-1.mp4 ──────────────────────────┤
        │                         │                         │
        │                         │◄────── 3-2.mp4 ─────────┤


┌─────────────────────────────────────────────────────────────────────┐
│                        VIDEO FILE STRUCTURE                          │
└─────────────────────────────────────────────────────────────────────┘

/assets/video/
├── intro.mp4          ← Initial animation (page load)
├── 1-2.mp4            ← Slide 1 → Slide 2 transition
├── 1-3.mp4            ← Slide 1 → Slide 3 transition
├── 2-1.mp4            ← Slide 2 → Slide 1 transition
├── 2-3.mp4            ← Slide 2 → Slide 3 transition
├── 3-1.mp4            ← Slide 3 → Slide 1 transition
└── 3-2.mp4            ← Slide 3 → Slide 2 transition

Total: 7 video files (1 intro + 6 transitions)
Format: MP4 (H.264 codec, muted, optimized for web)


┌─────────────────────────────────────────────────────────────────────┐
│                         NAVIGATION LOGIC                             │
└─────────────────────────────────────────────────────────────────────┘

User Action: Click/Swipe/Arrow Key
       │
       ▼
┌──────────────────┐
│ Detect Current   │
│ Slide (N)        │
└──────────────────┘
       │
       ▼
┌──────────────────┐
│ Detect Target    │
│ Slide (M)        │
└──────────────────┘
       │
       ▼
┌──────────────────┐
│ Find Video       │
│ data-id="N-M"    │
└──────────────────┘
       │
       ▼
┌──────────────────┐
│ Play Transition  │
│ Video            │
└──────────────────┘
       │
       ▼
┌──────────────────┐
│ Video 'ended'    │
│ Event Fires      │
└──────────────────┘
       │
       ▼
┌──────────────────┐
│ Update Slide     │
│ State (M)        │
└──────────────────┘
       │
       ▼
┌──────────────────┐
│ Animate Text     │
│ (CSS/JS)         │
└──────────────────┘


┌─────────────────────────────────────────────────────────────────────┐
│                          DOM STRUCTURE                               │
└─────────────────────────────────────────────────────────────────────┘

<body>
  <div class="home__background">
    <!-- 7 video elements (hidden until triggered) -->
    <video data-id="intro" data-src="/assets/video/intro.mp4"></video>
    <video data-id="1-2" data-src="/assets/video/1-2.mp4"></video>
    <video data-id="1-3" data-src="/assets/video/1-3.mp4"></video>
    <video data-id="2-1" data-src="/assets/video/2-1.mp4"></video>
    <video data-id="2-3" data-src="/assets/video/2-3.mp4"></video>
    <video data-id="3-1" data-src="/assets/video/3-1.mp4"></video>
    <video data-id="3-2" data-src="/assets/video/3-2.mp4"></video>
  </div>

  <div class="home__screens">
    <!-- Slide 1 (Active) -->
    <section class="home__screen is-current">
      <div class="home__index">01 / 03</div>
      <h1 class="home__screen__title">
        <span class="home__screen__title__word">Institutional</span>
        <span class="home__screen__title__word">Banking</span>
      </h1>
    </section>

    <!-- Slide 2 -->
    <section class="home__screen">
      <div class="home__index">02 / 03</div>
      <h1 class="home__screen__title">
        <span class="home__screen__title__word">Commercial</span>
        <span class="home__screen__title__word">Banking</span>
      </h1>
    </section>

    <!-- Slide 3 -->
    <section class="home__screen">
      <div class="home__index">03 / 03</div>
      <h1 class="home__screen__title">
        <span class="home__screen__title__word">Mortgage</span>
        <span class="home__screen__title__word">Banking</span>
      </h1>
    </section>
  </div>
</body>


┌─────────────────────────────────────────────────────────────────────┐
│                       LAZY LOADING SEQUENCE                          │
└─────────────────────────────────────────────────────────────────────┘

Page Load
    │
    ▼
┌─────────────────────────────────┐
│ HTML Parsed                      │
│ - <video> elements exist         │
│ - data-src NOT loaded yet        │
│ - Poster images visible          │
└─────────────────────────────────┘
    │
    ▼
┌─────────────────────────────────┐
│ Intersection Observer Initialized│
│ - Watches video elements         │
│ - Triggers at rootMargin         │
└─────────────────────────────────┘
    │
    ▼
┌─────────────────────────────────┐
│ Video Enters Viewport            │
│ - Observer callback fires        │
└─────────────────────────────────┘
    │
    ▼
┌─────────────────────────────────┐
│ Set video.src = data-src         │
│ - Browser starts downloading     │
└─────────────────────────────────┘
    │
    ▼
┌─────────────────────────────────┐
│ Video Loaded (canplay event)     │
│ - Ready for playback             │
└─────────────────────────────────┘
    │
    ▼
┌─────────────────────────────────┐
│ Play Video                       │
│ - video.play() called            │
└─────────────────────────────────┘


┌─────────────────────────────────────────────────────────────────────┐
│                     CSS STATE MANAGEMENT                             │
└─────────────────────────────────────────────────────────────────────┘

.home__screen
    │
    ├── Default State (Hidden)
    │   - opacity: 0
    │   - pointer-events: none
    │
    └── .is-current (Active)
        - opacity: 1
        - pointer-events: auto
        - triggers child animations

.home__screen__title__word
    │
    ├── Default State (Hidden)
    │   - transform: translateY(50px)
    │   - opacity: 0
    │
    └── Parent .is-current (Animated)
        - transform: translateY(0)
        - opacity: 1
        - transition-delay: staggered (0.1s, 0.2s, 0.3s...)


┌─────────────────────────────────────────────────────────────────────┐
│                    PERFORMANCE OPTIMIZATION                          │
└─────────────────────────────────────────────────────────────────────┘

┌───────────────────────┐
│  1. Lazy Loading      │
│  - Videos load only   │
│    when needed        │
│  - Reduces initial    │
│    page weight        │
└───────────────────────┘
         │
         ▼
┌───────────────────────┐
│  2. Preload Strategy  │
│  - preload="auto"     │
│  - Browser decides    │
│    optimal timing     │
└───────────────────────┘
         │
         ▼
┌───────────────────────┐
│  3. Muted Autoplay    │
│  - No user interaction│
│    required           │
│  - Enables autoplay   │
└───────────────────────┘
         │
         ▼
┌───────────────────────┐
│  4. Playsinline       │
│  - iOS compatibility  │
│  - Prevents fullscreen│
└───────────────────────┘
         │
         ▼
┌───────────────────────┐
│  5. Object-fit Cover  │
│  - Responsive sizing  │
│  - No distortion      │
└───────────────────────┘


┌─────────────────────────────────────────────────────────────────────┐
│                        EVENT FLOW                                    │
└─────────────────────────────────────────────────────────────────────┘

User Interaction
       │
       ▼
┌────────────────┐
│ Click/Swipe    │
│ Navigation     │
└────────────────┘
       │
       ▼
┌────────────────┐      ┌────────────────┐
│ JavaScript     │──────►│ Find Transition│
│ Event Handler  │      │ Video ID       │
└────────────────┘      └────────────────┘
       │                        │
       ▼                        ▼
┌────────────────┐      ┌────────────────┐
│ Pause Current  │      │ Load Video Src │
│ Video (if any) │      │ (if not loaded)│
└────────────────┘      └────────────────┘
       │                        │
       └────────────────────────┘
                  │
                  ▼
         ┌────────────────┐
         │ Play Transition│
         │ Video          │
         └────────────────┘
                  │
                  ▼
         ┌────────────────┐
         │ Wait for       │
         │ 'ended' event  │
         └────────────────┘
                  │
                  ▼
         ┌────────────────┐
         │ Update State   │
         │ - is-current   │
         │ - index counter│
         └────────────────┘
                  │
                  ▼
         ┌────────────────┐
         │ Trigger CSS    │
         │ Transitions    │
         └────────────────┘


┌─────────────────────────────────────────────────────────────────────┐
│                   BROWSER COMPATIBILITY                              │
└─────────────────────────────────────────────────────────────────────┘

Modern Browsers (ES6 Modules)
    │
    ├── scripts.8ca740228f748e2a466f.js
    │   - Native module support
    │   - Modern JavaScript features
    │
    └── vendors.9632e9d9d04342de239b.js
        - Minimal polyfills

Legacy Browsers (IE11, Old Mobile)
    │
    ├── scripts-legacy.22bec8a1259a832392a4.js
    │   - Transpiled ES5
    │   - All polyfills included
    │
    └── vendors-legacy.67ff5449f8efc986963e.js
        - Compatibility libraries


┌─────────────────────────────────────────────────────────────────────┐
│                   VIDEO COMPRESSION SETTINGS                         │
└─────────────────────────────────────────────────────────────────────┘

Recommended FFmpeg Command:

ffmpeg -i input.mp4 \
  -c:v libx264 \              # H.264 codec
  -crf 23 \                   # Quality (18-28, lower = better)
  -preset slow \              # Compression efficiency
  -profile:v main \           # Compatibility profile
  -level 4.0 \                # H.264 level
  -movflags +faststart \      # Enable streaming
  -an \                       # Remove audio (muted)
  output.mp4

Target Specs:
- Resolution: 1920x1080 or 1280x720
- Frame Rate: 30fps or 60fps
- Bitrate: 2-4 Mbps
- Duration: 1-2 seconds per transition
- File Size: < 1-2 MB per video


┌─────────────────────────────────────────────────────────────────────┐
│                      ACCESSIBILITY FEATURES                          │
└─────────────────────────────────────────────────────────────────────┘

1. Reduced Motion Support
   @media (prefers-reduced-motion: reduce) {
     .home__background__video { display: none; }
   }

2. Screen Reader Support
   <video aria-hidden="true" role="presentation">

3. Keyboard Navigation
   - Arrow keys for slide navigation
   - Tab navigation for CTAs

4. Focus Management
   - Visible focus indicators
   - Logical tab order


┌─────────────────────────────────────────────────────────────────────┐
│                    MOBILE OPTIMIZATION                               │
└─────────────────────────────────────────────────────────────────────┘

1. Smaller Video Files
   - Lower resolution (720p)
   - Higher compression
   - Conditional loading based on connection

2. Touch Gestures
   - Swipe left/right for navigation
   - Touch-friendly hit areas

3. Battery Efficiency
   - Pause videos when tab inactive
   - Use prefers-reduced-motion on mobile

4. Network Awareness
   if (navigator.connection.effectiveType === '4g') {
     loadHighQualityVideos();
   } else {
     loadLowQualityVideos();
   }
```

## Key Takeaways

1. **NO animation libraries** - Pure vanilla JavaScript
2. **Pre-rendered transitions** - 6 videos for all slide combinations
3. **Lazy loading** - Videos load on-demand
4. **State-based CSS** - `.is-current` class drives animations
5. **Mobile-first** - Inline playback, muted, optimized
6. **Performance-focused** - Minimal JavaScript, optimized videos
7. **Accessible** - Keyboard navigation, reduced motion support

## Implementation Priority for OXOT

**Phase 1: Core Structure**
- HTML structure with video elements
- Lazy loading implementation
- Basic slide navigation

**Phase 2: Animation System**
- GSAP integration for text animations
- SVG geometric shapes
- Scroll-triggered effects

**Phase 3: Video Production**
- Create background video loop
- Design geometric shape transitions
- Optimize video compression

**Phase 4: Polish & Performance**
- Add accessibility features
- Mobile optimization
- Performance testing
