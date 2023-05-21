window.addEventListener('scroll', function () {
    document.querySelector('header').style.position = 'fixed';
    document.querySelector('header').style.right = '0';
    document.querySelector('header').style.left = '0';
    document.querySelector('header').style.backgroundColor = '#fff';
    document.querySelector('header').style.zIndex = '100';
    document.querySelector('header').style.boxShadow = '0 0 3px #000';
});
function cardAddToMenu() {
    let count = document.getElementById('cart-count');
    count.innerText = Number(count.innerText) + 1;
    document.getElementById('cart-count').style.opacity = '1';
}
function close(elementID, buttonID) {
    document.getElementById(buttonID).addEventListener('click', function () {
        document.getElementById(elementID).style.display = 'none';
    });
};
function cartQP(inValue, price, newP) {
    let valueQ = document.getElementById(inValue);
    let count3 = valueQ.value;
    valueQ.value = Number(count3) + 1;
    let P = document.getElementById(price);
    let AddP = P.innerText;
    let CP = +AddP;
    let result = CP + newP;
    console.log(result);
    P.innerText = result;

    let total2 = document.getElementById('total2');
    total2.innerText = +P.innerText + 40;

};
function cartQM1(inValue1, price1, newP1) {
    let valueQ = document.getElementById(inValue1);
    let count3 = valueQ.value;
    valueQ.value = Number(count3) - 1;
    let P = document.getElementById(price1);
    let AddP = P.innerText;
    let CP = +AddP;
    let result = CP - newP1;
    console.log(result);
    P.innerText = result;

    let total1 = document.getElementById('total1');
    total1.innerText = +P.innerText + 40;

};
function cartQP1(inValue1, price1, newP1) {
    let valueQ = document.getElementById(inValue1);
    let count3 = valueQ.value;
    valueQ.value = Number(count3) + 1;
    let P = document.getElementById(price1);
    let AddP = P.innerText;
    let CP = +AddP;
    let result = CP + newP1;
    console.log(result);
    P.innerText = result;

    let total1 = document.getElementById('total1');
    total1.innerText = +P.innerText + 40;

};
function cartQM(inValue, price, newP) {
    let valueQ = document.getElementById(inValue);
    let count3 = valueQ.value;
    valueQ.value = Number(count3) - 1;
    let P = document.getElementById(price);
    let AddP = P.innerText;
    let CP = +AddP;
    let result = CP - newP;
    console.log(result);
    P.innerText = result;

    let total2 = document.getElementById('total2');
    total2.innerText = +P.innerText + 40;

};
function cartQP3(inValue3, price3, newP3) {
    let valueQ = document.getElementById(inValue3);
    let count3 = valueQ.value;
    valueQ.value = Number(count3) + 1;
    let P = document.getElementById(price3);
    let AddP = P.innerText;
    let CP = +AddP;
    let result = CP + newP3;
    console.log(result);
    P.innerText = result;

    let total3 = document.getElementById('total3');
    total3.innerText = +P.innerText + 40;

};
function cartQM3(inValue3, price3, newP3) {
    let valueQ = document.getElementById(inValue3);
    let count3 = valueQ.value;
    valueQ.value = Number(count3) - 1;
    let P = document.getElementById(price3);
    let AddP = P.innerText;
    let CP = +AddP;
    let result = CP - newP3;
    console.log(result);
    P.innerText = result;

    let total3 = document.getElementById('total3');
    total3.innerText = +P.innerText + 40;

};
document.getElementById('p3p').addEventListener('click', function () {
    cartQP3('p3', 'price3', 1020);
});
document.getElementById('p3m').addEventListener('click', function () {
    cartQM3('p3', 'price3', 1020);
    let minus = document.getElementById('p3');
    if (minus.value < 1) {
        document.getElementById('product3').style.display = 'none';
    };
});
document.getElementById('p3').addEventListener('keyup', function () {
    let thismy = document.getElementById('p3');
    if (thismy.value < 1) {
        document.getElementById('product3').style.display = 'none';
        alert('Invalid Quantity')
    }
});
document.getElementById('pp').addEventListener('click', function () {
    cartQP1('p', 'price1', 980);
});
document.getElementById('pm').addEventListener('click', function () {
    cartQM1('p', 'price1', 980);
    let minus = document.getElementById('p');
    if (minus.value < 1) {
        document.getElementById('product1').style.display = 'none';
    };
});
document.getElementById('p').addEventListener('keyup', function () {
    let thismy = document.getElementById('p');
    if (thismy.value < 1) {
        document.getElementById('product1').style.display = 'none';
        alert('Invalid Quantity')
    }
});
document.getElementById('p2p').addEventListener('click', function () {
    cartQP('p2', 'price2', 1200);
});
document.getElementById('p2m').addEventListener('click', function () {
    cartQM('p2', 'price2', 1200);
    let minus = document.getElementById('p2');
    if (minus.value < 1) {
        document.getElementById('product2').style.display = 'none';
    };
});
document.getElementById('p2').addEventListener('keyup', function () {
    let thismy = document.getElementById('p2');
    if (thismy.value < 1) {
        document.getElementById('product2').style.display = 'none';
        alert('Invalid Quantity')
    }
});

let total1 = document.getElementById('total1');
let price1 = document.getElementById('price1').innerText;
price1 = Number(price1);
total1.innerText = price1 + 40;

let total2 = document.getElementById('total2');
let price2 = document.getElementById('price2').innerText;
price2 = Number(price2);
total2.innerText = price2 + 40;

let total3 = document.getElementById('total3');
let price3 = document.getElementById('price3').innerText;
price3 = Number(price3);
total3.innerText = price3 + 40;


close('product1', 'close1');
close('product2', 'close2');
close('product3', 'close3');
document.getElementById('slide-cart1').addEventListener('click', function () {
    cardAddToMenu();
    document.getElementById('product1').style.display = 'block';
});
document.getElementById('slide-cart2').addEventListener('click', function () {
    cardAddToMenu();
    document.getElementById('product2').style.display = 'block';
});
document.getElementById('slide-cart3').addEventListener('click', function () {
    cardAddToMenu();
    document.getElementById('product3').style.display = 'block';
});
document.getElementById('countcart').addEventListener('click', function () {
    document.getElementById('cart-count').style.display = 'none';
});
let email = document.getElementById('inputEmail');
let phone = document.getElementById('phone');
let address = document.getElementById('inputAddress');
let city = document.getElementById('inputCity');
let state = document.getElementById('inputState');
let zip = document.getElementById('inputZip');

document.getElementById('orderControl').addEventListener('click', function () {
    if (email.value === '' || phone.value === '' || address.value === '' || city.value === '' || state.value === '' || zip.value === '') {
        alert('Please fill-up the form');
    } else {
        document.getElementById('orderDetails').style.display = 'none';
        document.getElementById('confirm').style.display = 'block';
        this.style.display = 'none';
    }
});
document.getElementById('order').addEventListener('click', function () {
    document.getElementById('cart-count').style.opacity = '0';
    document.getElementById('cart-count').innerText = 0;
});


