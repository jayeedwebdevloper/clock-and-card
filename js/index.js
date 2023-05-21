function countCart() {
    let count = document.getElementById('cart-count');
    let cCount = count.innerText;
    let calCount = Number(cCount);
    let total = calCount + 1;
    let result = total;
    count.innerText = result;
};
document.getElementById('cart1').addEventListener('click', function () {
    countCart();
    document.getElementById('cart-count').style.opacity = '1';
});
document.getElementById('cart2').addEventListener('click', function () {
    countCart();
    document.getElementById('cart-count').style.opacity = '1';
});
document.getElementById('cart3').addEventListener('click', function () {
    countCart();
    document.getElementById('cart-count').style.opacity = '1';
});
document.getElementById('cart4').addEventListener('click', function () {
    countCart();
    document.getElementById('cart-count').style.opacity = '1';
});
document.getElementById('cart5').addEventListener('click', function () {
    countCart();
    document.getElementById('cart-count').style.opacity = '1';
});
document.getElementById('cart6').addEventListener('click', function () {
    countCart();
    document.getElementById('cart-count').style.opacity = '1';
});
function close(idName, elementName) {
    document.getElementById(idName).addEventListener('click', function () {
        document.getElementById(elementName).style.display = 'none';
    });

};
close('close1', 'product1');
close('close2', 'product2');
close('close3', 'product3');
close('close4', 'product4');
close('close5', 'product5');
close('close6', 'product6');

document.getElementById('close1').addEventListener('click', function () {
    let countMinus = document.getElementById('cart-count');
    let number = countMinus.innerText;
    let MNumber = Number(number) - 1;
    countMinus.innerText = MNumber;
});
document.getElementById('close2').addEventListener('click', function () {
    let countMinus = document.getElementById('cart-count');
    let number = countMinus.innerText;
    let MNumber = Number(number) - 1;
    countMinus.innerText = MNumber;
});
document.getElementById('close3').addEventListener('click', function () {
    let countMinus = document.getElementById('cart-count');
    let number = countMinus.innerText;
    let MNumber = Number(number) - 1;
    countMinus.innerText = MNumber;
});
document.getElementById('close4').addEventListener('click', function () {
    let countMinus = document.getElementById('cart-count');
    let number = countMinus.innerText;
    let MNumber = Number(number) - 1;
    countMinus.innerText = MNumber;
});
document.getElementById('close5').addEventListener('click', function () {
    let countMinus = document.getElementById('cart-count');
    let number = countMinus.innerText;
    let MNumber = Number(number) - 1;
    countMinus.innerText = MNumber;
});
document.getElementById('close6').addEventListener('click', function () {
    let countMinus = document.getElementById('cart-count');
    let number = countMinus.innerText;
    let MNumber = Number(number) - 1;
    countMinus.innerText = MNumber;
});


// input 1

let plus = document.getElementById('pp');
console.log(plus);
let minus = document.getElementById('pm');
console.log(minus);
let qun = document.getElementById('quan1');
console.log(qun);
let fee1 = document.getElementById('fee1');
let price1 = document.getElementById('price1');
let total1 = document.getElementById('total1');
total1.innerText = +price1.innerText + +fee1.innerText;

plus.addEventListener('click', function () {
    let number1 = qun.value;
    let result = Number(number1) + 1;
    console.log(result);
    qun.value = result;

    let total = +total1.innerText + 980;
    console.log(total);
    total1.innerText = total;
});


minus.addEventListener('click', function () {
    let number1 = qun.value;
    let result = Number(number1) - 1;
    console.log(result);
    qun.value = result;


    let total = +total1.innerText - 980;
    console.log(total);
    total1.innerText = total;

    if (qun.value == 0 || qun.value == '0') {
        document.getElementById('product1').style.display = 'none';
    }
});

// input 2

let plus2 = document.getElementById('p2p');
console.log(plus2);
let minus2 = document.getElementById('p2m');
console.log(minus2);
let qun2 = document.getElementById('quan2');
console.log(qun2);
let fee2 = document.getElementById('fee2');
let price2 = document.getElementById('price2');
let total2 = document.getElementById('total2');
total2.innerText = +price2.innerText + +fee2.innerText;

plus2.addEventListener('click', function () {
    let number2 = qun2.value;
    let result = Number(number2) + 1;
    console.log(result);
    qun2.value = result;

    let total = +total2.innerText + 1200;
    console.log(total);
    total2.innerText = total;
});


minus2.addEventListener('click', function () {
    let number2 = qun2.value;
    let result = Number(number2) - 1;
    console.log(result);
    qun2.value = result;


    let total = +total2.innerText - 1200;
    console.log(total);
    total2.innerText = total;

    if (qun2.value == 0 || qun2.value == '0') {
        document.getElementById('product2').style.display = 'none';
    }
});

// input 3

let plus3 = document.getElementById('p3p');
console.log(plus3);
let minus3 = document.getElementById('p3m');
console.log(minus3);
let qun3 = document.getElementById('quan3');
console.log(qun3);
let fee3 = document.getElementById('fee3');
let price3 = document.getElementById('price3');
let total3 = document.getElementById('total3');
total3.innerText = +price3.innerText + +fee3.innerText;

plus3.addEventListener('click', function () {
    let number3 = qun3.value;
    let result = Number(number3) + 1;
    console.log(result);
    qun3.value = result;

    let total = +total3.innerText + 1400;
    console.log(total);
    total3.innerText = total;
});


minus3.addEventListener('click', function () {
    let number3 = qun3.value;
    let result = Number(number3) - 1;
    console.log(result);
    qun3.value = result;


    let total = +total3.innerText - 1400;
    console.log(total);
    total3.innerText = total;

    if (qun3.value == 0 || qun3.value == '0') {
        document.getElementById('product3').style.display = 'none';
    }
});

// input 4

let plus4 = document.getElementById('p4p');
console.log(plus4);
let minus4 = document.getElementById('p4m');
console.log(minus3);
let qun4 = document.getElementById('quan4');
console.log(qun4);
let fee4 = document.getElementById('fee4');
let price4 = document.getElementById('price4');
let total4 = document.getElementById('total4');
total4.innerText = +price4.innerText + +fee4.innerText;

plus4.addEventListener('click', function () {
    let number4 = qun4.value;
    let result = Number(number4) + 1;
    console.log(result);
    qun4.value = result;

    let total = +total4.innerText + 560;
    console.log(total);
    total4.innerText = total;
});


minus4.addEventListener('click', function () {
    let number4 = qun4.value;
    let result = Number(number4) - 1;
    console.log(result);
    qun4.value = result;


    let total = +total4.innerText - 560;
    console.log(total);
    total4.innerText = total;

    if (qun4.value == 0 || qun4.value == '0') {
        document.getElementById('product4').style.display = 'none';
    }
});

// input 5

let plus5 = document.getElementById('p5p');
console.log(plus5);
let minus5 = document.getElementById('p5m');
console.log(minus5);
let qun5 = document.getElementById('quan5');
console.log(qun5);
let fee5 = document.getElementById('fee5');
let price5 = document.getElementById('price5');
let total5 = document.getElementById('total5');
total5.innerText = +price5.innerText + +fee5.innerText;

plus5.addEventListener('click', function () {
    let number5 = qun5.value;
    let result = Number(number5) + 1;
    console.log(result);
    qun5.value = result;

    let total = +total5.innerText + 1100;
    console.log(total);
    total5.innerText = total;
});


minus5.addEventListener('click', function () {
    let number5 = qun5.value;
    let result = Number(number5) - 1;
    console.log(result);
    qun5.value = result;


    let total = +total5.innerText - 1100;
    console.log(total);
    total5.innerText = total;

    if (qun5.value == 0 || qun5.value == '0') {
        document.getElementById('product5').style.display = 'none';
    }
});

// input 6

let plus6 = document.getElementById('p6p');
console.log(plus6);
let minus6 = document.getElementById('p6m');
console.log(minus3);
let qun6 = document.getElementById('quan6');
console.log(qun6);
let fee6 = document.getElementById('fee6');
let price6 = document.getElementById('price6');
let total6 = document.getElementById('total6');
total6.innerText = +price6.innerText + +fee6.innerText;

plus6.addEventListener('click', function () {
    let number6 = qun6.value;
    let result = Number(number6) + 1;
    console.log(result);
    qun6.value = result;

    let total = +total6.innerText + 1300;
    console.log(total);
    total6.innerText = total;
});


minus6.addEventListener('click', function () {
    let number6 = qun6.value;
    let result = Number(number6) - 1;
    console.log(result);
    qun6.value = result;


    let total = +total6.innerText - 1300;
    console.log(total);
    total6.innerText = total;

    if (qun6.value == 0 || qun6.value == '0') {
        document.getElementById('product6').style.display = 'none';
    }
});


// address

let email = document.getElementById('inputEmail1');
let phone = document.getElementById('phone1');
let address = document.getElementById('inputAddress1');
let zip = document.getElementById('inputZip1');
let order = document.getElementById('orderC1');
let confirm1 = document.getElementById('confirm1');
let details = document.getElementById('orderD1');

order.addEventListener('click', function () {
    if (email.value == '' || phone.value == '' || address.value == '' || zip.value == '') {
        alert('Please Fill-Up The Form');
        order.setAttribute('disabled', true);
    } else {
        order.removeAttribute('disabled');
        confirm1.style.display = 'block';
        details.style.display = 'none';
        this.style.display = 'none';
    }
});
zip.addEventListener('keyup', function () {
    order.removeAttribute('disabled');
});

// address2

let email2 = document.getElementById('inputEmail2');
let phone2 = document.getElementById('phone2');
let address2 = document.getElementById('inputAddress2');
let zip2 = document.getElementById('inputZip2');
let order2 = document.getElementById('orderC2');
let confirm2 = document.getElementById('confirm2');
let details2 = document.getElementById('orderD2');

order2.addEventListener('click', function () {
    if (email2.value == '' || phone2.value == '' || address2.value == '' || zip2.value == '') {
        alert('Please Fill-Up The Form');
        order2.setAttribute('disabled', true);
    } else {
        order2.removeAttribute('disabled');
        confirm2.style.display = 'block';
        details2.style.display = 'none';
        this.style.display = 'none';
    }
});
zip2.addEventListener('keyup', function () {
    order2.removeAttribute('disabled');
});

// address3

let email3 = document.getElementById('inputEmail3');
let phone3 = document.getElementById('phone3');
let address3 = document.getElementById('inputAddress3');
let zip3 = document.getElementById('inputZip3');
let order3 = document.getElementById('orderC3');
let confirm3 = document.getElementById('confirm3');
let details3 = document.getElementById('orderD3');

order3.addEventListener('click', function () {
    if (email3.value == '' || phone3.value == '' || address3.value == '' || zip3.value == '') {
        alert('Please Fill-Up The Form');
        order3.setAttribute('disabled', true);
    } else {
        order3.removeAttribute('disabled');
        confirm3.style.display = 'block';
        details3.style.display = 'none';
        this.style.display = 'none';
    }
});
zip3.addEventListener('keyup', function () {
    order3.removeAttribute('disabled');
});

// address4

let email4 = document.getElementById('inputEmail4');
let phone4 = document.getElementById('phone4');
let address4 = document.getElementById('inputAddress4');
let zip4 = document.getElementById('inputZip4');
let order4 = document.getElementById('orderC4');
let confirm4 = document.getElementById('confirm4');
let details4 = document.getElementById('orderD4');

order4.addEventListener('click', function () {
    if (email4.value == '' || phone4.value == '' || address4.value == '' || zip4.value == '') {
        alert('Please Fill-Up The Form');
        order4.setAttribute('disabled', true);
    } else {
        order4.removeAttribute('disabled');
        confirm4.style.display = 'block';
        details4.style.display = 'none';
        this.style.display = 'none';
    }
});
zip4.addEventListener('keyup', function () {
    order4.removeAttribute('disabled');
});

// address5

let email5 = document.getElementById('inputEmail5');
let phone5 = document.getElementById('phone5');
let address5 = document.getElementById('inputAddress5');
let zip5 = document.getElementById('inputZip5');
let order5 = document.getElementById('orderC5');
let confirm5 = document.getElementById('confirm5');
let details5 = document.getElementById('orderD5');

order5.addEventListener('click', function () {
    if (email5.value == '' || phone5.value == '' || address5.value == '' || zip5.value == '') {
        alert('Please Fill-Up The Form');
        order5.setAttribute('disabled', true);
    } else {
        order5.removeAttribute('disabled');
        confirm5.style.display = 'block';
        details5.style.display = 'none';
        this.style.display = 'none';
    }
});
zip5.addEventListener('keyup', function () {
    order5.removeAttribute('disabled');
});

// address6

let email6 = document.getElementById('inputEmail6');
let phone6 = document.getElementById('phone6');
let address6 = document.getElementById('inputAddress6');
let zip6 = document.getElementById('inputZip6');
let order6 = document.getElementById('orderC6');
let confirm6 = document.getElementById('confirm6');
let details6 = document.getElementById('orderD6');

order6.addEventListener('click', function () {
    if (email6.value == '' || phone6.value == '' || address6.value == '' || zip5.value == '') {
        alert('Please Fill-Up The Form');
        order6.setAttribute('disabled', true);
    } else {
        order6.removeAttribute('disabled');
        confirm6.style.display = 'block';
        details6.style.display = 'none';
        this.style.display = 'none';
    }
});
zip6.addEventListener('keyup', function () {
    order6.removeAttribute('disabled');
});

function addCart(buttonID, productId) {
    document.getElementById(buttonID).addEventListener('click', function () {
        document.getElementById(productId).style.display = 'block';
    });
};

addCart('cart1', 'product1');
addCart('cart2', 'product2');
addCart('cart3', 'product3');
addCart('cart4', 'product4');
addCart('cart5', 'product5');
addCart('cart6', 'product6');

document.getElementById('countcart').addEventListener('click', function () {
    document.getElementById('cart-count').style.opacity = '0';
    document.getElementById('cart-count').innerText = '0';

})