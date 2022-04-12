/*
* This program is Jet Class
*
* @author  Abdul Basit 
* @version 1.0
* @since   2022-02-03
*/

import { Airplane } from "./Airplane"
export class Jet extends Airplane {
  public setSpeed (newSpeed: number) {
    super.setSpeed(newSpeed * 2)
  }

  public accelerate () {
    super.setSpeed(super.getSpeed() * 2)
  }
}
