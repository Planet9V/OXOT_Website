import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import ThreeBackground from '../ThreeBackground';
import * as THREE from 'three';

// Mock Three.js to avoid WebGL issues in test environment
vi.mock('three', () => {
  const mockGeometry = {
    dispose: vi.fn(),
  };

  const mockMaterial = {
    dispose: vi.fn(),
    clone: vi.fn(function() { return this; }),
  };

  const mockMesh = {
    position: { x: 0, y: 0, z: 0 },
    rotation: { x: 0, y: 0, z: 0 },
    scale: { set: vi.fn() },
    userData: {},
    geometry: mockGeometry,
    material: mockMaterial,
  };

  return {
    Scene: vi.fn(() => ({
      add: vi.fn(),
      fog: null,
      position: { x: 0, y: 0, z: 0 },
    })),
    PerspectiveCamera: vi.fn(() => ({
      position: { x: 0, y: 0, z: 0 },
      aspect: 1,
      updateProjectionMatrix: vi.fn(),
      lookAt: vi.fn(),
    })),
    WebGLRenderer: vi.fn(() => ({
      setSize: vi.fn(),
      setPixelRatio: vi.fn(),
      setClearColor: vi.fn(),
      render: vi.fn(),
      dispose: vi.fn(),
    })),
    AmbientLight: vi.fn(() => ({})),
    PointLight: vi.fn(() => ({
      position: { set: vi.fn() },
    })),
    BoxGeometry: vi.fn(() => mockGeometry),
    SphereGeometry: vi.fn(() => mockGeometry),
    OctahedronGeometry: vi.fn(() => mockGeometry),
    TetrahedronGeometry: vi.fn(() => mockGeometry),
    TorusGeometry: vi.fn(() => mockGeometry),
    MeshPhongMaterial: vi.fn(() => mockMaterial),
    Mesh: vi.fn(() => mockMesh),
    FogExp2: vi.fn(),
  };
});

describe('ThreeBackground', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  it('renders canvas element', () => {
    render(<ThreeBackground />);
    const canvas = document.querySelector('canvas');
    expect(canvas).toBeInTheDocument();
    expect(canvas).toHaveClass('three-background');
  });

  it('initializes Three.js scene', () => {
    render(<ThreeBackground />);
    expect(THREE.Scene).toHaveBeenCalled();
    expect(THREE.PerspectiveCamera).toHaveBeenCalled();
    expect(THREE.WebGLRenderer).toHaveBeenCalled();
  });

  it('creates lighting', () => {
    render(<ThreeBackground />);
    expect(THREE.AmbientLight).toHaveBeenCalled();
    expect(THREE.PointLight).toHaveBeenCalledTimes(2);
  });

  it('creates geometric shapes', () => {
    render(<ThreeBackground />);
    // Should create multiple geometries
    expect(THREE.BoxGeometry).toHaveBeenCalled();
    expect(THREE.MeshPhongMaterial).toHaveBeenCalled();
    expect(THREE.Mesh).toHaveBeenCalled();
  });

  it('cleans up on unmount', () => {
    const { unmount } = render(<ThreeBackground />);

    // Get renderer mock
    const rendererInstance = THREE.WebGLRenderer.mock.results[0].value;

    unmount();

    // Verify cleanup was called
    expect(rendererInstance.dispose).toHaveBeenCalled();
  });

  it('sets up resize handler', () => {
    const addEventListenerSpy = vi.spyOn(window, 'addEventListener');
    render(<ThreeBackground />);

    expect(addEventListenerSpy).toHaveBeenCalledWith('resize', expect.any(Function));

    addEventListenerSpy.mockRestore();
  });

  it('sets up mouse move handler', () => {
    const addEventListenerSpy = vi.spyOn(window, 'addEventListener');
    render(<ThreeBackground />);

    expect(addEventListenerSpy).toHaveBeenCalledWith('mousemove', expect.any(Function));

    addEventListenerSpy.mockRestore();
  });
});
