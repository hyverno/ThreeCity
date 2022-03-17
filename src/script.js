import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'lil-gui'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'


import {scene} from './engine/scene'
import {startFunct} from './engine/geometry'
import {ambientLight, directionalLight} from './engine/light'

const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

scene.add(ambientLight, directionalLight)


const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 3000)
const controls = new OrbitControls(camera, renderer.domElement)

scene.add(camera)
camera.position.x = -30
camera.position.y = 20
camera.lookAt(scene.position)

renderer.render( scene, camera );



startFunct()

function animate() {
    requestAnimationFrame( animate );

    // if(cube) {
        // cube.rotation.x += 0.01;
        // cube.rotation.y += 0.01;
    // }

    renderer.render( scene, camera );
};

animate();