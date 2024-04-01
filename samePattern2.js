function same(n) {
    for (var i = n; i >= 1; i--) {
        var star = i;
        var space = n - i;
        var s = ' ';
        for (var j = 1; j <= space; j++) {
            s += ' ';
        }
        for (var j = 1; j <= star; j++) {
            s += '*';
        }
        console.log(s);
    }
}
same(7);
