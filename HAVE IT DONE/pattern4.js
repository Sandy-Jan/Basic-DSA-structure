function first(n) {
    for (var i = 1; i <= n; i++) {
        var star = i;
        var space = n - i;
        var s = " ";
        for (var j = 1; j <= space; j++) {
            s += " ";
        }
        for (var j = 1; j <= star; j++) {
            s += "*";
        }
        console.log(s);
    }
}
first(5);
