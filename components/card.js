import '../assets/custom.css'
import * as THREE from 'three';
import { TWEEN } from 'three/examples/jsm/libs/tween.module.min.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls.js';
import { CSS3DRenderer, CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer.js';
import BobaBoba from './Boba';


function Card() {
  const component = new THREE.Object3D();
  const latarBg = new THREE.MeshStandardMaterial();

    const datatable = [
				'/textures/img/0001.png', 'Bromine', '0.01 ETH', 1, 1,
				'/textures/img/0002.png', 'Krypton', '0.02 ETH', 2, 1,
				'/textures/img/0003.png', 'Rubidium', '0.01 ETH', 3, 1,
				'/textures/img/0004.png', 'Strontium', '0.03 ETH', 4, 1,
				'/textures/img/0005.png', 'Ruthenium', '0.01 ETH', 5, 1,
				'/textures/img/0006.png', 'Rhodium', '0.05 ETH', 6, 1,
				'/textures/img/0007.png', 'Vanadium', '0.01 ETH', 1, 2,
				'/textures/img/0008.png', 'Cobalt', '0.02 ETH', 2, 2,
				'/textures/img/0009.png', 'Fluorine', '0.01 ETH', 3, 2,
				'/textures/img/0010.png', 'Phosphorus', '0.03 ETH', 4, 2,
				'/textures/img/0011.png', 'Argon', '0.01 ETH', 5, 2,
				'/textures/img/0012.png', 'Gallium', '0.05 ETH', 6, 2,
				'/textures/img/0013.png', 'Manganese', '0.03 ETH', 1, 3,
				'/textures/img/0014.png', 'Copper', '0.01 ETH', 2, 3,
				'/textures/img/0015.png', 'Technetium', '0.05 ETH', 3, 3,
				'/textures/img/0016.png', 'Indium', '0.01 ETH', 4, 3,
				'/textures/img/0017.png', 'Praseodymium', '0.05 ETH', 5, 3,
				'/textures/img/0018.png', 'Dysprosium', '0.03 ETH', 6, 3,
				'/textures/img/0019.png', 'Astatine', '0.01 ETH', 1, 4,
				'/textures/img/0020.png', 'Mendelevium', '0.05 ETH', 2, 4,
			];


let canvas, camera, scene, renderer;
let controls;

    const objects = [];
    const tujuan = { datatable: [], grid: [] };

			init();
			animate();

function init() {
	camera = new THREE.PerspectiveCamera( 25, window.innerWidth / window.innerHeight, 1, 10000 );
	camera.position.z = 2500;
	scene = new THREE.Scene();

				// Gallery

for ( let i = 0; i < datatable.length; i += 5 ) {

    const element = document.createElement( 'div' );
					element.className = 'card';
					element.style.backgroundColor = 'rgba(251, 26,10,' + ( Math.random() * 0.5 + 0.25 ) + ')';
					element.material = latarBg;
    const wrapper = document.createElement( 'div' );
                    wrapper.className = 'wrapper';
                    element.appendChild( wrapper );

    const img = document.createElement( 'img' );
					img.className = 'cover_image';
				    img.style.width = '100%';
				    img.style.height = '100%';
				    img.src = datatable[ i ];
					element.appendChild( img );

                    wrapper.appendChild(img);
                    element.appendChild(wrapper);

    const details = document.createElement( 'div' );
					details.className = 'title';
					details.innerHTML = datatable[ i + 1 ] + '<br>' + datatable[ i + 2 ];
					element.appendChild( details );

    const character = document.createElement( 'img' );
					character.className = 'character';
				    character.style.width = '100%';
				    character.style.height = '100%';
				    character.src = datatable[ i ];
					element.appendChild( character );

    const objectCSS = new CSS3DObject( element );
					objectCSS.position.x = Math.random() * 2000 - 2000;
					objectCSS.position.y = Math.random() * 2000 - 2000;
					objectCSS.position.z = Math.random() * 2000 - 2000;
					scene.add( objectCSS );

					objects.push( objectCSS );

					//

    const object = new THREE.Object3D();
					object.position.x = ( datatable[ i + 3 ] * 240 ) - 1140;
					object.position.y = - ( datatable[ i + 4 ] * 280 ) + 990;

					tujuan.datatable.push( object );
				}

				// sphere

    const vector = new THREE.Vector3();

for ( let i = 0; i < objects.length; i ++ ) {

    const object = new THREE.Object3D();

					object.position.x = ( ( i % 5 ) * 400 ) - 800;
					object.position.y = ( - ( Math.floor( i / 5 ) % 5 ) * 400 ) + 800;
					object.position.z = ( Math.floor( i / 5 ) ) * 1000 - 2000;

					tujuan.grid.push( object );

const BolaBola = new BobaBoba();
scene.add(BolaBola);
				}

				//

renderer = new CSS3DRenderer( { antialias: true } );
renderer.setSize( window.innerWidth, window.innerHeight );
document.getElementById( 'menu' ).appendChild( renderer.domElement );
				//

				controls = new TrackballControls( camera, renderer.domElement );
				controls = new OrbitControls(camera, renderer.domElement);
				controls.minDistance = 500;
				controls.maxDistance = 6000;
				controls.enablePan = true;
				controls.enableDamping = true;
				transform( tujuan.grid, 2000 );

				//

window.addEventListener( 'resize', onWindowResize );


function onDocumentMouseMove(event) {
    event.preventDefault();

    controls.enabled = true;
}

document.addEventListener('mousemove', onDocumentMouseMove, false);

}

function transform( tujuan, duration ) {

TWEEN.removeAll();

for ( let i = 0; i < objects.length; i ++ ) {

    const object = objects[ i ];
    const target = tujuan[ i ];

	new TWEEN.Tween( object.position )
		.to( { x: target.position.x, y: target.position.y, z: target.position.z }, Math.random() * duration + duration )
		.easing( TWEEN.Easing.Exponential.InOut )
		.start();

	new TWEEN.Tween( object.rotation )
		.to( { x: target.rotation.x, y: target.rotation.y, z: target.rotation.z }, Math.random() * duration + duration )
		.easing( TWEEN.Easing.Exponential.InOut )
		.start();

	}
new TWEEN.Tween( this )
		.to( {}, duration * 2 )
		.onUpdate( render )
		.start();
	render();
}

function onWindowResize() {

const width = canvas.clientWidth;
const height = canvas.clientHeight;

	if ( canvas.width !== width || canvas.height !== height ) {

		renderer.setSize( width, height, true );
	}
camera.aspect = window.innerWidth / window.innerHeight;
camera.updateProjectionMatrix();
renderer.setSize( window.innerWidth, window.innerHeight );

	render();

}

function animate() {
	requestAnimationFrame( animate );

	TWEEN.update();

	controls.update();
	render();
}

function render() {
	renderer.render( scene, camera );
}


  return component;
}

export default Card;
