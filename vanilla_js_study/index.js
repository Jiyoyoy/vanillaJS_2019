const title = document.querySelector("h2");

const colors = ["black", "orange", "green", "skyblue"]

const superEventHandler = {
    handlePointerEnter: function(){
        title.innerHTML = "Pointer is Here!";
        title.style.color = colors[0];
    },
    
    handlePointerLeave: function(){
        title.innerHTML = "Pointer has just left!";
        title.style.color = colors[1];
    },

    handleResize: function(){
        title.innerHTML = "It's been resized!";
        title.style.color = colors[2];

    },
    
    handleClick: function(){
        title.innerHTML = "The right button of the mouse is clicked!";
        title.style.color = colors[3];
    }
}



title.addEventListener("pointerenter", superEventHandler.handlePointerEnter)

title.addEventListener("pointerleave", superEventHandler.handlePointerLeave)

window.addEventListener("resize", superEventHandler.handleResize )

window.addEventListener("contextmenu", superEventHandler.handleClick)