import * as THREE from 'three';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

function ComponentGltf() {
  const component = new THREE.Object3D();

//DRACO
const LoaderGLTF = new GLTFLoader();
const DracoLoader = new DRACOLoader();
DracoLoader.setDecoderPath( '/draco/gltf/' );
DracoLoader.setDecoderConfig( { type: 'js' } );
LoaderGLTF.setDRACOLoader( DracoLoader );

//load GLTF
    LoaderGLTF.load( '/gltf/buster_drone/scene.gltf', function ( gltf ) {
    scene.add( gltf.scene );

		gltf.animations; // Array<THREE.AnimationClip>
		gltf.scene; // THREE.Group
		gltf.scenes; // Array<THREE.Group>
		gltf.cameras; // Array<THREE.Camera>
		gltf.asset; // Object

	},
function ( xhr ) {
    console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
},
// called when loading has errors
function ( error ) {
    console.log( 'Error pun Terjadi' );
    }
);
  return component;
}

export default ComponentGltf;
