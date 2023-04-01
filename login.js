let inputOtp = document.getElementById("pass");
let butn = document.getElementById("enter")
let num = document.getElementById("num");

let flag=false;
let temp = 9999;

butn.addEventListener("click", () => {
    if(!flag) {
        inputOtp.style.display = "block";
        butn.innerText = "SIGN UP"
        flag=true;
    } else {
        if(inputOtp.value == temp) {
            flag=false;
            Swal.fire(
                'Good job!',
                'Login Succesful',
                'success'
            )
            redirect();
        } else {
            flag=false;
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Incorrect Password or Number'
            })
        }  
    }
})

function redirect() {
    setTimeout(() => { document.location.href = "./index.html"; }, 1000);
    localStorage.setItem("user", JSON.stringify(num.value))
}

