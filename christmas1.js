function tree(){
    let x = parseInt(prompt("Enter the height of the tree:"));


    let draw = "";

        for (let i = 1; i <= x; i++) {
          let  str1 = "";
            
        
        for (let j = 1; j < x*2; j++){
            if(j > x -i + 1 && j <x +i -1){
                str1 += "|";

            }else if(j >= x -i +1 && j <= x +i -1){
                str1 += "*";
            
            }else {
                str1 += " ";
            }
            
           
        // }
        // for(z = 0; z <(x*2)-1; z++){
        //     str1 += "|"
             
        }
       draw += str1 + "\n";
        
    console.log(str1); 
    }
document.getElementById("tree1").innerText = draw;
}


tree()