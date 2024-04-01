function file(n:number):void{
    for(let i=n; i>=1; i--){
        let star:number = i;
        let space:number = n -i;

        let s:string = " ";
        for(let j=1; j<=space; j++){s+=" ";}
        for(let j=1; j<=star; j++){s+="*";}
        console.log(s);
        
    }
}
file(25);