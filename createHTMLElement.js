function createHTMLElement(tag, attr = {}){
    const element = document.createElement(tag);
    
    Object.entries(attr).map(([attr, value]) => element.setAttribute(attr, value));
    element.innerText = attr.innerText ? attr.innerText : '';
    
    return element;
}
