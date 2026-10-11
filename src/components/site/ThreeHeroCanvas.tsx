"use client";

import { useEffect, useRef, useState } from "react";
import type * as THREE from "three";

export function ThreeHeroCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const container = containerRef.current;
    if (!container || typeof globalThis === "undefined") return;

    // Check prefers-reduced-motion
    if (globalThis.matchMedia && globalThis.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let animationFrameId: number;
    let renderer: THREE.WebGLRenderer | undefined;
    let scene: THREE.Scene | undefined;
    let camera: THREE.PerspectiveCamera | undefined;
    let geometry: THREE.BufferGeometry | undefined;
    let material: THREE.PointsMaterial | undefined;
    let texture: THREE.CanvasTexture | undefined;

    import("three").then((threeModule) => {
      if (!containerRef.current) return;
      const THREE = threeModule;

      const width = container.clientWidth || globalThis.innerWidth;
      const height = container.clientHeight || 560;

      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
      camera.position.z = 24;

      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(globalThis.devicePixelRatio || 1, 2));
      container.appendChild(renderer.domElement);

      const particleCount = 80;
      geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);
      const speeds = new Float32Array(particleCount);

      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 34;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 22;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 14;
        speeds[i] = Math.random() * 0.007 + 0.003;
      }

      geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

      // Circular canvas texture for smooth amber oil droplets
      const canvas = document.createElement("canvas");
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 30);
        grad.addColorStop(0, "rgba(224, 150, 65, 0.9)");
        grad.addColorStop(0.5, "rgba(180, 115, 50, 0.5)");
        grad.addColorStop(1, "rgba(255, 255, 255, 0)");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(32, 32, 30, 0, Math.PI * 2);
        ctx.fill();
      }
      texture = new THREE.CanvasTexture(canvas);

      material = new THREE.PointsMaterial({
        size: 1.5,
        map: texture,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        opacity: 0.65,
      });

      const particles = new THREE.Points(geometry, material);
      scene.add(particles);

      let mouseX = 0;
      let mouseY = 0;
      let targetX = 0;
      let targetY = 0;

      const handleMouseMove = (e: MouseEvent) => {
        const rect = container.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
        targetX = x * 2.0;
        targetY = y * 1.5;
      };

      globalThis.addEventListener("mousemove", handleMouseMove, { passive: true });

      const handleResize = () => {
        if (!containerRef.current || !renderer || !camera) return;
        const w = containerRef.current.clientWidth;
        const h = containerRef.current.clientHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      };

      globalThis.addEventListener("resize", handleResize);

      const clock = new THREE.Clock();

      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);
        const elapsedTime = clock.getElapsedTime();

        mouseX += (targetX - mouseX) * 0.05;
        mouseY += (targetY - mouseY) * 0.05;

        if (!renderer || !scene || !camera || !geometry) return;

        particles.rotation.y = elapsedTime * 0.03 + mouseX * 0.2;
        particles.rotation.x = Math.sin(elapsedTime * 0.02) * 0.08 + mouseY * 0.15;

        const pos = geometry.attributes.position.array as Float32Array;
        for (let i = 0; i < particleCount; i++) {
          pos[i * 3 + 1] += Math.sin(elapsedTime + i) * speeds[i];
          if (pos[i * 3 + 1] > 12) pos[i * 3 + 1] = -12;
        }
        geometry.attributes.position.needsUpdate = true;

        renderer.render(scene, camera);
      };

      animate();
    });

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      if (renderer && container && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      if (geometry) geometry.dispose();
      if (material) material.dispose();
      if (texture) texture.dispose();
      if (renderer) renderer.dispose();
    };
  }, [mounted]);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden opacity-50 transition-opacity duration-1000"
      aria-hidden="true"
    />
  );
}
