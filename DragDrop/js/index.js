function dragStar(e){

    console.log(e.dataTransfer);

    e.dataTransfer.setData('text/plain', e.target.id);
}

function dragOver(e){
    e.preventDefault();
}

function drop(e){
    const id = e.dataTransfer.getData('text');
    const draggableElement = document.getElementById(id);
    const dropzone = e.target;

    dropzone.appendChild(draggableElement);
    e.dataTransfer.clearData()
}


// window.addEventListener('DOMContentLoaded',() =>{
//     const drag = document.querySelector('.draggable')

//     drag.addEventListener('dragstart', dragStar)
// })


// const canvas = document.getElementById("canvas");
// const ctx = canvas.getContext("2d");

// ctx.fillStyle = "green";
// ctx.fillRect(10, 10, 150, 100);