'use client';

export default async function Scene3DRenderer(container: HTMLElement) {
  const THREE = await import('three');
  
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, container.clientWidth / container.clientHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.shadowMap.enabled = true;
  container.appendChild(renderer.domElement);
  
  camera.position.z = 8;
  
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
  scene.add(ambientLight);
  
  const pointLight1 = new THREE.PointLight(0x00ffff, 0.5);
  pointLight1.position.set(10, 10, 10);
  pointLight1.castShadow = true;
  scene.add(pointLight1);
  
  const pointLight2 = new THREE.PointLight(0xff00ff, 0.3);
  pointLight2.position.set(-10, -10, 5);
  scene.add(pointLight2);
  
  // Add basic geometry for now
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshStandardMaterial({ color: 0x00ffff });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);
  
  const animate = () => {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
  };
  
  animate();
  
  const handleResize = () => {
    const width = container.clientWidth;
    const height = container.clientHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  };
  
  window.addEventListener('resize', handleResize);
  
  return () => {
    window.removeEventListener('resize', handleResize);
    renderer.dispose();
    container.removeChild(renderer.domElement);
  };
}
