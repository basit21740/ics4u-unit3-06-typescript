/*
* This program is Fly Test
*
* @author  Abdul Basit Butt
* @version 1.0
* @since   2022-02-03
*/

import { Airplane } from "./Airplane"
import { Jet } from "./Jet"
const biplane: Airplane = new Airplane()

biplane.setSpeed(212)
console.log(biplane.getSpeed())

const boeing: Jet = new Jet()

boeing.setSpeed(422)
console.log(boeing.getSpeed())

for (let counter = 0; counter < 4; counter++) {
  boeing.accelerate()
  console.log(boeing.getSpeed())

  if (boeing.getSpeed() > 5000) {
    biplane.setSpeed(biplane.getSpeed() * 2)
  } else {
    boeing.accelerate()
  }
}

console.log(biplane.getSpeed())

console.log('\nDone.')
