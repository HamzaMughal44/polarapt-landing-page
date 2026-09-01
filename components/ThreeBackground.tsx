"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeBackground() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // ── Scene ──────────────────────────────────────────────
    const scene = new THREE.Scene();

    // ── Camera ─────────────────────────────────────────────
    const camera = new THREE.PerspectiveCamera(
      65,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 28;

    // ── Renderer ───────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    renderer.shadowMap.enabled = true;
    mount.appendChild(renderer.domElement);

    // ── Lights ─────────────────────────────────────────────
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x3b82f6, 4, 80);
    pointLight1.position.set(10, 10, 10);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x8b5cf6, 3.5, 80);
    pointLight2.position.set(-10, -8, 5);
    scene.add(pointLight2);

    const pointLight3 = new THREE.PointLight(0x0ea5e9, 3, 60);
    pointLight3.position.set(0, 15, -5);
    scene.add(pointLight3);

    const pointLight4 = new THREE.PointLight(0x6366f1, 2.5, 60);
    pointLight4.position.set(-15, 5, 8);
    scene.add(pointLight4);

    // ── Objects data ───────────────────────────────────────
    const objectDefs = [
      // Large background anchors
      { geo: new THREE.IcosahedronGeometry(2.2, 1),   pos: [-14,  7, -12], wire: false, opacity: 0.13 },
      { geo: new THREE.OctahedronGeometry(1.9, 0),    pos: [ 13,  9, -14], wire: false, opacity: 0.12 },
      { geo: new THREE.IcosahedronGeometry(1.7, 0),   pos: [-12, -8, -10], wire: true,  opacity: 0.20 },
      { geo: new THREE.TorusGeometry(2.0, 0.35, 12, 40), pos: [14, -5, -12], wire: false, opacity: 0.11 },
      { geo: new THREE.OctahedronGeometry(2.1, 1),    pos: [ 2,  13, -14], wire: false, opacity: 0.10 },
      // Mid layer
      { geo: new THREE.TetrahedronGeometry(1.3, 0),   pos: [-7,  5,  -5], wire: true,  opacity: 0.22 },
      { geo: new THREE.IcosahedronGeometry(1.1, 0),   pos: [ 8, -7,  -4], wire: false, opacity: 0.18 },
      { geo: new THREE.OctahedronGeometry(1.0, 0),    pos: [-5, -5,  -6], wire: true,  opacity: 0.20 },
      { geo: new THREE.TorusGeometry(1.0, 0.3, 8, 20), pos: [10,  4,  -5], wire: false, opacity: 0.16 },
      { geo: new THREE.TetrahedronGeometry(1.2, 0),   pos: [ 4, -10, -5], wire: false, opacity: 0.17 },
      { geo: new THREE.IcosahedronGeometry(0.9, 1),   pos: [-11, 0,  -4], wire: true,  opacity: 0.21 },
      { geo: new THREE.OctahedronGeometry(1.3, 0),    pos: [ 1,  8,  -6], wire: false, opacity: 0.14 },
      // Foreground small floaters
      { geo: new THREE.IcosahedronGeometry(0.55, 0),  pos: [-3,  4,  2],  wire: true,  opacity: 0.28 },
      { geo: new THREE.TetrahedronGeometry(0.6, 0),   pos: [ 5,  2,  3],  wire: true,  opacity: 0.26 },
      { geo: new THREE.OctahedronGeometry(0.5, 0),    pos: [-6, -3,  1],  wire: true,  opacity: 0.25 },
      { geo: new THREE.IcosahedronGeometry(0.45, 0),  pos: [ 7, -2,  2],  wire: true,  opacity: 0.24 },
      { geo: new THREE.TetrahedronGeometry(0.5, 0),   pos: [ 0, -6,  3],  wire: true,  opacity: 0.27 },
      { geo: new THREE.OctahedronGeometry(0.6, 0),    pos: [-9,  2,  2],  wire: true,  opacity: 0.23 },
      // Extra depth rings
      { geo: new THREE.TorusGeometry(3.5, 0.12, 6, 60), pos: [0, 0, -18], wire: false, opacity: 0.07 },
      { geo: new THREE.TorusGeometry(5.0, 0.10, 6, 80), pos: [0, 0, -22], wire: false, opacity: 0.05 },
    ];

    const colors = [
      0x3b82f6, 0x6366f1, 0x8b5cf6, 0x0ea5e9,
      0x60a5fa, 0xa78bfa, 0x38bdf8, 0x818cf8,
      0x93c5fd, 0xc4b5fd,
    ];

    type ObjData = {
      mesh: THREE.Mesh;
      basePos: [number, number, number];
      rotX: number;
      rotY: number;
      rotZ: number;
      floatSpeed: number;
      floatAmp: number;
      floatOffset: number;
      orbitRadius: number;
      orbitSpeed: number;
      orbitAngle: number;
      pulseSpeed: number;
      pulseOffset: number;
    };

    const objects: ObjData[] = [];

    objectDefs.forEach(({ geo, pos, wire, opacity }, i) => {
      const color = colors[i % colors.length];
      const mat = new THREE.MeshPhongMaterial({
        color,
        transparent: true,
        opacity,
        wireframe: wire,
        shininess: 120,
        specular: new THREE.Color(0xaaaaff),
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(...pos);
      scene.add(mesh);

      objects.push({
        mesh,
        basePos: [...pos] as [number, number, number],
        rotX: (Math.random() - 0.5) * 0.012,
        rotY: (Math.random() - 0.5) * 0.016,
        rotZ: (Math.random() - 0.5) * 0.008,
        floatSpeed: 0.25 + Math.random() * 0.55,
        floatAmp: 0.6 + Math.random() * 1.6,
        floatOffset: Math.random() * Math.PI * 2,
        orbitRadius: 0.3 + Math.random() * 1.2,
        orbitSpeed: 0.0008 + Math.random() * 0.0018,
        orbitAngle: Math.random() * Math.PI * 2,
        pulseSpeed: 0.4 + Math.random() * 0.6,
        pulseOffset: Math.random() * Math.PI * 2,
      });
    });

    // ── Click ripple burst ─────────────────────────────────
    const ripples: { mesh: THREE.Mesh; born: number }[] = [];

    const onClickRipple = (e: MouseEvent) => {
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = -(e.clientY / window.innerHeight) * 2 + 1;
      const vec = new THREE.Vector3(nx, ny, 0.5).unproject(camera);
      const dir = vec.sub(camera.position).normalize();
      const dist = (0 - camera.position.z) / dir.z;
      const pos = camera.position.clone().add(dir.multiplyScalar(dist));

      for (let r = 0; r < 6; r++) {
        const rippleGeo = new THREE.RingGeometry(0.1, 0.25, 32);
        const rippleMat = new THREE.MeshBasicMaterial({
          color: colors[Math.floor(Math.random() * colors.length)],
          transparent: true,
          opacity: 0.7,
          side: THREE.DoubleSide,
        });
        const ring = new THREE.Mesh(rippleGeo, rippleMat);
        ring.position.copy(pos);
        ring.rotation.z = Math.random() * Math.PI;
        scene.add(ring);
        ripples.push({ mesh: ring, born: clock.getElapsedTime() + r * 0.12 });
      }
    };
    window.addEventListener("click", onClickRipple);

    // ── Mouse parallax ────────────────────────────────────
    const targetRot = { x: 0, y: 0 };
    const currentRot = { x: 0, y: 0 };

    const onMouseMove = (e: MouseEvent) => {
      targetRot.x = -((e.clientY / window.innerHeight) - 0.5) * 0.5;
      targetRot.y = ((e.clientX / window.innerWidth) - 0.5) * 0.7;
    };
    window.addEventListener("mousemove", onMouseMove);

    // ── Resize ─────────────────────────────────────────────
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    // ── Animation loop ─────────────────────────────────────
    let frameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      // Smooth mouse parallax
      currentRot.x += (targetRot.x - currentRot.x) * 0.04;
      currentRot.y += (targetRot.y - currentRot.y) * 0.04;
      scene.rotation.x = currentRot.x;
      scene.rotation.y = currentRot.y;

      // Animate objects
      objects.forEach((o) => {
        o.mesh.rotation.x += o.rotX;
        o.mesh.rotation.y += o.rotY;
        o.mesh.rotation.z += o.rotZ;

        // Float
        o.mesh.position.y =
          o.basePos[1] + Math.sin(t * o.floatSpeed + o.floatOffset) * o.floatAmp;

        // Orbit
        o.orbitAngle += o.orbitSpeed;
        o.mesh.position.x =
          o.basePos[0] + Math.cos(o.orbitAngle) * o.orbitRadius;

        // Pulse opacity
        const mat = o.mesh.material as THREE.MeshPhongMaterial;
        const baseOpacity = objectDefs[objects.indexOf(o)]?.opacity ?? 0.15;
        mat.opacity =
          baseOpacity + Math.sin(t * o.pulseSpeed + o.pulseOffset) * baseOpacity * 0.4;
      });

      // Animate lights in 3D paths
      pointLight1.position.set(
        Math.sin(t * 0.4) * 14,
        Math.cos(t * 0.3) * 12,
        Math.sin(t * 0.2) * 8
      );
      pointLight2.position.set(
        Math.cos(t * 0.35) * -12,
        Math.sin(t * 0.45) * 10,
        Math.cos(t * 0.25) * 6
      );
      pointLight3.position.set(
        Math.sin(t * 0.28) * 10,
        Math.cos(t * 0.38) * 14,
        Math.sin(t * 0.32) * -6
      );
      pointLight4.position.set(
        Math.cos(t * 0.22) * -13,
        Math.sin(t * 0.30) * 8,
        Math.cos(t * 0.18) * 10
      );

      // Animate ripples
      for (let i = ripples.length - 1; i >= 0; i--) {
        const { mesh, born } = ripples[i];
        const age = t - born;
        if (age < 0) continue;
        if (age > 1.4) {
          scene.remove(mesh);
          ripples.splice(i, 1);
          continue;
        }
        const progress = age / 1.4;
        const scale = 1 + progress * 18;
        mesh.scale.set(scale, scale, scale);
        (mesh.material as THREE.MeshBasicMaterial).opacity =
          0.7 * (1 - progress);
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("click", onClickRipple);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
