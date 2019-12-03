import TweenMax, { Power4 } from 'gsap'
import VirtualScroll from '../../plugins/virtual-scroll'
import Events from '../../plugins/events'
import Viewport from './Viewport'

class Parallax {
  constructor() {
    this.currentPart
    this.init()
  }
  init() {
    Events.on('scroll', values => {
      Object.values(this.currentPart.children).forEach((element, index) => {
        console.log(Math.abs(element.position.z))
        const speed = index == 0 ? 1 * 0.08 : element.position.z * 0.5

        TweenMax.to(element.position, 0.8, {
          y: -(values.amountScroll / Viewport.width) * speed,
          ease: Power4.easeOut,
        })
      })
    })
  }
  add(current) {
    this.currentPart = current
    console.log('add')
  }
  remove() {
    console.log('remove')
  }
}

export default new Parallax()
