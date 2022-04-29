function dragElement(element) {
    const position = {
        x: 0,
        y: 0
    }

    const moving_element = document.getElementById(element.id + "header") || element;
    moving_element.onmousedown = (event) => {
        const e = event || window.event()
        e.preventDefault()

        position.y = e.clientY
        position.x = e.clientX

        document.onmousemove = (event) => {
            const e = event || window.event()
            e.preventDefault()

            element.style.top = (element.offsetTop - (position.y - e.clientY)) + 'px'
            element.style.left = (element.offsetLeft - (position.x - e.clientX)) + 'px'

            position.y = e.clientY
            position.x = e.clientX
        }

        document.onmouseup = () => {
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }
}
