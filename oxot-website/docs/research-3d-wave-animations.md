# 3D Curved/Wave Background Animation Research
**Research Date:** 2025-11-13
**Purpose:** Evaluate libraries and techniques for creating smooth, flowing 3D curved/wave background animations for web

---

## Executive Summary

For creating NexBank-style 3D curved wave backgrounds with smooth animations and optimal performance, the recommended approaches are:

1. **Best Overall:** Custom WebGL Shaders (highest performance, most control)
2. **Fastest Implementation:** Vanta.js WAVES (plug-and-play, Three.js-based)
3. **Most Flexible:** Three.js with React Three Fiber (component-based, scalable)
4. **Hybrid Approach:** GSAP + WebGL (great for animation control)

---

## 1. Three.js (Direct WebGL 3D Library)

### Package Information
- **NPM Package:** `three`
- **Latest Version:** 0.181.1 (as of November 2025)
- **Weekly Downloads:** Extremely high (4,494 dependents)
- **Unpacked Size:** ~2 GB for full repo, npm package significantly smaller
- **Dependencies:** 0
- **Installation:** `npm install three`

### Capabilities
- Full-featured WebGL 3D library
- Cross-browser compatibility with WebGL and WebGPU renderers
- Extensive geometry and material systems
- Built-in animation loop and camera controls
- Shader material support for custom effects

### Performance Characteristics
- **FPS:** 60 FPS achievable on desktop, 30-60 FPS on mobile with optimization
- **Bundle Size:** Core library is lightweight; grows with added features
- **Mobile Compatibility:** Good with optimization (reduce pixel ratio, disable antialiasing)
- **Rendering:** Hardware-accelerated WebGL

### Wave Pattern Code Example
```javascript
import * as THREE from 'three';

// Scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Mobile optimization
document.body.appendChild(renderer.domElement);

// Wave geometry
const geometry = new THREE.PlaneGeometry(20, 20, 128, 128);
const material = new THREE.ShaderMaterial({
  uniforms: {
    time: { value: 0 },
    waveHeight: { value: 0.5 }
  },
  vertexShader: `
    uniform float time;
    uniform float waveHeight;
    varying vec3 vPosition;

    void main() {
      vPosition = position;
      vec3 pos = position;

      // Create wave pattern
      pos.z = sin(pos.x * 0.5 + time) * cos(pos.y * 0.5 + time) * waveHeight;

      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `,
  fragmentShader: `
    varying vec3 vPosition;

    void main() {
      // Dark background with highlights on curves
      vec3 color = vec3(0.1, 0.1, 0.15);
      float highlight = smoothstep(0.2, 0.8, vPosition.z + 0.5);
      color += vec3(0.2, 0.3, 0.5) * highlight;

      gl_FragColor = vec4(color, 1.0);
    }
  `
});

const waveMesh = new THREE.Mesh(geometry, material);
scene.add(waveMesh);

camera.position.z = 5;

// Animation loop
function animate(time) {
  material.uniforms.time.value = time * 0.001;
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
animate(0);
```

### Implementation Complexity: **7/10**
- Requires understanding of 3D concepts, scene setup, and shaders
- Moderate learning curve for beginners
- Extensive documentation and community support

---

## 2. Vanta.js (Three.js-Based Animated Backgrounds)

### Package Information
- **NPM Package:** `vanta`
- **Latest Version:** Check npm (actively maintained fork exists)
- **Bundle Size:** ~120 KB minified + gzipped (includes Three.js dependency)
- **Dependencies:** Requires `three.js` (r134 or compatible)
- **Installation:** `npm install vanta`

### Capabilities
- Plug-and-play animated 3D backgrounds
- Multiple effects including WAVES, BIRDS, FOG, CELLS, etc.
- Easy integration with vanilla JS, React, Angular, Vue
- WebGL-rendered using Three.js
- Responsive and configurable

### Performance Characteristics
- **FPS:** 60 FPS on most devices
- **Bundle Size:** ~120 KB total (Three.js + Vanta)
- **Mobile Compatibility:** Good, optimized by Three.js
- **Setup Time:** Minutes (fastest implementation)

### Wave Pattern Code Example

#### Vanilla JavaScript
```html
<!DOCTYPE html>
<html>
<head>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/vanta/dist/vanta.waves.min.js"></script>
</head>
<body>
  <div id="vanta-background" style="height: 100vh;"></div>

  <script>
    VANTA.WAVES({
      el: '#vanta-background',
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0x0a0a0f,        // Dark background
      shininess: 35.00,       // Surface reflectivity
      waveHeight: 20.00,      // Wave amplitude
      waveSpeed: 1.50,        // Animation speed
      zoom: 0.75              // Camera distance
    })
  </script>
</body>
</html>
```

#### React Implementation
```jsx
import { useEffect, useRef } from 'react';
import VANTA from 'vanta/dist/vanta.waves.min.js';
import * as THREE from 'three';

function WaveBackground() {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    if (!vantaEffect.current) {
      vantaEffect.current = VANTA.WAVES({
        el: vantaRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        color: 0x0a0a0f,
        shininess: 35,
        waveHeight: 20,
        waveSpeed: 1.5,
        zoom: 0.75
      });
    }

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
      }
    };
  }, []);

  return <div ref={vantaRef} style={{ height: '100vh', width: '100%' }} />;
}

export default WaveBackground;
```

### Implementation Complexity: **2/10**
- Extremely simple setup
- Minimal configuration required
- Works out-of-the-box

---

## 3. GSAP + Canvas (2D Animation Library)

### Package Information
- **NPM Package:** `gsap`
- **Latest Version:** 3.13.0 (as of 2025)
- **Bundle Size:** Core ~60 KB, full plugins add more
- **Dependencies:** 0
- **Installation:** `npm install gsap`

### Capabilities
- Industry-standard animation library
- Animate CSS, SVG, Canvas, WebGL, and JavaScript objects
- Timeline-based animations with precise control
- Excellent performance with requestAnimationFrame
- Now 100% FREE including premium plugins (SplitText, MorphSVG)

### Performance Characteristics
- **FPS:** Highly optimized, 60 FPS standard
- **Bundle Size:** ~60-100 KB depending on plugins
- **Mobile Compatibility:** Excellent, optimized for low-powered devices
- **Use Case:** Best for 2D canvas or when combining with WebGL shaders

### Wave Pattern Code Example (Canvas)
```javascript
import { gsap } from 'gsap';

const canvas = document.getElementById('wave-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Wave parameters
const waveData = {
  amplitude: 50,
  frequency: 0.02,
  phase: 0
};

function drawWave() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Dark background
  ctx.fillStyle = '#0a0a0f';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Draw curved wave
  ctx.beginPath();
  ctx.strokeStyle = '#2a3a5f';
  ctx.lineWidth = 3;

  for (let x = 0; x < canvas.width; x++) {
    const y = canvas.height / 2 +
              Math.sin(x * waveData.frequency + waveData.phase) * waveData.amplitude +
              Math.cos(x * waveData.frequency * 0.5 + waveData.phase * 1.3) * waveData.amplitude * 0.5;

    if (x === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
  }
  ctx.stroke();

  // Highlight effect
  ctx.shadowBlur = 20;
  ctx.shadowColor = '#4a6a9f';
  ctx.stroke();
}

// Animate with GSAP
gsap.to(waveData, {
  phase: Math.PI * 2,
  duration: 3,
  repeat: -1,
  ease: 'none',
  onUpdate: drawWave
});
```

### GSAP + WebGL Shader Animation
```javascript
import { gsap } from 'gsap';

// Animate shader uniforms
const shaderUniforms = {
  uRippleProgress: { value: 0 },
  uWaveAmplitude: { value: 0.5 }
};

// GSAP timeline for shader animation
gsap.timeline({ repeat: -1 })
  .to(shaderUniforms.uRippleProgress, {
    value: 1,
    duration: 2,
    ease: 'power2.inOut'
  })
  .to(shaderUniforms.uRippleProgress, {
    value: 0,
    duration: 2,
    ease: 'power2.inOut'
  });
```

### Implementation Complexity: **5/10**
- Moderate for canvas, easier with pre-existing knowledge
- GSAP syntax is intuitive
- Combining with WebGL shaders adds complexity

---

## 4. Custom WebGL Shaders (Maximum Performance)

### Package Information
- **NPM Package:** None required (native WebGL) or use `three` for helpers
- **Bundle Size:** Minimal (~10-50 KB for basic implementation)
- **Dependencies:** Optional shader libraries
- **Performance:** Highest possible (GPU-accelerated)

### Capabilities
- Full GPU control
- Custom mathematical wave functions
- Noise-based organic movement
- Real-time interaction
- Sub-millisecond render times (0.2ms at 4K reported in 2025 tutorials)

### Performance Characteristics
- **FPS:** 60+ FPS even at 4K resolution
- **Bundle Size:** 10-50 KB for minimal implementation
- **Mobile Compatibility:** Excellent with proper optimization
- **Flexibility:** Complete control over visual effects

### Advanced Wave Shader Code Example
```glsl
// Vertex Shader
uniform float uTime;
uniform float uWaveHeight;
varying vec3 vPosition;
varying vec2 vUv;

void main() {
  vUv = uv;
  vPosition = position;

  vec3 pos = position;

  // Multi-layered wave pattern
  float wave1 = sin(pos.x * 2.0 + uTime) * cos(pos.y * 2.0 + uTime);
  float wave2 = sin(pos.x * 3.0 - uTime * 0.7) * cos(pos.y * 1.5 - uTime * 0.7);
  float wave3 = sin(pos.x * 1.0 + uTime * 1.3) * cos(pos.y * 2.5 + uTime * 1.3);

  pos.z = (wave1 + wave2 * 0.5 + wave3 * 0.3) * uWaveHeight;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
```

```glsl
// Fragment Shader
uniform float uTime;
varying vec3 vPosition;
varying vec2 vUv;

void main() {
  // Dark background with dynamic highlights
  vec3 baseColor = vec3(0.05, 0.05, 0.1);

  // Calculate wave-based lighting
  float elevation = vPosition.z;
  float highlight = smoothstep(-0.3, 0.5, elevation);

  // Add subtle color variation
  vec3 highlightColor = vec3(0.2, 0.4, 0.7);
  vec3 finalColor = mix(baseColor, highlightColor, highlight * 0.6);

  // Add rim lighting effect
  float fresnel = pow(1.0 - dot(normalize(vPosition), vec3(0.0, 0.0, 1.0)), 3.0);
  finalColor += vec3(0.3, 0.5, 0.8) * fresnel * 0.3;

  gl_FragColor = vec4(finalColor, 1.0);
}
```

### JavaScript Setup (using Three.js)
```javascript
import * as THREE from 'three';

const geometry = new THREE.PlaneGeometry(20, 20, 256, 256);
const material = new THREE.ShaderMaterial({
  uniforms: {
    uTime: { value: 0 },
    uWaveHeight: { value: 0.8 }
  },
  vertexShader: vertexShaderCode,   // Insert above vertex shader
  fragmentShader: fragmentShaderCode // Insert above fragment shader
});

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Animation
function animate(time) {
  material.uniforms.uTime.value = time * 0.001;
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
```

### Implementation Complexity: **9/10**
- Requires GLSL shader knowledge
- Understanding of GPU rendering pipeline
- More complex debugging
- Maximum control and performance

---

## 5. React Three Fiber (React + Three.js)

### Package Information
- **NPM Package:** `@react-three/fiber` + `@react-three/drei`
- **Latest Version:** Active development
- **Bundle Size:** Adds minimal overhead to Three.js
- **Dependencies:** `three`, `react`, `react-dom`
- **Installation:** `npm install three @react-three/fiber @react-three/drei`

### Capabilities
- React components for Three.js
- Declarative 3D scene creation
- Built-in hooks for animation and interaction
- Component reusability
- Performance equals or exceeds vanilla Three.js (React scheduling)

### Performance Characteristics
- **FPS:** 60 FPS standard (no overhead vs vanilla Three.js)
- **Bundle Size:** Three.js + R3F (~150-200 KB)
- **Mobile Compatibility:** Excellent with optimization
- **Developer Experience:** Best for React developers

### Wave Pattern Code Example
```jsx
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

function WavePlane() {
  const meshRef = useRef();

  // Custom shader material
  const material = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uWaveHeight: { value: 0.6 }
      },
      vertexShader: `
        uniform float uTime;
        uniform float uWaveHeight;
        varying float vElevation;

        void main() {
          vec3 pos = position;

          float wave = sin(pos.x * 1.5 + uTime) * cos(pos.y * 1.5 + uTime);
          pos.z = wave * uWaveHeight;

          vElevation = pos.z;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        varying float vElevation;

        void main() {
          vec3 color = vec3(0.1, 0.1, 0.15);
          float highlight = smoothstep(-0.3, 0.5, vElevation);
          color += vec3(0.2, 0.4, 0.7) * highlight * 0.5;

          gl_FragColor = vec4(color, 1.0);
        }
      `
    });
  }, []);

  // Animation loop
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.material.uniforms.uTime.value = state.clock.elapsedTime;
    }
  });

  return (
    <mesh ref={meshRef} material={material}>
      <planeGeometry args={[20, 20, 128, 128]} />
    </mesh>
  );
}

function App() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
      <WavePlane />
    </Canvas>
  );
}

export default App;
```

### Implementation Complexity: **6/10**
- Easier for React developers
- Declarative approach simplifies scene management
- Still requires Three.js/3D concepts

---

## 6. Particles.js / tsParticles (Particle Systems)

### Package Information
- **NPM Package:** `tsparticles` (modern fork)
- **Latest Version:** Active development (v3.x)
- **Bundle Size:** Modular, varies by features
- **Installation:** `npm install @tsparticles/engine`

### Capabilities
- Particle-based effects
- Presets: bubbles, confetti, fireworks, stars, etc.
- **Note:** No official "wave" preset exists
- Interactive particles
- Framework integrations (React, Vue, Angular)

### Performance Characteristics
- **FPS:** 60 FPS for moderate particle counts
- **Bundle Size:** 50-150 KB depending on features
- **Mobile Compatibility:** Good with particle count limits
- **Use Case:** Better for particle effects than smooth curved waves

### Limitations for Wave Backgrounds
❌ Not ideal for smooth 3D curved surfaces
❌ No native wave geometry support
✅ Good for particle-based decorative effects
✅ Can simulate wave-like motion with particle movement

### Implementation Complexity: **3/10**
- Very easy with presets
- Not optimal for the desired wave effect

---

## 7. CSS 3D Transforms

### Package Information
- **NPM Package:** None (native CSS)
- **Bundle Size:** 0 KB (native browser feature)
- **Performance:** Hardware-accelerated with `translate3d`

### Capabilities
- Simple 3D transformations
- Hardware acceleration via GPU
- Keyframe animations
- Good for basic 3D effects

### Performance Characteristics
- **FPS:** 60 FPS for simple animations
- **Bundle Size:** 0 KB
- **Mobile Compatibility:** Good but can tax GPU
- **Limitations:** Not suitable for complex organic shapes

### Limitations for Wave Backgrounds
❌ Cannot create complex organic wave geometries
❌ Limited to transforming DOM elements
❌ Performance degrades with many elements
❌ No true mesh/surface manipulation

### Use Case
Only suitable for very simple pseudo-3D effects, not recommended for the NexBank-style wave backgrounds.

### Implementation Complexity: **2/10**
- Very easy to learn
- Not powerful enough for desired effect

---

## Performance Comparison Matrix

| Solution | FPS (Desktop) | FPS (Mobile) | Bundle Size | Complexity | Best For |
|----------|---------------|--------------|-------------|------------|----------|
| **Custom WebGL Shaders** | 60+ | 60+ | 10-50 KB | 9/10 | Maximum performance & control |
| **Three.js Direct** | 60 | 30-60 | ~200 KB | 7/10 | Custom 3D implementations |
| **Vanta.js WAVES** | 60 | 60 | ~120 KB | 2/10 | Fastest implementation |
| **React Three Fiber** | 60 | 60 | ~200 KB | 6/10 | React projects |
| **GSAP + Canvas** | 60 | 60 | ~80 KB | 5/10 | 2D waves or shader animation control |
| **GSAP + WebGL** | 60 | 60 | ~150 KB | 7/10 | Precise animation timing |
| **tsParticles** | 60 | 45-60 | 50-150 KB | 3/10 | Particle effects (not waves) |
| **CSS 3D Transforms** | 60 | 30-60 | 0 KB | 2/10 | Simple effects only |

---

## Recommendations

### For NexBank-Style Wave Backgrounds

#### 🥇 **Best Choice: Custom WebGL Shaders**
**Why:**
- Highest performance (0.2ms render at 4K)
- Complete visual control
- Smallest bundle size
- GPU-accelerated
- Future-proof

**When to use:**
- Performance is critical
- You need unique, custom wave patterns
- Team has shader experience or learning time
- Long-term project worth the investment

**Code Example:** See section 4 above

---

#### 🥈 **Fastest Implementation: Vanta.js WAVES**
**Why:**
- Plug-and-play in minutes
- Good performance out-of-the-box
- Minimal code required
- Mobile-optimized
- Easy customization

**When to use:**
- Rapid prototyping or MVP
- Quick implementation needed
- Standard wave effect is sufficient
- Limited development time

**Code Example:** See section 2 above

---

#### 🥉 **Best for React Projects: React Three Fiber**
**Why:**
- Declarative React components
- Full Three.js power
- Excellent performance
- Component reusability
- Active ecosystem

**When to use:**
- React-based application
- Need component architecture
- Team familiar with React
- Want balance of power and simplicity

**Code Example:** See section 5 above

---

### Implementation Strategy

#### Phase 1: Quick Prototype (Days 1-2)
```bash
# Start with Vanta.js for immediate visual feedback
npm install vanta three
```

#### Phase 2: Custom Development (Weeks 1-2)
```bash
# Migrate to custom WebGL shaders for production
npm install three
# Build custom shaders based on section 4 code
```

#### Phase 3: Optimization (Ongoing)
- Monitor FPS with stats.js
- Reduce pixel ratio on mobile
- Implement LOD (Level of Detail)
- Use PerformanceMonitor for adaptive quality

---

## Mobile Optimization Checklist

✅ **Reduce Pixel Ratio**
```javascript
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
```

✅ **Disable Antialiasing on Mobile**
```javascript
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
const renderer = new THREE.WebGLRenderer({
  antialias: !isMobile,
  alpha: true
});
```

✅ **Lower Geometry Resolution on Mobile**
```javascript
const segments = isMobile ? 64 : 128;
const geometry = new THREE.PlaneGeometry(20, 20, segments, segments);
```

✅ **Implement Adaptive Performance**
```jsx
import { PerformanceMonitor } from '@react-three/drei';

<PerformanceMonitor
  onDecline={() => {
    // Reduce quality
    setQuality('low');
  }}
/>
```

---

## Additional Resources

### Documentation
- **Three.js:** https://threejs.org/docs/
- **Vanta.js:** https://www.vantajs.com/
- **GSAP:** https://gsap.com/docs/
- **React Three Fiber:** https://docs.pmnd.rs/react-three-fiber

### 2025 Tutorials
- [Interactive WebGL Backgrounds (Codrops)](https://tympanus.net/codrops/2025/07/30/interactive-webgl-backgrounds-a-quick-guide-to-bayer-dithering/)
- [Animating WebGL Shaders with GSAP (Codrops)](https://tympanus.net/codrops/2025/10/08/how-to-animate-webgl-shaders-with-gsap-ripples-reveals-and-dynamic-blur-effects/)
- [WebGL Shader Wave Distortion (Medium)](https://medium.com/@nia.ravi23/webgl-shader-program-wave-distortion-effect-31ef4ab05254)

### Tools
- **Bundle Size Analysis:** https://bundlephobia.com/
- **Performance Monitoring:** stats.js
- **Shader Development:** https://www.shadertoy.com/

---

## Conclusion

For achieving NexBank-style 3D curved/wave backgrounds:

1. **Production-Ready:** Custom WebGL Shaders (best performance)
2. **Quick Start:** Vanta.js WAVES (fastest implementation)
3. **React Projects:** React Three Fiber (best DX)
4. **Animation Control:** GSAP + WebGL (precise timing)

All solutions support mobile with proper optimization, achieving 30-60 FPS with techniques like reduced pixel ratio, adaptive quality, and efficient geometry.

**Final Recommendation:** Start with Vanta.js for prototyping, migrate to custom WebGL shaders for production if custom wave patterns are needed.
