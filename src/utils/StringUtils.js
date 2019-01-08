export const toPhraseUpperCase = string => {
	let formatted = string.split(/(?=[A-Z])/).join(" ");
	return firstLetterUpperCase(formatted);
};

export const firstLetterUpperCase = string => {
	return string.charAt(0).toUpperCase() + string.slice(1)
};

export const firstLetterLowerCase = string => {
	return string.charAt(0).toLowerCase() + string.slice(1)
};

export const removeSpaces = string => {
	string = string.replace(/\s/g, '');
	return firstLetterLowerCase(string);
};