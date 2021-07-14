let board = document.getElementById("size");
let button = document.getElementById("btn");

button.addEventListener("click", ()=>{

    let board_size = board.value;
    let str = "";
    for(let i=0;i<board_size;i++){
        for(let j=0;j<board_size;j++){
            if(i%2==0){
                if(j%2==0){
                    str += "* ";
                }
                else{
                    str += "# ";
                }
            }
            else{
                if(j%2!=0){
                    str += "* ";
                }
                else{
                    str += "# ";
                }
            }
        }
        str += "<br>";
    }
    document.getElementById("display").innerHTML = str;
});
