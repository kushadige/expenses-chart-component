const sticks = document.querySelectorAll('.stick');

async function getData(){
    const res = await fetch('data.json');
    const data = await res.json();

    data.forEach((day, idx) => {
        sticks[idx].innerHTML = `
            <span>${day.day}</span>
            <span>$${day.amount}</span>
        `;
        sticks[idx].style.height = `${(day.amount)*2}px`;
        if(window.innerWidth < 440) {
            sticks[idx].style.height = `${(day.amount)*3}px`;
        }
    });
}

getData();

sticks.forEach((stick) => {
    stick.addEventListener('click', (e) => {
        sticks.forEach((s) => {
            s.classList.remove('show');
        });
        e.target.classList.toggle('show');
    });
});

document.addEventListener('click', (e) => {
    if(!e.target.classList.contains('stick')){
        sticks.forEach((stick) => {
            stick.classList.remove('show');
        });
    }
});


// getData() ajax
/*
function getData(){
    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'data.json');

    xhr.onload = function(){
        if(this.status === 200){
            const data = JSON.parse(this.responseText);

            data.forEach((day, idx) => {
                sticks[idx].innerHTML = `
                    <span>${day.day}</span>
                    <span>$${day.amount}</span>
                `;
                sticks[idx].style.height = `${(day.amount)*2}px`;
                if(window.innerWidth < 440) {
                    sticks[idx].style.height = `${(day.amount)*3}px`;
                }
            });
        }
    }

    xhr.send();
}*/