function f(){
let data=document.querySelector(".data");
    data.innerHTML=`<h1 class="text-center"> Deepak Prajapati </h1>`;
}

function datachange(){ 
    document.querySelector("#change").style.display="block";
    let data=prompt("Enter Your Name :");
    let text;
    if(data==null || data==""){
        text="Data is Empty";
        {swal("Data is Empty!", "You clicked the button!", "error");}
        document.querySelector(".data").style.display="none";
        document.querySelector("#click").style.display="none";
        document.querySelector("#btn").style.display="none";
        
    }
    else{
        {swal("Data SuccessFully!", "You clicked the button!", "success");}
        document.querySelector("#click").style.display="none";
        document.querySelector("#btn").style.display="none";
        text=data;
        document.querySelector(".data").innerHTML=`<h2 class="text-center text-danger mt-5">Your Name is :${text}</h2>`;

    }
    document.querySelector("#change").innerHTML=`<h2 class="text-center text-danger"> ${text} </h2>`;
}
