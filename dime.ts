function dime(n:number):void{
    let space = Math.floor(n/2);
    let star = 1;

    for(let i=1; i<=n; i++){
        let s:string = ' ';

        for(let j=1; j<=space; j++){s+=" ";}
        for(let j=1; j<=star; j++){s+="*";}
        console.log(s);

        if(i < n/2){
            space -=1;
            star += 2;
        }else{
            space +=1;
            star -= 2;
        }
        
    }
}
dime(31);
