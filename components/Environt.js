import '../assets/App.css'
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import {Text} from 'troika-three-text'
import Moon from '/textures/lroc_color_poles_1k.jpg'

function Background() {
  const component = new THREE.Object3D();
// Three JS
window.addEventListener('load', init, false);
function init() {
  console.log('Fungsi Init');
  createWorld();
  createLights();
  createGrid();
  createSkin();
  createLife();
}

var Theme = {
  _gray:0x222222,
  _dark:0x000000,   // Background
  _cont:0x444444,   // Lines
  _blue:0x000FFF,
  _red:0xF00000,    //
  _cyan:0x00FFFF,   // Material
  _white:0xF00589   // Lights
}

var scene, camera, renderer, container;
var _width, _height;
var _ambientLights, _lights, _frontlight, _backlight, _rectAreaLight;
var _skin;

var mat;
var geo;
var groupMoon = new THREE.Object3D();

//--------------------------------------------------------------------
function createWorld() {
  _width = window.innerWidth;
  _height= window.innerHeight;
  //---
  scene = new THREE.Scene();
  scene.fog = new THREE.Fog(Theme._dark, 150, 320);
  scene.background = new THREE.Color(Theme._dark);
  scene.add(groupMoon);
  //---
  camera = new THREE.PerspectiveCamera(20, _width/_height, 1, 1000);
  camera.position.set(0,10,120);
  //---
  renderer = new THREE.WebGLRenderer({antialias:true, alpha:false});
  renderer.setSize(_width, _height);
  renderer.shadowMap.enabled = true;
  //---
  document.body.appendChild(renderer.domElement);
  //---
  window.addEventListener('resize', onWindowResize, false);
  console.log('Membuat DuniaBaru');
}
function onWindowResize() {
  _width = window.innerWidth;
  _height = window.innerHeight;
  renderer.setSize(_width, _height);
  camera.aspect = _width / _height;
  camera.updateProjectionMatrix();
}
//--------------------------------------------------------------------
function createLights() {
  _ambientLights = new THREE.HemisphereLight(Theme._cont, Theme._white, 1);
  _backlight = new THREE.PointLight(Theme._white, 1);
  _backlight.position.set(-5,-20,-20);
  //---
  _rectAreaLight = new THREE.RectAreaLight(Theme._white, 20, 3, 3);
  _rectAreaLight.position.set(0, 0, 2);
  //---
  //_rectAreaLightHelper = new THREE.RectAreaLightHelper(_rectAreaLight);
  //---
  _frontlight = new THREE.PointLight(Theme._white, 2);
  _frontlight.position.set(20,10,0);
  //---
  scene.add(_backlight);
  scene.add(_ambientLights);
  scene.add(_rectAreaLight);
  scene.add(_frontlight);
  //scene.add(_rectAreaLightHelper);
  console.log('Pencahayaan');
}

var uniforms = {
time: { type: "f", value: 0.0 },
RGBr: { type: "f", value: 0.0 },
RGBg: { type: "f", value: 0.0 },
RGBb: { type: "f", value: 0.0 },
RGBn: { type: "f", value: 0.0 },
RGBm: { type: "f", value: 0.0 },
morph: { type: 'f', value: 0.0 },
dnoise: { type: 'f', value: 0.0 },
psize: { type: 'f', value: 3.0 }
}

var options = { perlin: { time: 2.0, morph: 20, dnoise: 0.5 },
  chroma: { RGBr: 0.0, RGBg: 0.0, RGBb: 3.0, RGBn: 0.3, RGBm: 5.0 },
  camera: { zoom: 250, speedY: 0.2, speedX: 0.0, guide: false },
  sphere: { wireframe: false, points: false, psize: 2 }
}

function gantiBG() {
  console.log('indehoy asaleho');
  
  TweenMax.to(options.perlin, 1, {morph: Math.random() * 20});
  TweenMax.to(options.perlin, 2, {time: 1 + Math.random() * 4});
  TweenMax.to(options.perlin, 1, {dnoise: Math.random() * 100});
  
  TweenMax.to(options.chroma, 1, {RGBr: Math.random() * 10});
  TweenMax.to(options.chroma, 1, {RGBg: Math.random() * 10});
  TweenMax.to(options.chroma, 1, {RGBb: Math.random() * 10});
  
  TweenMax.to(options.chroma, 1, {RGBn: Math.random() * 2});
  TweenMax.to(options.chroma, 1, {RGBm: Math.random() * 5});
  
  /*options.perlin.time = 1;
  options.perlin.dnoise = 0;
  options.perlin.morph = 0;
  options.chroma.RGBr = Math.random() * 10;
  options.chroma.RGBg = Math.random() * 10;
  options.chroma.RGBb = Math.random() * 10;
  options.chroma.RGBn = Math.random() * 2;
  options.chroma.RGBm = Math.random() * 5;*/
  
}

function skinElement(geo_frag = 5) {
  var geo_size = 20;
  if (geo_frag>=5) geo_frag = 5;
  //---
  geo = new THREE.IcosahedronBufferGeometry(geo_size,geo_frag);
  //---
  mat = new THREE.ShaderMaterial({
    uniforms: uniforms,
    //attributes: attributes,
    side:THREE.DoubleSide,
    vertexShader: document.getElementById( 'noiseVertexShader' ).textContent,
    fragmentShader: document.getElementById( 'fragmentShader' ).textContent,
    wireframe:options.sphere.wireframe
  });
  this.point = new THREE.Points(geo, mat);
  //---
  this.mesh = new THREE.Mesh(geo, mat);
  this.mesh.geometry.verticesNeedUpdate = true;
  this.mesh.geometry.morphTargetsNeedUpdate = true;
  this.mesh.reseivedShadow = true;
  this.mesh.castShadow = true;
  //---
  groupMoon.add(this.point);
  groupMoon.add(this.mesh);
  //---
}
//---
function createSkin() {
  _skin = new skinElement();
  _skin.mesh.scale.set(1,1,1);
  scene.add(_skin.mesh);
}

var gridHelper;

function createGrid(_gridY = -20) {
  gridHelper = new THREE.GridHelper(200, 20, Theme._cont, Theme._gray);
  gridHelper.position.y = _gridY;
  scene.add(gridHelper);
}

//--------------------------------------------------------------------

var frame = Date.now();
//---
function createLife() {
  var time = Date.now();
  //---
  uniforms.time.value = (options.perlin.time / 10000) * (time - frame);
  uniforms.morph.value = (options.perlin.morph);
  uniforms.dnoise.value = (options.perlin.dnoise);
  //---
  TweenMax.to(camera.position, 2, {z:300-options.camera.zoom});
  //---
  _skin.mesh.rotation.y += options.camera.speedY/100;
  _skin.mesh.rotation.z += options.camera.speedX/100;
  //---
  _skin.point.rotation.y = _skin.mesh.rotation.y;
  _skin.point.rotation.z = _skin.mesh.rotation.z;
  gridHelper.rotation.y = _skin.mesh.rotation.y;
  //---
  mat.uniforms['RGBr'].value = options.chroma.RGBr/10;
  mat.uniforms['RGBg'].value = options.chroma.RGBg/10;
  mat.uniforms['RGBb'].value = options.chroma.RGBb/10;
  mat.uniforms['RGBn'].value = options.chroma.RGBn/100;
  mat.uniforms['RGBm'].value = options.chroma.RGBm;
  mat.uniforms['psize'].value = options.sphere.psize;
  //---
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
  //---
  gridHelper.visible = options.camera.guide;
  //---
  _skin.mesh.visible = !options.sphere.points;
  _skin.point.visible = options.sphere.points;
  //---
  mat.wireframe = options.sphere.wireframe;
  //---
  camera.lookAt(scene.position);
  //---
  requestAnimationFrame(createLife);
  renderer.render(scene, camera);
}
  return component;
}

export default Background;
