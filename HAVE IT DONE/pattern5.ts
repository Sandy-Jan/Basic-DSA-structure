function alpha(n:number):void{
    for(let i=1; i<=n; i++){
        let star:number = 1;
        let space:number = i-1;

        let s:string =  " ";

        for(let j=1; j<=space; j++){s+=" ";}
        for(let j=1; j<=star; j++){s+="*";}

        console.log(s);
        
    }
}
function beta(n:number):void{
    for(let i=n; i>1; i--){
        let star:number = 1;
        let space:number = i-1;

        let s:string =  " ";

        for(let j=1; j<=space; j++){s+=" ";}
        for(let j=1; j<=star; j++){s+="*";}

        console.log(s);
    }
}
function gamma(n:number):void{
    for(let i=1; i<=n; i++){
        let star:number = 1;
        let space:number = i-1;

        let s:string =  " ";

        for(let j=1; j<=space; j++){s+=" ";}
        for(let j=1; j<=star; j++){s+="*";}

        console.log(s);
    }
}
alpha(5);
beta(5);
gamma(5)