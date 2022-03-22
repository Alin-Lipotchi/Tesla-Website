// Hamburger 

const overlay = document.querySelector(".overlay");
const sideMenu = document.querySelector(".side-menu");
const hamburger = document.querySelector(".hamburger");
const xBtn = document.querySelector(".x-btn");

const showMenu = (e) => {
    e.preventDefault();
    overlay.style.display = "block";
    sideMenu.style.display = "block";
}

const closeMenu = (e) => {
    e.preventDefault();
    overlay.style.display = "none";
    sideMenu.style.display = "none";
}

hamburger.addEventListener("click", showMenu);
xBtn.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);

// Model-change

const range = document.querySelector("#range");
const speed = document.querySelector("#speed");
const zeroTo60 = document.querySelector("#zero-to60");

let modelPrice = 41940;

const models = document.querySelectorAll(".model-option");

const chooseModel = (e) => {
    e.preventDefault();

    models.forEach(e => {
        e.classList.remove("active");
    });
    if(e.target.id === "model-3-default") {
        if(e.target.localName !== "p") {
            e.target.classList.add("active");
        } else {
            e.target.parentElement.classList.add("active");
        }
        range.innerHTML = "267 mi";
        speed.innerHTML = "140 mph";
        zeroTo60.innerHTML = "5.8 sec";
        modelPrice = 41940;
    } else if(e.target.id === "long-range") {
        if(e.target.localName !== "p") {
            e.target.classList.add("active");
        } else {
            e.target.parentElement.classList.add("active");
        }
        range.innerHTML = "334 mi";
        speed.innerHTML = "145 mph";
        zeroTo60.innerHTML = "4.2 sec";
        modelPrice = 49440;
    } else {
        if(e.target.localName !== "p") {
            e.target.classList.add("active");
        } else {
            e.target.parentElement.classList.add("active");
        }
        range.innerHTML = "315 mi";
        speed.innerHTML = "162 mph";
        zeroTo60.innerHTML = "3.1 sec";
        modelPrice = 56940;
    }

    calculateFinalPrice();
}

models.forEach(e => {
    e.addEventListener("click", chooseModel);
});

// Color-change

const carImage = document.querySelector(".car-image");

const colors = document.querySelectorAll(".color");
const paintScreenName = document.querySelector("#paint-name");
const paintScreenPrice = document.querySelector("#paint-price");

let colorPrice = 0;
let colorCode = 1;
let wheelCode = 1;

const chooseColor = (e) => {
    e.preventDefault();

    let colorTextName;
    let colorTextPrice;

    colors.forEach(e => {
        e.classList.remove("active");
    });

    if(e.target.id === "color-white") {
        if(e.target.localName !== "img") {
            e.target.classList.add("active");
        } else {
            e.target.parentElement.classList.add("active");
        }
        colorCode = 1;
        colorTextName = "Pearl White Multi-Coat";
        colorPrice = 0;
        colorTextPrice = "Included";
    } else if(e.target.id === "color-silver") { 
        if(e.target.localName !== "img") {
            e.target.classList.add("active");
        } else {
            e.target.parentElement.classList.add("active");
        }
        colorCode = 2;
        colorTextName = "Midnight Silver Metallic";
        colorPrice = 0;
        colorTextPrice = "Included";
    } else if(e.target.id === "color-blue") {
        if(e.target.localName !== "img") {
            e.target.classList.add("active");
        } else {
            e.target.parentElement.classList.add("active");
        }
        colorCode = 3;
        colorTextName = "Deep Blue Metallic";
        colorPrice = 1000;
        colorTextPrice = "$1.000";
    } else if(e.target.id === "color-black") {
        if(e.target.localName !== "img") {
            e.target.classList.add("active");
        } else {
            e.target.parentElement.classList.add("active");
        }
        colorCode = 4;
        colorTextName = "Solid Black";
        colorPrice = 1500;
        colorTextPrice = "$1.500";
    } else if(e.target.id === "color-red") {
        if(e.target.localName !== "img") {
            e.target.classList.add("active");
        } else {
            e.target.parentElement.classList.add("active");
        }
        colorCode = 5;
        colorTextName = "Red Multi-Coat";
        colorPrice = 2000;
        colorTextPrice = "$2.000";
    }

    carImage.attributes.src.value = `./img/order/car/${colorCode}${wheelCode}.png`;
    paintScreenName.innerHTML = colorTextName;
    paintScreenPrice.innerHTML = colorTextPrice;
    calculateFinalPrice();
}

colors.forEach(e => {
    e.addEventListener("click", chooseColor);
});

// Wheel-change

const wheels = document.querySelectorAll(".wheel");
const wheelScreenName = document.querySelector("#wheel-name");
const wheelScreenPrice = document.querySelector("#wheel-price");

let wheelPrice = 0;

const chooseWheel = (e) => {
    e.preventDefault();

    let wheelTextName;
    let wheelTextPrice;

    wheels.forEach(e => {
        e.classList.remove("active");
    });

    if(e.target.id === "wheel-aero") {
        if(e.target.localName !== "img") {
            e.target.classList.add("active");
        } else {
            e.target.parentElement.classList.add("active");
        }
        wheelCode = 1;
        wheelTextName = "18'' Aero Wheels";
        wheelPrice = 0;
        wheelTextPrice = "Included";
    } else if(e.target.id === "wheel-sport") {
        if(e.target.localName !== "img") {
            e.target.classList.add("active");
        } else {
            e.target.parentElement.classList.add("active");
        }
        wheelCode = 2;
        wheelTextName = "19'' Sport Wheels";
        wheelPrice = 1500;
        wheelTextPrice = "$1.500";
    } else if(e.target.id === "wheel-uberturbine") {
        if(e.target.localName !== "img") {
            e.target.classList.add("active");
        } else {
            e.target.parentElement.classList.add("active");
        }
        wheelCode = 3;
        wheelTextName = "20'' Überturbine Wheels";
        wheelPrice = 3000;
        wheelTextPrice = "$3.000";
    }

    carImage.attributes.src.value = `./img/order/car/${colorCode}${wheelCode}.png`;
    wheelScreenName.innerHTML = wheelTextName;
    wheelScreenPrice.innerHTML = wheelTextPrice;
    calculateFinalPrice();
}

wheels.forEach(e => {
    e.addEventListener("click", chooseWheel);
});

// Auto-pilot

const autoPilot = document.querySelector("#auto-pilot");

let autoPilotPrice = 0;

const addAutoPilot = (e) => {
    e.preventDefault();

    if(autoPilotPrice === 0) {
        autoPilotPrice = 12000;
        e.target.classList.add("order-button-active");
        e.target.innerHTML = "REMOVE";
    } else {
        autoPilotPrice = 0;
        e.target.classList.remove("order-button-active");
        e.target.innerHTML = "ADD";
    }
    
    calculateFinalPrice();
}

autoPilot.addEventListener("click", addAutoPilot);

// Price Update

const finalPrice = document.querySelector("#final-price");

const calculateFinalPrice = () => {
    finalPriceSum = modelPrice + colorPrice + wheelPrice + autoPilotPrice;
    let priceStr = `${finalPriceSum}`;
    let priceArr = priceStr.split("");
    priceArr.reverse().forEach( (e,idx) => {
        if(idx === 2) {
            priceArr.splice(3, 0, '.')
        };
    });
    priceStr = priceArr.reverse().join("");
    finalPrice.innerHTML = priceStr;
}