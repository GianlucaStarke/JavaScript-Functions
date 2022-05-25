function createHTMLElement({
    tag,
    id,
    inner_text,
    classes
}){
    const idIsString = typeof id === 'string';
    const innerTextIsString = typeof inner_text === 'string';
    const classesIsArray = Array.isArray(classes);

    const element = document.createElement(tag);

    if(idIsString){
        element.id = id;
    }
    
    if(innerTextIsString){
        element.innerText = inner_text;
    }
    
    if(classesIsArray){
        classes.map(
            classe => (
                element.classList.add(
                    classe
                )
            )
        );
    }

    return element;
}
