 window.onload = function() {
    let toggle = document.querySelector('.toggle');
    let OFF = document.querySelector('.OFF');
    let ON = document.querySelector('.ON');
    let att1 = document.querySelector('.att1');
    let att2 = document.querySelector('.att2');
    let att3 = document.querySelector('.att3');
    let btn = document.querySelector('.btn');
    let lite = document.querySelector('.lite');
    let body = document.querySelector('body');
    let audio = document.querySelector('#audio');
    let wire1 = document.querySelector('.wire1');
    let wire = document.querySelector('.wire');
    

    btn.onclick = function(){
        lite.classList.toggle('on');
        body.classList.toggle('on');
        wire1.classList.toggle('on');
        wire.classList.toggle('on');
        att1.classList.toggle('on');
        att2.classList.toggle('on');
        att3.classList.toggle('on');
        audio.play();

  }
};
