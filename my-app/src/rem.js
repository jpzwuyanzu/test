// const baseSize = 32
//设置rem函数
function setRem () {
    // const scale = document.documentElement.clientWidth / 750
    // document.documentElement.style.fontSize = (baseSize * Math.min(scale, 2)) + 'px'
    document.documentElement.style.fontSize = 16 + 'px'
}
setRem()

window.onresize  = function() {
    setRem()
}