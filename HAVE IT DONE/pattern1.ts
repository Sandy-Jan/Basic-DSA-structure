function pattern(n:number):void{
  
    for(let i=1;i<=n; i++){
        let star:number = 1;
        let space:number = i-1;

        let s:string = " ";
        for(let j=1; j<=space; j++){s+=" ";}
        for(let j=1; j<=star; j++){s +="*";}

        console.log(s);
        
    }
}
pattern(5);