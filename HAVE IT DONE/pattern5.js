function alpha(n) {
    for (var i = 1; i <= n; i++) {
        var star = 1;
        var space = i - 1;
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
function beta(n) {
    for (var i = n; i > 1; i--) {
        var star = 1;
        var space = i - 1;
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
function gamma(n) {
    for (var i = 1; i <= n; i++) {
        var star = 1;
        var space = i - 1;
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
alpha(5);
beta(5);
gamma(5);
