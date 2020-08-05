const click = document.getElementById('counter');
const btn = document.querySelector('.clickBtn');
const money = document.getElementById('money');
let clickCounter = 0;

const auto = document.querySelector('.auto-click');
let autoClickBool = false;

function autoClick() {
    auto.addEventListener('click', () => {
        setInterval(function() {
            btn.click();
        }, 1000);
        localStorage.counter = localStorage.counter - 3;
        autoClickBool = true;

        let cond = localStorage.getItem("condition");
        if(autoClickBool === true) {
            cond = true;
        } else {
            cond = false;
        }
  
        console.log(cond);
        localStorage.setItem("condition", cond);
    })   
}

function increment() {
    btn.addEventListener('click', () => {
        let n = localStorage.getItem("counter");
        clickCounter = n;
        if(n === null) {
            n = 1;
            click.innerHTML = n;
        } else {
            n++;
            click.innerHTML = n;
        }
        console.log(n);
        localStorage.setItem("counter", n);
    })
    if(localStorage.counter === undefined) {
        localStorage.counter = 0;
        click.innerHTML = localStorage.counter;
    } else {
        click.innerHTML = localStorage.counter;
    }
}

autoClick();
increment();