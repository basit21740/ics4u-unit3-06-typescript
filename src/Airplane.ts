/*
* This program is Airplane program
*
* @author  Abdul Basit Butt
* @version 1.0
* @since   2021-12-04
*/

export class Airplane {
  private speed: number

  constructor () {
    this.speed = 0
  }

  public setSpeed (newSpeed: number) {
    this.speed = newSpeed
  }

  public getSpeed () {
    return this.speed
  }
}
