<script setup>
import * as THREE from 'three';
import {onMounted} from "vue";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";

onMounted(() => {
  const renderWindow = document.getElementById("render");
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / 450,
      0.01,
      1000
  );

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, 450)

  const controls = new OrbitControls(camera, renderWindow);
  controls.addEventListener("change", renderer);

  renderWindow.append(renderer.domElement);
  const loader = new GLTFLoader();
  loader.load(`${window.location.href}models/car/scene.gltf`, function (gltf) {
    scene.add(gltf.scene);
  });
  scene.background = new THREE.Color(0xffffff);



  const light = new THREE.HemisphereLight(0xffffff, 0x000000,2);
  scene.add(light);
  camera.position.set(0,100,400);
  function animate() {
     requestAnimationFrame(animate);
     renderer.render(scene,camera);
  }
  animate();
});


</script>

<template>
  <div class="flex justify-center mt-5 flex-col w-full">
    <div id="render" class="w-full"></div>
  </div>
</template>