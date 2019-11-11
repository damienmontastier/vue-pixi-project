import * as THREE from 'three'
import TweenMax from 'gsap'
import Layers from '@/webGL/utils/Layers'
import Parallax from '@/webGL/utils/Parallax'

class Chapter1 extends THREE.Object3D {
  constructor() {
    super()
  }
  init() {
    return new Promise(resolve => {
      const layers = new Layers()
      this.add(layers)
      const parallax = new Parallax({ layers })
      resolve()
    })

    // document.addEventListener('touchmove', this.handleScroll.bind(this))
    // document.addEventListener('touchstart', this.handleStart.bind(this))
  }

  start() {
    // var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
    // var geometry = new THREE.BoxGeometry(1, 1, 1)
    // for (let index = 0; index < 10; index++) {
    //   let cube = new THREE.Mesh(geometry, material)
    //   cube.position.set(1, 1 * index, 1)
    //   cube.material.color = THREE.Color(0xffffff)
    //   this.add(cube)
    // }
  }
  handleScroll(e) {
    TweenMax.to(this.position, 1, {
      y: 2
    })
  }
  handleStart(e) {
    console.log(e)
  }
}

const stage1 = new Chapter1()
export default stage1