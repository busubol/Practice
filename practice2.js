function num(a){
    var ct=0
    for(let i=1;i<a;i++){
        if(a%i==0){
            ct++
        
        if(ct>1){
            console.log('Not prime')
            break
        }
      }
    }

       if(ct==1){
        console.log('Prime')
       }
       
}
num(7)