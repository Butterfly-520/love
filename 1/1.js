// JavaScript Document
// 开关灯
function changeMode() {
    var body = document.body;
    if(body.classList.contains('day-mode')){
        body.classList.remove('day-mode');
        body.classList.add('night-mode');
    } else if(body.classList.contains('night-mode')){
        body.classList.remove('night-mode');
        body.classList.add('day-mode');
    }
}
