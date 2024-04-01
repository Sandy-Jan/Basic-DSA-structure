function dime(n) {
    var space = Math.floor(n / 2);
    var star = 1;
    for (var i = 1; i <= n; i++) {
        var s = ' ';
        for (var j = 1; j <= space; j++) {
            s += " ";
        }
        for (var j = 1; j <= star; j++) {
            s += "*";
        }
        console.log(s);
        if (i < n / 2) {
            space -= 1;
            star += 2;
        }
        else {
            space += 1;
            star -= 2;
        }
    }
}
dime(31);
