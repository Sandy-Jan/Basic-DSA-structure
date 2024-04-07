function pattern6(n) {
    for (var i = 1; i <= n; i++) {
        var s = " ";
        for (var j = 1; j <= n; j++) {
            if (i === j || i + j === n) {
                s += "*";
            }
            else {
                s += " ";
            }
        }
        console.log(s);
    }
}
pattern6(4);
