/*
 * An easier way to create HTML elements with JS vanilla
 */
function createHTMLElement(tag, props = {}){
    const element = document.createElement(tag);

    Object.entries(props).map(([prop, value]) => element[prop] = value);
	
	Array.isArray(props.classes)
		&& props.classes.map(classe => element.classList.add(classe));

	Array.isArray(props.appendChildren)
		&& props.appendChildren.map(child => element.append(child));
	
	Array.isArray(props.prependChildren)
		&& props.prependChildren.map(child => element.prepend(child));

    return element;
}

// Example:

const icon = createHTMLElement('i', {
	classes: [
		'icon-class'
	]
});

const myButton = () => createHTMLElement('button', {
	id: 'button',
	type: 'button',
	innerText: 'My Button',
	classes: [
		'red-button'
	],
	prependChildren: [
		icon()
	],
	onclick: e => {
		// do something...
	}
});

const myDiv = () => createHTMLElement('div', {
	classes: [
		'margin-small',
		'width-1-2'
	],
	appendChildren: [
		myButton()
	]
});

some_HTML_element.append(
	myDiv()
);
