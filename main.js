import './assets/App.css'
import * as THREE from 'three';
import { gsap } from "gsap"
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import Moon from '/textures/lroc_color_poles_1k.jpg'
import Card from '/components/card'

//Scene 
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 20
scene.add(camera)

//Renderan
const canvas = document.querySelector('#app')
const renderer = new THREE.WebGLRenderer({ canvas })
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio( window.devicePixelRatio )
renderer.render(scene,camera)

//Lampu-Lampu
const lampion = new THREE.PointLight(0xffffff);
lampion.position.set(10, 10, 10);
//const lampuNeon = new THREE.AmbientLight(0x0000ee);
scene.add(lampion)

//Controler
const controls = new OrbitControls(camera, canvas, renderer.domElement);
controls.enableDamping = true
controls.enablePan = false
controls.enableZoom = false
controls.autoRotate = true
controls.autoRotateSpeed = 2

//Resizer
window.addEventListener("resize", () => {
  //Responsive ViewPort
  viewPort.width = window.innerWidth
  viewPort.height = window.innerHeight
  //responCamera
  camera.aspect = viewPort.width / viewPort.height
  camera.updateProjectionMatrix()
  renderer.setSize(viewPort.width, viewPort.height)
})

//Apps//


//Boba
function Boba() {
  const bobaMetry = new THREE.SphereGeometry(0.15, 20, 18);
  const BobaTerial = new THREE.MeshStandardMaterial( { color: 0xffffff } );
  const boba = new THREE.Mesh( bobaMetry, BobaTerial );

  const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread( 100 ) );
  boba.position.set(x, y, z);
  scene.add(boba)

}
Array(200).fill().forEach(Boba)


//Balls
const BgTexture = new THREE.TextureLoader().load(Moon);
const bola = new THREE.SphereGeometry(3, 64, 64)
const materialBola = new THREE.MeshStandardMaterial({
  map: BgTexture,
})
const balls = new THREE.Mesh(bola, materialBola)
scene.add(balls)


//Environment
const EnvLoader = new THREE.TextureLoader();
const EnvTexture = EnvLoader.load('/textures/nebula0.hdr');
EnvTexture.mapping = THREE.EquirectangularReflectionMapping;

const EnvMaterial = new THREE.MeshStandardMaterial({
  envMap: EnvTexture,
  metalness: 1,
  roughness: 0,
  side: THREE.BackSide
});

const EnvGeometry = new THREE.SphereGeometry(100, 64, 32);
const sphere = new THREE.Mesh(EnvGeometry, EnvMaterial);

const light = new THREE.PointLight(0xffeb3b, 1, 0);
light.position.set(10, 10, 10);
sphere.position.set(10, 10, 10);
scene.add(sphere);
scene.add(light);

//Component
const myCardObject = new Card();
scene.add(myCardObject);













function animate() {
	requestAnimationFrame( animate );

        balls.rotation.y += 0.01;

	renderer.render( scene, camera );
}
animate();
