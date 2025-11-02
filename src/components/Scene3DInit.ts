import * as THREE from 'three';

export async function initScene3D(container: HTMLElement) {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x000000);
  scene.fog = new THREE.Fog(0x000000, 80, 200);

  const camera = new THREE.PerspectiveCamera(
    60,
    container.clientWidth / container.clientHeight,
    0.1,
    2000
  );
  camera.position.set(0, 8, 20);
  camera.lookAt(0, 0, 0);

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFShadowMap;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  container.appendChild(renderer.domElement);

  // Advanced lighting setup
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
  scene.add(ambientLight);

  const pointLight1 = new THREE.PointLight(0x00ffff, 1.5);
  pointLight1.position.set(20, 20, 20);
  pointLight1.castShadow = true;
  pointLight1.shadow.mapSize.width = 4096;
  pointLight1.shadow.mapSize.height = 4096;
  pointLight1.decay = 2;
  scene.add(pointLight1);

  const pointLight2 = new THREE.PointLight(0xff00ff, 1.2);
  pointLight2.position.set(-20, -15, 15);
  pointLight2.decay = 2;
  scene.add(pointLight2);

  const pointLight3 = new THREE.PointLight(0x00ff88, 0.8);
  pointLight3.position.set(0, 30, -20);
  pointLight3.decay = 2;
  scene.add(pointLight3);

  // Central terminal platform
  const platformGeometry = new THREE.CylinderGeometry(4, 5, 0.5, 64);
  const platformMaterial = new THREE.MeshStandardMaterial({
    color: 0x0a1a1a,
    metalness: 0.9,
    roughness: 0.3,
    emissive: 0x001a2a,
  });
  const platform = new THREE.Mesh(platformGeometry, platformMaterial);
  platform.receiveShadow = true;
  platform.castShadow = true;
  scene.add(platform);

  // Main terminal screen
  const screenGroup = new THREE.Group();
  const screenGeometry = new THREE.BoxGeometry(4, 3, 0.2);
  const screenMaterial = new THREE.MeshStandardMaterial({
    color: 0x050505,
    metalness: 0.95,
    roughness: 0.05,
    emissive: 0x001a1a,
  });
  const screen = new THREE.Mesh(screenGeometry, screenMaterial);
  screen.castShadow = true;
  screen.receiveShadow = true;
  screenGroup.add(screen);

  // Screen glow
  const screenGlowGeometry = new THREE.BoxGeometry(4.1, 3.1, 0.25);
  const screenGlowMaterial = new THREE.MeshBasicMaterial({
    color: 0x00ffff,
    transparent: true,
    opacity: 0.15,
  });
  const screenGlow = new THREE.Mesh(screenGlowGeometry, screenGlowMaterial);
  screenGlow.position.z = 0.15;
  screenGroup.add(screenGlow);

  // Corner brackets with glow
  const bracketSize = 0.2;
  const bracketPositions = [
    [-2.2, 1.6, 0.2],
    [2.2, 1.6, 0.2],
    [-2.2, -1.6, 0.2],
    [2.2, -1.6, 0.2],
  ];

  bracketPositions.forEach((pos) => {
    const bracket = new THREE.Mesh(
      new THREE.BoxGeometry(bracketSize, bracketSize, bracketSize),
      new THREE.MeshStandardMaterial({
        color: 0x00ffff,
        emissive: 0x00aaaa,
        emissiveIntensity: 0.8,
        metalness: 1,
        roughness: 0,
      })
    );
    bracket.position.set(...(pos as [number, number, number]));
    bracket.castShadow = true;
    screenGroup.add(bracket);
  });

  screenGroup.position.y = 2;
  scene.add(screenGroup);

  // Holographic rings around terminal
  for (let i = 0; i < 3; i++) {
    const ringGeometry = new THREE.TorusGeometry(5 + i * 1.5, 0.1, 16, 100);
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: i % 2 === 0 ? 0x00ffff : 0xff00ff,
      transparent: true,
      opacity: 0.4,
      wireframe: false,
    });
    const ring = new THREE.Mesh(ringGeometry, ringMaterial);
    ring.rotation.x = Math.random() * Math.PI;
    ring.position.y = 1;
    scene.add(ring);
  }

  // Particle system with physics
  const particlesGeometry = new THREE.BufferGeometry();
  const particleCount = 1000;
  const positionArray = new Float32Array(particleCount * 3);
  const velocityArray = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount * 3; i += 3) {
    positionArray[i] = (Math.random() - 0.5) * 100;
    positionArray[i + 1] = (Math.random() - 0.5) * 80;
    positionArray[i + 2] = (Math.random() - 0.5) * 100;

    velocityArray[i] = (Math.random() - 0.5) * 0.2;
    velocityArray[i + 1] = (Math.random() - 0.5) * 0.2;
    velocityArray[i + 2] = (Math.random() - 0.5) * 0.2;
  }

  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positionArray, 3));
  
  const particlesMaterial = new THREE.PointsMaterial({
    size: 0.15,
    color: 0x00ffff,
    transparent: true,
    opacity: 0.8,
    sizeAttenuation: true,
    blending: THREE.AdditiveBlending,
  });

  const particles = new THREE.Points(particlesGeometry, particlesMaterial);
  scene.add(particles);

  // Grid floor with animation
  const gridHelper = new THREE.GridHelper(100, 100, 0x00ffff, 0x440055);
  gridHelper.position.y = -5;
  gridHelper.material.transparent = true;
  gridHelper.material.opacity = 0.2;
  scene.add(gridHelper);

  // Floating data cubes
  const cubes: THREE.Mesh[] = [];
  for (let i = 0; i < 12; i++) {
    const size = Math.random() * 0.3 + 0.2;
    const cube = new THREE.Mesh(
      new THREE.BoxGeometry(size, size, size),
      new THREE.MeshStandardMaterial({
        color: Math.random() > 0.5 ? 0x00ffff : 0xff00ff,
        emissive: Math.random() > 0.5 ? 0x00ffff : 0xff00ff,
        emissiveIntensity: 0.8,
        metalness: 0.9,
        roughness: 0.1,
        wireframe: Math.random() > 0.7,
      })
    );
    cube.position.set(
      (Math.random() - 0.5) * 40,
      (Math.random() - 0.5) * 20 + 5,
      (Math.random() - 0.5) * 40
    );
    cube.castShadow = true;
    cube.receiveShadow = true;
    cube.userData = {
      originalPosition: cube.position.clone(),
      speed: Math.random() * 0.02 + 0.01,
      amplitude: Math.random() * 2 + 1,
    };
    scene.add(cube);
    cubes.push(cube);
  }

  // Mouse tracking for interactivity
  let mouseX = 0;
  let mouseY = 0;
  const onMouseMove = (e: MouseEvent) => {
    mouseX = (e.clientX / container.clientWidth) * 2 - 1;
    mouseY = -(e.clientY / container.clientHeight) * 2 + 1;
  };
  window.addEventListener('mousemove', onMouseMove);

  // Animation loop
  let frameCount = 0;
  const animate = () => {
    requestAnimationFrame(animate);
    frameCount++;

    // Screen rotation with mouse interaction
    screenGroup.rotation.y = mouseX * 0.3;
    screenGroup.rotation.x = mouseY * 0.2;
    screenGroup.position.y = 2 + Math.sin(frameCount * 0.005) * 0.2;

    // Holographic rings rotation
    scene.children.forEach((child) => {
      if (child instanceof THREE.Mesh && child.geometry instanceof THREE.TorusGeometry) {
        child.rotation.z += 0.002;
        child.rotation.x += 0.001;
      }
    });

    // Particle physics
    const positions = particlesGeometry.attributes.position.array as Float32Array;
    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] += velocityArray[i];
      positions[i + 1] += velocityArray[i + 1];
      positions[i + 2] += velocityArray[i + 2];

      // Bounce boundaries
      if (Math.abs(positions[i]) > 50) velocityArray[i] *= -1;
      if (Math.abs(positions[i + 1]) > 40) velocityArray[i + 1] *= -1;
      if (Math.abs(positions[i + 2]) > 50) velocityArray[i + 2] *= -1;
    }
    (particlesGeometry.attributes.position as THREE.BufferAttribute).needsUpdate = true;

    // Animate cubes
    cubes.forEach((cube, i) => {
      cube.rotation.x += 0.003;
      cube.rotation.y += 0.005;
      cube.position.y = (cube.userData.originalPosition as THREE.Vector3).y + 
        Math.sin(frameCount * cube.userData.speed as number + i) * (cube.userData.amplitude as number);
    });

    // Dynamic camera movement
    camera.position.x = Math.sin(frameCount * 0.0003) * 15;
    camera.position.z = 20 + Math.cos(frameCount * 0.0002) * 8;
    camera.lookAt(0, 2, 0);

    // Light animation
    pointLight1.intensity = 1 + Math.sin(frameCount * 0.01) * 0.5;
    pointLight2.intensity = 1 + Math.cos(frameCount * 0.012) * 0.4;

    renderer.render(scene, camera);
  };

  animate();

  // Handle resize
  const handleResize = () => {
    const width = container.clientWidth;
    const height = container.clientHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  };

  window.addEventListener('resize', handleResize);

  // Cleanup
  return () => {
    window.removeEventListener('resize', handleResize);
    window.removeEventListener('mousemove', onMouseMove);
    renderer.dispose();
    screenGeometry.dispose();
    screenMaterial.dispose();
    screenGlowMaterial.dispose();
    platformGeometry.dispose();
    platformMaterial.dispose();
    particlesGeometry.dispose();
    particlesMaterial.dispose();
    if (container.contains(renderer.domElement)) {
      container.removeChild(renderer.domElement);
    }
  };
}
