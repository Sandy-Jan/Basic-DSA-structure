function pattern2(n) {
    for (var i = n; i >= 1; i--) {
        var space = i - 1;
        var star = 1;
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
pattern2(5);
