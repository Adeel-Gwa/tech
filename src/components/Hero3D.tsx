import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const Hero3D: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 500;
    const height = container.clientHeight || 500;

    // Scene setup
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 8.5);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // Root floating group
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // 1. Sleek Floating 3D Laptop Group
    const laptopGroup = new THREE.Group();
    laptopGroup.position.set(-0.6, -0.4, 0);
    laptopGroup.rotation.set(0.15, -0.35, 0.05);
    rootGroup.add(laptopGroup);

    // Laptop Base
    const baseGeo = new THREE.BoxGeometry(3.2, 0.12, 2.2);
    const metalMat = new THREE.MeshStandardMaterial({
      color: 0x182036,
      metalness: 0.85,
      roughness: 0.25
    });
    const laptopBase = new THREE.Mesh(baseGeo, metalMat);
    laptopGroup.add(laptopBase);

    // Keyboard trackpad area indent
    const trackpadGeo = new THREE.PlaneGeometry(1.0, 0.7);
    const trackpadMat = new THREE.MeshBasicMaterial({ color: 0x10172a });
    const trackpad = new THREE.Mesh(trackpadGeo, trackpadMat);
    trackpad.rotation.x = -Math.PI / 2;
    trackpad.position.set(0, 0.065, 0.55);
    laptopGroup.add(trackpad);

    // Laptop Screen Lid
    const lidGroup = new THREE.Group();
    lidGroup.position.set(0, 0.06, -1.05);
    lidGroup.rotation.x = 1.35; // open angle ~77 deg
    laptopGroup.add(lidGroup);

    const lidBackGeo = new THREE.BoxGeometry(3.2, 2.1, 0.08);
    const lidBack = new THREE.Mesh(lidBackGeo, metalMat);
    lidBack.position.set(0, 1.05, 0);
    lidGroup.add(lidBack);

    // Screen Display Glass with Code Graphic
    const screenGeo = new THREE.PlaneGeometry(3.0, 1.9);

    // Create dynamic code lines canvas texture
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 320;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.fillStyle = '#0a0f1d';
      ctx.fillRect(0, 0, 512, 320);

      // Window header dots
      ctx.fillStyle = '#ef4444';
      ctx.beginPath();
      ctx.arc(24, 20, 6, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#f59e0b';
      ctx.beginPath();
      ctx.arc(42, 20, 6, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#10b981';
      ctx.beginPath();
      ctx.arc(60, 20, 6, 0, Math.PI * 2);
      ctx.fill();

      // Code line representations
      const lines = [
        { color: '#818cf8', w: 180, x: 24, y: 55 },
        { color: '#38bdf8', w: 280, x: 50, y: 85 },
        { color: '#34d399', w: 220, x: 75, y: 115 },
        { color: '#f472b6', w: 320, x: 50, y: 145 },
        { color: '#a78bfa', w: 190, x: 75, y: 175 },
        { color: '#38bdf8', w: 240, x: 24, y: 215 },
        { color: '#fbbf24', w: 160, x: 50, y: 245 },
        { color: '#34d399', w: 340, x: 24, y: 275 }
      ];

      lines.forEach((line) => {
        ctx.fillStyle = line.color;
        ctx.fillRect(line.x, line.y, line.w, 8);
      });
    }

    const screenTexture = new THREE.CanvasTexture(canvas);
    const screenMat = new THREE.MeshBasicMaterial({ map: screenTexture });
    const screenMesh = new THREE.Mesh(screenGeo, screenMat);
    screenMesh.position.set(0, 1.05, 0.045);
    lidGroup.add(screenMesh);

    // 2. Floating AI Glowing Core Orb
    const orbGroup = new THREE.Group();
    orbGroup.position.set(2.0, 1.0, 0.5);
    rootGroup.add(orbGroup);

    // Glowing sphere
    const orbGeo = new THREE.SphereGeometry(0.7, 32, 32);
    const orbMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      emissive: 0x0284c7,
      emissiveIntensity: 0.8,
      roughness: 0.1,
      metalness: 0.9,
      wireframe: false
    });
    const orb = new THREE.Mesh(orbGeo, orbMat);
    orbGroup.add(orb);

    // Outer wireframe energy shell
    const outerGeo = new THREE.IcosahedronGeometry(1.0, 1);
    const outerMat = new THREE.MeshBasicMaterial({
      color: 0x818cf8,
      wireframe: true,
      transparent: true,
      opacity: 0.4
    });
    const outerWire = new THREE.Mesh(outerGeo, outerMat);
    orbGroup.add(outerWire);

    // Rotating orbital rings
    const ringGeo1 = new THREE.TorusGeometry(1.25, 0.02, 16, 100);
    const ringMat1 = new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.8 });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    orbGroup.add(ring1);

    const ringGeo2 = new THREE.TorusGeometry(1.4, 0.015, 16, 100);
    const ringMat2 = new THREE.MeshBasicMaterial({ color: 0xc084fc, transparent: true, opacity: 0.6 });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.y = Math.PI / 4;
    orbGroup.add(ring2);

    // 3. Floating 3D Geometric Nodes & Particles
    const particlesCount = 45;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 8;
      particlePositions[i + 1] = (Math.random() - 0.5) * 6;
      particlePositions[i + 2] = (Math.random() - 0.5) * 4;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 0.08,
      transparent: true,
      opacity: 0.6
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    rootGroup.add(particles);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const cyanPoint = new THREE.PointLight(0x38bdf8, 3.5, 15);
    cyanPoint.position.set(2, 3, 3);
    scene.add(cyanPoint);

    const violetPoint = new THREE.PointLight(0xa855f7, 3.0, 15);
    violetPoint.position.set(-3, -2, 2);
    scene.add(violetPoint);

    // Mouse Parallax Handling
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetX = x * 0.4;
      targetY = y * 0.4;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Resize handling
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse parallax damping
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      rootGroup.rotation.y = mouseX * 0.6;
      rootGroup.rotation.x = -mouseY * 0.5;

      // Floating wave animation for laptop
      laptopGroup.position.y = -0.4 + Math.sin(elapsedTime * 1.2) * 0.12;
      laptopGroup.rotation.z = 0.05 + Math.cos(elapsedTime * 0.8) * 0.03;

      // Orb animations
      orbGroup.position.y = 1.0 + Math.sin(elapsedTime * 1.5 + 1) * 0.15;
      orbGroup.rotation.y += 0.015;
      outerWire.rotation.x += 0.01;
      outerWire.rotation.z += 0.008;
      ring1.rotation.z += 0.02;
      ring2.rotation.x += 0.015;

      // Particle slow drift
      particles.rotation.y = elapsedTime * 0.03;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[380px] sm:h-[460px] lg:h-[540px] flex items-center justify-center select-none">
      {/* Three.js Canvas Container */}
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Floating 3D Technology Glass Badges */}
      <div className="pointer-events-none absolute inset-0">
        {/* React Badge */}
        <div className="absolute top-6 left-4 sm:left-12 px-3 py-1.5 rounded-xl glass-panel border border-cyan-500/30 flex items-center gap-2 animate-float-slow shadow-[0_0_20px_rgba(56,189,248,0.2)] backdrop-blur-md">
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
          <span className="text-xs font-semibold text-cyan-200">React &amp; Next.js</span>
        </div>

        {/* AI Agent Badge */}
        <div className="absolute top-16 right-4 sm:right-10 px-3.5 py-1.5 rounded-xl glass-panel border border-violet-500/40 flex items-center gap-2 animate-float-slow [animation-delay:1.5s] shadow-[0_0_20px_rgba(139,92,246,0.25)] backdrop-blur-md">
          <span className="text-xs">✨</span>
          <span className="text-xs font-semibold text-purple-200">Gemini AI Models</span>
        </div>

        {/* Node.js & DB Badge */}
        <div className="absolute bottom-16 left-6 sm:left-14 px-3 py-1.5 rounded-xl glass-panel border border-emerald-500/30 flex items-center gap-2 animate-float-slow [animation-delay:2.5s] backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span className="text-xs font-medium text-emerald-200">Node.js · PostgreSQL</span>
        </div>

        {/* Cybersecurity Badge */}
        <div className="absolute bottom-8 right-8 sm:right-16 px-3 py-1.5 rounded-xl glass-panel border border-blue-500/30 flex items-center gap-2 animate-float-slow [animation-delay:3.5s] backdrop-blur-md">
          <span className="text-xs">🛡️</span>
          <span className="text-xs font-medium text-blue-200">Cyber Defense</span>
        </div>
      </div>
    </div>
  );
};
