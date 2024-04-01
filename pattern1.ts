function pattern2(n:number):void{
    for(let i=n; i>=0; i--){
        let s: string = ' ';
        for(let j=1; j<=i; j++){
            s += '*';
        }
        console.log(s);
        
    }
}
pattern2(5);