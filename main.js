const deg = 6;
setInterval(() => {
    let date = new Date();
    let hr = date.getHours() * 30;
    let m = date.getMinutes() * deg;
    let s = date.getSeconds() * deg;
    document.querySelector(".sec").style.transform = `rotateZ(${s - 90}deg)`;
    document.querySelector(".min").style.transform = `rotateZ(${m - 90}deg)`;
    document.querySelector(".hour").style.transform = `rotateZ(${hr + (m / 12) - 90}deg)`;

});