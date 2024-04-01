function pattern5(n) {
    var start = 1;
    var space = Math.floor(n / 2);
    for (var i = 1; i <= n; i++) {
        var s = " ";
        for (var j = 1; j <= space; j++) {
            s += " ";
        }
        for (var j = 1; j <= start; j++) {
            s += "*";
        }
        console.log(s);
        if (i < n / 2) {
            space -= 1;
            start += 2;
        }
        else {
            space += 1;
            start -= 2;
        }
    }
}
pattern5(25);
