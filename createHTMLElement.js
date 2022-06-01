function criarElemento(tag, props = {}){
    const element = document.createElement(tag);

    Object.entries(props).map(([prop, value]) => element[prop] = value);

    return element;
}
