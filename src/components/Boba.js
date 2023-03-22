import * as THREE from 'three';


function Boba() {
  const component = new THREE.Object3D();

const scene = new THREE.Scene();
//Boba
function Boba() {
  const bobaMetry = new THREE.SphereGeometry(0.15, 20, 18);
  const BobaTerial = new THREE.MeshStandardMaterial( { color: 0xffffff } );
  const boba = new THREE.Mesh( bobaMetry, BobaTerial );

  const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread( 150 ) );
  boba.position.set(x, y, z);
  scene.add(boba)

}
Array(200).fill().forEach(Boba)
  return component;
}

export default Boba;
