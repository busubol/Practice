function triangle(a,b,c){
    var sum = a+b+c
    var x=sum/2
    var area = Math.sqrt(x*(x-a)*(x-b)*(x-c))
    return area
}

console.log(triangle(5,6,7))