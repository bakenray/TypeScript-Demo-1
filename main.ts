var div = document.createElement('div')
div.id = 'demo'

document.body.appendChild(div)

var isMove = false
var position = [0,0]

div.onmousedown= (e)=>{
    div.style.boxShadow = '0 5px 12px rgba(0,0,0,.12)'
    isMove = true
    position =[e.clientX,e.clientY]
}
document.onmousemove =(e)=>{
    if(isMove===true){
        var deltaX = e.clientX - position[0]
        var deltaY = e.clientY - position[1]
        var top = parseInt(div.style.top!) || 0
        var left = parseInt(div.style.left!) || 0
        div.style.top = top + deltaY +'px'
        div.style.left = left + deltaX +'px'
        position = [e.clientX,e.clientY]
    }
}
document.onmouseup=(e)=>{
    div.style.boxShadow = '0 4px 8px rgba(0,0,0,.08)'
    isMove = false
}