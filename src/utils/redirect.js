
export function getRedirectPath ({type}) {

	const url = (type === 'Visitor') ? '/achieve' : '/admin';
	return url;
}

export function getAdminRedirectPath(code) {

	const url = (code != 1) ? '/admin' : '/login';
	return url
}
