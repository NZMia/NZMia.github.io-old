
export function getRedirectPath ({type}) {

	const url = (type === 'Visitor') ? '/achieve' : '/admin';
	return url;
}
