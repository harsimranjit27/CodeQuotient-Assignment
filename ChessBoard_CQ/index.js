function print(data){
    for(let i=0;i<data;i++){
        if(i%2==0){
            let str = "* #";
            let arr1 = [];
            // storing elements in array
            for(let j=0;j < (data/2);j++){
                arr1[j] = str;
            }
            // using spread operator to get output of whole array elements
            console.log(...arr1);
        }
        else{
            let str="# *";
            let newString = "";
            // storing str in newString variable using for loops and printing the newString
            for(let j=0;j<data/2;j++){
                newString += str+" ";
            }
            console.log(newString);
        }
    }
}
let board_size = 8;
print(board_size);