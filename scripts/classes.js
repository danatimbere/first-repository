console.log("class impress");



const myOBj = {
    myArr : [1,2,3,5],
    myNum : 55,
    myStr : "Valdis",
    myFun : function() {
        console.log(this.myStr, this.myNum +10);
},
myaddFun: add
}
myOBj.myFun();


class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  }

  let sq = new Rectangle(10,10);
  console.log(sq.Rectangle);  
