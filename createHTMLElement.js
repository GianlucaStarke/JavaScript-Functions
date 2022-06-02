function createHTMLElement(tag, props = {}){
    const element = document.createElement(tag);

    Object.entries(props).map(([prop, value]) => element[prop] = value);
	
	Array.isArray(props.classes)
		&& props.classes.map(classe => element.classList.add(classe));

	Array.isArray(props.children)
		&& props.children.map(child => element.append(child));

    return element;
}
