function pattern2(n:number):void{
    for(let i=n; i>=1; i--){
        let space:number = i-1;
        let star:number = 1;
        
        let s:string = " ";
        for(let j=1; j<=space; j++){s+=" ";}
        for(let j=1; j<=star; j++){s+="*";}
        console.log(s);
        
    }
}
pattern2(5);