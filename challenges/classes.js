// 1. Copy and paste your prototype in here and refactor into class syntax.
 class CubeMaker {
     constructor(attr){
    this.length = attr.length;
    this.width = attr.width;
    this.height = attr.height;
  }

  volume(){
    return this.height * this.length * this.width;
  }

  surfaceArea(){
    return  2 * (this.length * this.width + this.length * this.height + this.width * this.height)
  }

}
  
/*----------------------------objects below this line ------------------------------*/ 


const cube = new CubeMaker({
    length: 4,
    width: 5,
    height:5
  })

// Test your volume and surfaceArea methods by uncommenting the logs below:
 console.log(cube.volume()); // 100
 console.log(cube.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.