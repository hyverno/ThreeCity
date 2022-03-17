import * as THREE from 'three'
import {scene} from './scene'


let mapArray = [
	['0',' ',' ','A','R',' ',' ','0'],
	[' ','R','R','A','R',' ',' ',' '],
	[' ','R',' ','A','R',' ',' ',' '],
	['A','R','A','A','R','A','A','A'],
	[' ','R',' ','A','R',' ',' ',' '],
	['0','R','R','R','R',' ',' ','0'],
];

var corner, house, road

const elementSize = {
	width: 10,
	height: 10
}

const startFunct = () => {

    mapArray.forEach((element, indexY) => {
        element.forEach((element, indexX) => {
    
            switch (element) {
                case 'A':
                    console.log('succefuly')
                    var cubeGeometry = new THREE.BoxGeometry(elementSize.width, 1, elementSize.height)
                    var cubeMaterial = new THREE.MeshLambertMaterial({color: 0xafa0f0, wireframe: true })
                    house = new THREE.Mesh(cubeGeometry, cubeMaterial)
                    house.userData.originalColor = 0xafa0f0
                    house.position.set(indexY*elementSize.width, 0, indexX*elementSize.height)
                    scene.add(house)
                    break
                
                case '0':
                    console.log('succefuly')
                    var cubeGeometry = new THREE.BoxGeometry(elementSize.width, 1, elementSize.height)
                    var cubeMaterial = new THREE.MeshLambertMaterial({color: 0xf5f555 })
                    corner = new THREE.Mesh(cubeGeometry, cubeMaterial)
                    corner.userData.originalColor = 0xf5f555
                    corner.position.set(indexY*elementSize.width, 0, indexX*elementSize.height)
                    scene.add(corner)
                    break
    
                case 'R':
                    var cubeGeometry = new THREE.BoxGeometry(elementSize.width, 1, elementSize.height)
                    var cubeMaterial = new THREE.MeshLambertMaterial({color: 0xf48555 })
                    road = new THREE.Mesh(cubeGeometry, cubeMaterial)
                    road.userData.originalColor = 0xf48555
                    road.position.set(indexY*elementSize.width, 0, indexX*elementSize.height)
                    scene.add(road)
                
    
                default:
                    break
            }
        })
    })

}



console.log(scene)
export {startFunct}