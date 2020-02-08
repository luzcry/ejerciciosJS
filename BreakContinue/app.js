
txt = document.getElementById("txt");

for (var i = 0; i <=10; i++) {
    if (i===5) {
        break;
    } else {
        //document.write(i + " ");
        txt.append(i + "");
    }
}

txt2 = document.getElementById("txt2");
for (var i = 0; i <=10; i++) {
    if (i===5) {
        continue;
    } else {
       // document.write(i + " ");
        txt2.append(i + "");
    }
}
