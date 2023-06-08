function easy() {
    document.getElementById('circle')
        .style.animationDuration = '25s';
    document.getElementById('circle')
        .className = 'crcl';
}

function medium() {
    document.getElementById('circle')
        .style.animationDuration = '20';
    document.getElementById('circle')
        .className = 'crcl';
}

function hard() {
    document.getElementById('circle')
        .style.animationDuration = '10s';
    document.getElementById('circle')
        .className = 'crcl';
}

let cnt = 0;

function count() {
    cnt = parseInt(1) + parseInt(cnt);
    var scr = document.getElementById('score');
    scr.innerHTML = cnt;
}

function restart() {
    window.location.reload();
}