function cardHover(card) {
    let mouse = {
        _x: 0,
        _y: 0,
        x: 0,
        y: 0,
        updatePosition: function(e) {
            this.x = e.clientX - this._x;
            this.y = (e.clientY - this._y) * -1;
        },
        setOrigin: function(e) {
            this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
            this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
        },
        show: function() {
            return "("+this.x+", "+this.y+") ";
        }
    }
    mouse.setOrigin(card);

    let counter = 0;
    let refreshRate = 10;
    let isTimeToUpdate = function() {
        return counter++ % refreshRate === 0;
    };

    let onMouseEnterHandler = function(event) {
        update(event);
    }

    let onMouseLeaveHandler = function() {
        card.style = "";
    }

    let onMouseMoveHandler = function(event) {
        if (isTimeToUpdate()) {
            update(event);
        }
    }

    let update = function(event) {
        mouse.updatePosition(event);
        updateTransformStyle(
            (mouse.y / card.offsetHeight / 2).toFixed(2),
            (mouse.x / card.offsetWidth / 2).toFixed(2)
        )
    }

    let updateTransformStyle = function(x, y) {
        let style = "rotateX("+x+"deg) rotateY("+ y +"deg)";
        card.style.transform = style;
    }

    card.onmousemove = onMouseMoveHandler;
    card.onmouseleave = onMouseLeaveHandler;
    card.onmouseenter = onMouseEnterHandler;
}

document.querySelectorAll(".bento div").forEach(element => {
    cardHover(element)
});