function dragElement(elmnt) {
    const position = {
        HorizontalMoviment: 0,
        VerticalMoviment: 0,
        clientX: 0,
        clientY: 0
    }

    const moving_element = document.getElementById(elmnt.id + "header") || elmnt;
    moving_element.onmousedown = (event) => {
        e = event || window.event()
        e.preventDefault()

        position.clientX = e.clientX
        position.clientY = e.clientY

        document.onmousemove = (event) => {
            e = event || window.event()
            e.preventDefault()

            position.HorizontalMoviment = position.clientX - e.clientX
            position.VerticalMoviment = position.clientY - e.clientY
            position.clientX = e.clientX
            position.clientY = e.clientY

            elmnt.style.top = (elmnt.offsetTop - position.VerticalMoviment) + 'px'
            elmnt.style.left = (elmnt.offsetLeft - position.HorizontalMoviment) + 'px'
        }

        document.onmouseup = () => {
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }
}
