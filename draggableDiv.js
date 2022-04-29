function dragElement(element) {
    const position = {
        HorizontalMoviment: 0,
        VerticalMoviment: 0,
        clientX: 0,
        clientY: 0
    }

    const moving_element = document.getElementById(element.id + "header") || element;
    moving_element.onmousedown = (event) => {
        const e = event || window.event()
        e.preventDefault()

        position.clientX = e.clientX
        position.clientY = e.clientY

        document.onmousemove = (event) => {
            const e = event || window.event()
            e.preventDefault()

            position.HorizontalMoviment = position.clientX - e.clientX
            position.VerticalMoviment = position.clientY - e.clientY
            position.clientX = e.clientX
            position.clientY = e.clientY

            element.style.top = (element.offsetTop - position.VerticalMoviment) + 'px'
            element.style.left = (element.offsetLeft - position.HorizontalMoviment) + 'px'
        }

        document.onmouseup = () => {
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }
}
