const click = document.getElementById('counter');
const btn = document.querySelector('.clickBtn');
const money = document.getElementById('money');
const auto = document.querySelector('.auto-click');
const faster = document.querySelector('.click-faster');

let autoClickBool = false;
let cond = localStorage.getItem('condition');
let clickCounter = 0;


function increment() {
    btn.addEventListener('click', () => {
        let n = localStorage.getItem('counter');
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

let interval = 1000;

function clickFaster() {
    faster.addEventListener('click', () => {
        if(localStorage.counter >= 3) {
            interval = localStorage.getItem('interval');
            interval = interval - 100;
            localStorage.setItem('interval', interval);
        }
    })
}

function autoClick() {
    auto.addEventListener('click', () => {
        if(localStorage.counter >= 3) {
            setInterval(() => {
                let n = localStorage.getItem('counter');
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
            }, `${localStorage.interval}`);
            console.log(interval);
            localStorage.counter = localStorage.counter - 3;
            click.innerHTML = localStorage.counter;
            autoClickBool = true;
            
            if(autoClickBool === true) {
                cond = true;
            } else {
                cond = false;
            }
        } else {
            console.log("You need more than 3 clicks to purchase this upgrade");
        }
  
        console.log(cond);
        localStorage.setItem("condition", cond);
    })
    window.onload = () => {
        cond = false;
        console.log(cond);
        localStorage.setItem("condition", cond);
    }
}

clickFaster();
autoClick();
increment();