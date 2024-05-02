 window.onload = function() {
    let toggle = document.querySelector('.toggle');
    let OFF = document.querySelector('.OFF');
    let ON = document.querySelector('.ON');
    let atta1 = document.querySelector('#att1');
    let atta2 = document.querySelector('#att2');
    let atta3 = document.querySelector('#att3');

    toggle.onclick = function() {
        toggle.classList.toggle('active');
        OFF.classList.toggle('active');
        ON.classList.toggle('active');
        atta1.classList.toggle('active');
        atta2.classList.toggle('active');
        atta3.classList.toggle('active');
    };
};
