let cart = JSON.parse(localStorage.getItem("cart")) ?? [];

const progress = document.getElementById("progress");
const stepCircles = document.querySelectorAll(".circle");
let currentActive = 1;

function update(currentActive) {
  stepCircles.forEach((circle, i) => {
    if (i < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const activeCircles = document.querySelectorAll(".active");
  progress.style.width =
    ((activeCircles.length - 1) / (stepCircles.length - 1)) * 100 + "%";
}

dis(cart)

function dis(arr) {

    let grand = 0;
    let quantity = 0;

    document.querySelector("#bag > div").innerHTML="";

    arr.forEach((element) => {
    
        let cont = document.createElement("div");
        let img = document.createElement("img");
        let name = document.createElement("h5");
        let price = document.createElement("p");
        let amount = document.createElement("input");
        let total = document.createElement("p");
        let del = document.createElement("button");
        
        img.setAttribute("src", element.img)
        name.innerText = element.name;
        price.innerText = `₹ ${element.price}`;
        amount.setAttribute("min", 1);
        amount.setAttribute("value", element.amount);
        amount.setAttribute("type", "number");
        total = (+element.amount)*(element.price)
        del.innerText = "X";

        cont.append(img, name, price, amount, total, del);
        document.querySelector("#bag > div").append(cont)
        
        del.addEventListener("click",(event) => {
            arr=arr.filter((i) => i.id!=element.id)
            localStorage.setItem("cart", JSON.stringify(arr))
            
            dis(arr);
        })
        
        amount.addEventListener("change", () => {
            element.amount = amount.value
            localStorage.setItem("cart", JSON.stringify(arr))
            dis(arr)
        })
        grand += total;
        quantity += +amount.value;
        console.log(quantity);

    })

    console.log(grand)
    
    if(grand > 2000) {
        document.querySelector("#bag > h3").style.display="block";
        // grand*=0.95;
    }
    
    document.querySelector("#grand > h2").innerText = `GRAND TOTAL : ₹ ${Math.floor(grand)}`;
    
    document.querySelector("main > h2").innerText = `MY BAG(${quantity})`;

    document.querySelector("#actual").innerText = `₹ ${Math.floor(grand)}`;
    document.querySelector("#shipping").innerText = "FREE";
    document.querySelector("#discount").innerText = `₹ ${Math.floor(grand*0.05)}`;
    document.querySelector("#toPay").innerText = `₹ ${Math.floor(grand*0.95)}`;
    document.getElementById("total-amount").innerText = `₹ ${Math.floor(grand*0.95)}`;
}


document.querySelector("main > button").addEventListener("click", (event) => {
    console.log("test")
    update(++currentActive)
    if(currentActive==2) {
        event.target.innerText="PROCEED TO CHECKOUT"
        document.getElementById("address").style.display="flex";
        document.getElementById("grand").style.display = "none";
        document.getElementById("grand").style.display = "none";
        document.getElementById("bag").style.display = "none";
        document.querySelector('main>h2').style.display = "none";
    } else if(currentActive==3) {
        event.target.innerText="PROCEED TO PAYMENT";
        document.getElementById("address").style.display="none";
        document.getElementById("checkout").style.display = "block";
        event.target
    } else if(currentActive==4) {
        event.target.style.display="none";
        document.getElementById("checkout").style.display="none";
        document.getElementById("payment").style.display = "block";
    }
})

document.getElementById("pay").addEventListener("click", () => {
    console.log(".test")
    Swal.fire(
        `Order succesfully placed!`
    )
    cart=[];
    localStorage.setItem("cart", JSON.stringify(cart))
    redirect()
})

function redirect() {
    setTimeout(() => { document.location.href = "./index.html"; }, 1000);
    localStorage.setItem("user", JSON.stringify(num.value))
}

