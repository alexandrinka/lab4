var a = [];
var s = 0;

function createArray() {
    for (var i = 0; i < 10; i++) {
        a[i] = [];
        for (var j = 0; j < 10; j++) {
            a[i][j] = Math.floor(Math.random() * 3);
        }
    }
}

function sortArray() {
    var tmp = 0;
    s = 1;

    for (var i = 0; i < 10; i++) {
        if (i % 2 == 0) {
            for (var j = 0; j < 9; j++) {
                for (var k = j + 1; k < 10; k++) {
                    if (a[i][j] < a[i][k]) {
                        tmp = a[i][j];
                        a[i][j] = a[i][k]
                        a[i][k] = tmp;
                    }
                }
            }
        }
        else {
            for (var j = 0; j < 9; j++) {
                for (var k = j + 1; k < 10; k++) {
                    if (a[i][j] > a[i][k]) {
                        tmp = a[i][j];
                        a[i][j] = a[i][k]
                        a[i][k] = tmp;
                    }
                }
            }
        }
    }

}

function printArray() {
    var win = open("", "", "width=300,height=300");
    win.document.open();
    if (s == 0) {
        win.document.write("Array:");
        win.document.write("<br>");
        for (var i = 0; i < 10; i++) {
            for (var j = 0; j < 10; j++) {
                win.document.write(a[i][j] + " ");
            }
            win.document.write("<br>");
        }
    }
    else {
        win.document.write("Sorted array:");
        win.document.write("<br>");
        for (var i = 0; i < 10; i++) {
            for (var j = 0; j < 10; j++) {
                win.document.write(a[i][j] + " ");
            }
            win.document.write("<br>");
        }
    }
    
    win.document.close();
}