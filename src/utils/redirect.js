
export function getRedirectPath ({type}) {

	const url = (type === 'Visitor') ? '/profile' : '/admin';
	return url;
}
