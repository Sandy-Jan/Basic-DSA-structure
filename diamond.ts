function pattern4(n: number): void {
  let stars: number = 1;
  let space: number = Math.floor(n / 2);
  for (let i = 1; i <= n; i++) {
    let s: string = " ";
    for (let j = 1; j <= space; j++) {
      s += " ";
    }
    for (let j = 1; j <= stars; j++) {
      s += "*";
    }
    console.log(s);

    if (i < n / 2) {
      space -= 1;
      stars += 2;
    } else {
      space += 1;
      stars -= 2;
    }
  }
}
pattern4(5);
