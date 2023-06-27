AFRAME.registerComponent("drive",{
    schema:{
        carMovement:{type:"number", default:0}
    },
    init:function(){
        window.addEventListener("keydown", (e) => {
            if(e.key === "ArrowUp"){
                this.data.carMovement -= 0.001
            }
            if(e.key === "ArrowDown"){
                this.data.carMovement += 0.001
            }
        })
    },
    tick:function(){
        var carPosition = this.el.getAttribute("position")

        carPosition.z += this.data.carMovement

        this.el.setAttribute("position", {
            x:carPosition.x,
            y:carPosition.y,
            z:carPosition.z
        })
    }
})