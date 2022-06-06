function createHTMLElement(tag, props = {}){
    const element = document.createElement(tag);

    Object.entries(props).map(([prop, value]) => element[prop] = value);
	
	Array.isArray(props.classes)
		&& props.classes.map(classe => element.classList.add(classe));

	Array.isArray(props.children)
		&& props.children.map(child => element.append(child));

    return element;
}

// Example:

const myButton = () => createHTMLElement('button', {
	id: 'button',
	type: 'button',
	innerText: 'My Button',
	classes: [
		'red-button'
	],
	onclick: function(e){
		// do something...
	}
});

const myDiv = () => createHTMLElement('div', {
	classes: [
		'margin-small',
		'width-1-2'
	],
	children: [
		myButton()
	]
});

some_HTML_element.append(
	myDiv()
);
