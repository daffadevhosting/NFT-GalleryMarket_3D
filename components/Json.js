import * as THREE from 'three';


function SideBar() {

  const component = new THREE.Object3D();
let scene;

function init() {
const loader = new THREE.FileLoader();
loader.load(
  './src/assets/example.json',

  function (data) {
    const jsonData = JSON.parse(data);

    const textureLoader = new THREE.TextureLoader();
    const material = new THREE.MeshBasicMaterial({ map: textureLoader.load(jsonData.image) });
    const geometry = new THREE.PlaneGeometry(5, 5, 5);
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(0, 0, -5);
    scene.add(mesh);

    const textMaterial = new THREE.MeshBasicMaterial({ color: jsonData.color });
    const fontLoader = new THREE.FontLoader();
    fontLoader.load(jsonData.font, function (font) {
      const textGeometry = new THREE.TextGeometry(jsonData.text, { font: font, size: 1, height: 0.5 });
      const textMesh = new THREE.Mesh(textGeometry, textMaterial);
      textMesh.position.set(0, 2, -5);
      scene.add(textMesh);
    });
  },

  function (xhr) {
    console.error(xhr);
  }
);
}
  return component;
}

export default SideBar;

