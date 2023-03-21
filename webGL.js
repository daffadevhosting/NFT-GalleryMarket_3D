import './assets/custom.css'
import * as THREE from 'three';
import { TWEEN } from 'three/addons/libs/tween.module.min.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import {Text} from 'troika-three-text'
import CardGallery from './components/card'
import Background from './components/Environt'


import FontJSON from './assets/font/Techno-msdf.json';
import FontImage from './assets/font/Techno.png';

//Scene 
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 20
scene.add(camera)

//Renderan
const canvas = document.querySelector('#webGL');
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio( window.devicePixelRatio );
renderer.render(scene,camera)

//viewport
const viewPort = {
  width: innerWidth,
  height: innerHeight
}

//Lampu-Lampu
const lampion = new THREE.PointLight(0xffffff);
lampion.position.set(10, 10, 10);
const lampuNeon = new THREE.AmbientLight(0x0000ee);
scene.add(lampion, lampuNeon)

// Lights
const hemiLight = new THREE.HemisphereLight( 0x443333, 0x111122 );
scene.add( hemiLight );

const spotLight = new THREE.SpotLight();
spotLight.angle = Math.PI / 1;
spotLight.penumbra = 0.5;
spotLight.castShadow = true;
spotLight.position.set( - 1, 1, 1 );
scene.add( spotLight );

//Controler
const controls = new OrbitControls(camera, canvas, renderer.domElement);
controls.enableDamping = true
controls.enablePan = false
controls.enableZoom = true
controls.autoRotate = false
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

// Create App:
const latar = new THREE.MeshStandardMaterial();
const myText = new Text()
scene.add(myText)

myText.text = 'Hello Dunia!'
myText.fontSize = 2
myText.textAlign = 'center'
myText.position.x = 0
myText.position.y = 0
myText.position.z = 45
myText.color = 0xFFFFFF
myText.material = latar
myText.sync()

const AsaLeho = new Background();
scene.add(AsaLeho);

const Gallery = new CardGallery();
scene.add(Gallery);

const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();

function onPointerMove( event ) {

	// calculate pointer position in normalized device coordinates
	// (-1 to +1) for both components

	pointer.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	pointer.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

}

function render() {
	raycaster.setFromCamera( pointer, camera );
	const intersects = raycaster.intersectObjects( scene.children );
	for ( let i = 0; i < intersects.length; i ++ ) {
		intersects[ i ].object.material.color.set( 0xff0000 );
	}
renderer.render( scene, camera );
}

window.addEventListener( 'pointermove', onPointerMove );
window.requestAnimationFrame(render);

function animate() {
	requestAnimationFrame( animate );

	TWEEN.update();

	controls.update();
	renderer.render( scene, camera );
}
animate();
const loop = () => {
  window.requestAnimationFrame(loop)
}
loop()