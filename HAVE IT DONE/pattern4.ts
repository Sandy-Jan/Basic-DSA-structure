function first(n:number):void{
    for(let i=1;i<=n;i++){
        let star:number = i;
        let space:number = n-i;

        let s:string = " ";
        for(let j=1;j<=space;j++){s+=" "}
        for(let j=1;j<=star;j++){s +="*"}
        console.log(s);
        
    }
}
first(5);