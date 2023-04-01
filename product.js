let type = JSON.parse(localStorage.getItem("type")) ?? "";
let id = JSON.parse(localStorage.getItem("id")) ?? "";

let cart = JSON.parse(localStorage.getItem("cart")) ?? [];

let cont = document.querySelector(".swiper-wrapper")

var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

const url = "https://mocki.io/v1/a9c90bb0-d3ac-48da-b83f-ce1520757493"
async function recieve() {
    let res = await fetch(url);
    let data = await res.json();

    console.log(data)
    disData(data)
}

recieve()

function disData(arr) {
    
    if(type !== "") {
        list = arr.filter((el) => el.type.toUpperCase() == type.toUpperCase())
    } else {
        list = arr.filter((el) => el.id.toUpperCase() == id.toUpperCase())
    }
    
    console.log(list)

    list.forEach(element => {
        let child = document.createElement("div");
        let left = document.createElement("div");
        let right = document.createElement("div");
        let img1 = document.createElement("img");
        let img2 = document.createElement("img");
        let name = document.createElement("h2")
        let desc = document.createElement("h4")
        let price = document.createElement("p")
        let tax = document.createElement("h6")
        let add = document.createElement("button")

        child.setAttribute("class", "swiper-slide");
        child.setAttribute("id", "card");
        left.setAttribute("class", "left");
        right.setAttribute("class", "right");
        img1.setAttribute("src",element.img)
        img2.setAttribute("src","./Images/triple.png")
        name.innerText = element.name;
        desc.innerText = element.Desc;
        price.innerText = `₹ ${element.price}`;
        tax.innerText = "(MRP incl. of all taxes)";
        add.innerText = "ADD TO BAG";
        
        left.append(img1, img2)
        right.append(name, desc, price, tax, add)
        child.append(left, right);
        cont.append(child);

        add.addEventListener("click", () => {
            if(cart.every((i) => i.id!==element.id)) {
                element.amount=1;
                cart.push(element)
            } else {
                element.amount++;
            }
            localStorage.setItem("cart", JSON.stringify(cart))
            Swal.fire(
                `${element.name} succesfully added!`
            )
        })
    });
}

let home = document.querySelector("#links > a:nth-child(1)");
let makeup = document.querySelector("#links > a:nth-child(2)");
let hair = document.querySelector("#links > a:nth-child(3)");
let skin = document.querySelector("#links > a:nth-child(4)");
let sanitize = document.querySelector("#links > a:nth-child(5)");
let rewards = document.querySelector("#links > a:nth-child(6)");
let allureStudio = document.querySelector("#links > a:nth-child(7)");
let offers = document.querySelector("#links > a:nth-child(8)");

home.addEventListener("mouseover", () => {
    document.querySelectorAll("#dropdown ul").forEach((element) => {
        element.style.display = "none"
    })
})

makeup.addEventListener("mouseover", () => {
    document.querySelectorAll("#dropdown ul").forEach((element) => {
        if(element.className == "makeup") {
            element.style.display = "block"
        } else {
            element.style.display = "none"
        }
    })
})

hair.addEventListener("mouseover", () => {
    document.querySelectorAll("#dropdown ul").forEach((element) => {
        if(element.className == "haircare") {
            element.style.display = "block"
        } else {
            element.style.display = "none"
        }
    })
})

skin.addEventListener("mouseover", () => {
    document.querySelectorAll("#dropdown ul").forEach((element) => {
        if(element.className == "skincare") {
            element.style.display = "block"
        } else {
            element.style.display = "none"
        }
    })
})

sanitize.addEventListener("mouseover", () => {
    document.querySelectorAll("#dropdown ul").forEach((element) => {
        if(element.className == "sanitizingcare") {
            element.style.display = "block"
        } else {
            element.style.display = "none"
        }
    })
})

rewards.addEventListener("mouseover", () => {
    document.querySelectorAll("#dropdown ul").forEach((element) => {
        if(element.className == "rewards") {
            element.style.display = "block"
        } else {
            element.style.display = "none"
        }
    })
})

allureStudio.addEventListener("mouseover", () => {
    document.querySelectorAll("#dropdown ul").forEach((element) => {
        if(element.className == "allureStudio") {
            element.style.display = "block"
        } else {
            element.style.display = "none"
        }
    })
})
offers.addEventListener("mouseover", () => {
    document.querySelectorAll("#dropdown ul").forEach((element) => {
        if(element.className == "offers") {
            element.style.display = "block"
        } else {
            element.style.display = "none"
        }
    })
})

document.querySelector("main").addEventListener("mouseover", () => {
    document.querySelectorAll("#dropdown ul").forEach((element) => {
        element.style.display = "none"
    })
})

let droplinkId = document.querySelectorAll("#dropdown ul > li > a");

droplinkId.forEach((el) => {
    el.addEventListener("click", () => {
        id = el.innerText;
        type = "";
        localStorage.setItem("id", JSON.stringify(id))
        localStorage.setItem("type", JSON.stringify(type))
    })
})

let droplinkType = document.querySelectorAll("#dropdown ul > li > p > a");

droplinkType.forEach((el) => {
    el.addEventListener("click", () => {
        id = "";
        type = el.innerText;
        localStorage.setItem("id", JSON.stringify(id))
        localStorage.setItem("type", JSON.stringify(type))
    })
})

let catlink = document.querySelectorAll(".main_cards > div > a");

catlink.forEach((el) => {
    el.addEventListener("click", () => {
        id = "";
        type = el.innerText;
        localStorage.setItem("id", JSON.stringify(id))
        localStorage.setItem("type", JSON.stringify(type))
    })
})

let footlinkId = document.querySelectorAll(".footUp li > a");

footlinkId.forEach((el) => {
    el.addEventListener("click", () => {
        id = el.innerText;
        type = "";
        localStorage.setItem("id", JSON.stringify(id))
        localStorage.setItem("type", JSON.stringify(type))
    })
})

let footlinkType = document.querySelectorAll(".footUp p > a");

footlinkType.forEach((el) => {
    el.addEventListener("click", () => {
        id = "";
        type = el.innerText;
        localStorage.setItem("id", JSON.stringify(id))
        localStorage.setItem("type", JSON.stringify(type))
    })
})

let user = JSON.parse(localStorage.getItem("user")) ?? "";

if(user!=="") {
    document.getElementById("userD").innerText = user;
}