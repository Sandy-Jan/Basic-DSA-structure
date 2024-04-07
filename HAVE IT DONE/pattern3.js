function pattern3(n) {
    var star = n;
    var space = 0;
    for (var i = 1; i <= n; i++) {
        var s = " ";
        for (var j = 1; j <= space; j++) {
            s += ' ';
        }
        for (var j = 1; j <= star; j++) {
            s += '*';
        }
        console.log(s);
        if (i < n / 2) {
            space += 1;
            star -= 2;
        }
        else {
            space -= 1;
            star += 2;
        }
    }
}
pattern3(21);
