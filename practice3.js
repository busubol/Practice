//Problem 1
var a =[5,2,6,90,1]
a.sort()
console.log("Lowest of the array "+ a[0])



//Problem 2

var x=4,y=9,z=3
var b=[]
b[0]=x
b[1]=y
b[2]=z
b.sort()
console.log("Lowest among X,Y,Z is "+b[0])



//Problem 3
function sum(a){
    var sum=0,ct=0,ans=0
   for (let i of a) {
      sum=sum+i
      ct++
   }
   ans = sum/ct
   return ans
}
var a =[4,2,6,10,3]
console.log("Average is = " + sum(a))



//Problem 4
function area(height,width){
     var area = height*width
     return area
}

console.log("Area is  = "+area(4,5))




//Problem 5
var a =[5,2,80,90,1]
a.sort()
var l = a.length
console.log("Second Largest of the array "+ a[l-2])