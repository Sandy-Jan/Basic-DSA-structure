function pattern6(n:number):void{
    for(let i=1; i<=n; i++){
        let s:string = " ";

        for(let j=1; j<=n; j++){
            if(i===j || i+j===n){
                 s+= "*"
            }else{
                s+=  " ";
            }
        }
      
        console.log(s);  
    }
    
}
pattern6(4)