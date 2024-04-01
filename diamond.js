function pattern4(n) {
    var stars = 1;
    var space = Math.floor(n / 2);
    for (var i = 1; i <= n; i++) {
        var s = " ";
        for (var j = 1; j <= space; j++) {
            s += " ";
        }
        for (var j = 1; j <= stars; j++) {
            s += "*";
        }
        console.log(s);
        if (i < n / 2) {
            space -= 1;
            stars += 2;
        }
        else {
            space += 1;
            stars -= 2;
        }
    }
}
pattern4(5);
