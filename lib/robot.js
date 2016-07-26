'use strict';
class Robot{

  constructor(currentDirection, x,y){
    this.bearing = currentDirection
    this.coordinates = [x,y]
  }

  orient(currentDirection){
    var directions = [ 'east', 'west', 'north', 'south' ]
    if (directions.includes(currentDirection)){
      this.bearing = currentDirection
    }
    else {
      throw new Error("Invalid Robot Bearing")
    }
  }

  turnRight(){
    if (this.bearing === 'north'){
      this.orient('east')
    }
    else if (this.bearing === 'east'){
      this.orient('south')
    }
    else if (this.bearing === 'south'){
      this.orient('west')
    }
    else if (this.bearing === 'west'){
      this.orient('north')
    }
  }

  turnLeft(){
     if (this.bearing === 'north'){
      this.orient('west')
    }
    else if (this.bearing === 'east'){
      this.orient('north')
    }
    else if (this.bearing === 'south'){
      this.orient('east')
    }
    else if (this.bearing === 'west'){
      this.orient('south')
    }
  }

  at(x,y){
    return this.coordinates = [x,y]
  }

  advance(){
    var x = this.coordinates[0]
    var y = this.coordinates[1]
    if (this.bearing === 'north'){
      this.at(x,y+1)
    }
    else if (this.bearing === 'east'){
      this.at(x+1,y)
    }
    else if (this.bearing === 'south'){
      this.at(x,y-1)
    }
    else if (this.bearing === 'west'){
      this.at(x-1,y)
    }
  }

  instructions(string) {
   var instructionsArray = string.split('')
   instructionsArray.forEach((element,i,array) => {
     if(element === "L") {
       array[i] = "turnLeft"
     }
     else if (element === "R"){
       array[i] = "turnRight"
     }
     else { 
       array[i] = "advance"
     }
   })
   return instructionsArray
  }

  place(hash){
    this.at(hash.x,hash.y)
    this.bearing = hash.direction 
  }

  evaluate(string){
   var instructionsArray = this.instructions(string)
   instructionsArray.forEach((element)=>{
     if(element === "turnLeft") {
       this.turnLeft()
     }
     else if (element === "turnRight"){
       this.turnRight()
     }
     else { 
       this.advance()
     }
   })
 }

}

