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
    showVals() {
        console.log(this.height, this.width, this.otherval);
    }
  }

  let sq = new Rectangle(10,10);
  sq.showVals();  

  const taisnst = new Rectangle(20,40);
  taisnst.showVals();
  taisnst.myOwnVal = 300;
  console.log(taisnst.myOwnVal);