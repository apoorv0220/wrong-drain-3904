let best = document.getElementById("best-wrapper")

var swiper = new Swiper(".mySwiper", {
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
});

var sweeper = new Swiper(".mySweeper", {
    slidesPerView: 4,
    spaceBetween: 25,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
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
    arr.forEach(element => {
        let child = document.createElement("div");
        let img = document.createElement("img");
        let name = document.createElement("h3")
        let desc = document.createElement("p")
        let price = document.createElement("p")

        child.setAttribute("class", "swiper-slide");
        img.setAttribute("src",element.img)
        name.innerText = element.name;
        desc.innerText = element.Desc;
        price.innerText = `₹ ${element.price}`;
        
        child.append(img, name, desc, price);
        best.append(child);
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

let id = "";
let type = ""

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