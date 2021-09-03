setInterval(() => {
    let date = new Date();
    htime =date.getHours()
    mtime =date.getMinutes();
    stime =date.getSeconds();

    let hrotation = 30*htime + (mtime/2);
    let mrotation = 6*mtime;
    let srotation = 6*stime;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;

    // How to rotate from bottom
}, 1000);