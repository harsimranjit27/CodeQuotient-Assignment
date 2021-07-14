function print(data) {

    let string1 = "";
    let string2 = "";
    let str1 = "* #";
    let str2 = "# *";

    // creating string1 for even rows
    for(let i=0;i<data/2;i++){
        string1 += str1+" ";
    }

    // creating string2 for odd rows
    for(let i=0;i<data/2;i++){
        string2 += str2 +" ";
    }

    // displaying string1 and string2
    for(let i=0;i<data/2;i++){
        document.write(string1);
        newLine();
        document.write(string2);
        newLine();
    }
}
function newLine() {
    document.write("<br>");
}
let board_size = 8;
print(board_size);