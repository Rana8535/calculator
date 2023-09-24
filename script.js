//input box mei input or outtput ke liye
let input=document.getElementById('ipbox');

//query selector is used to select all the button at the single time
let buttons=document.querySelectorAll("button");

//now take the blank string
let string="";

// now make an array to put the values in the array
Array.from(buttons).forEach((button)=>{

    // we use addeventlistener to perform operations
    button.addEventListener("click",(e)=>{
        if(e.target.innerHTML=="="){
            string=eval(string);
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=="Ac"){
            string="";
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=="Dlt"){
            string=~~(string/10);
            document.querySelector('input').value=string;
        }
        
        else{
            string =string+e.target.innerHTML;
            document.querySelector('input').value=string;
        }

    })
})