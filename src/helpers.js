import axios from 'axios'

const getJwt = () => (localStorage.getItem('JWT'))

const jwt = getJwt()

const setJwt = (jwt) => {
	localStorage.setItem('JWT', jwt)
}

const delJwt = () => {
	localStorage.removeItem('JWT')
}

const setUserAvatar = (url) => {
	localStorage.setItem('avatar', url)
}

const uploadImage = async image => {
	console.log('uploadImage')
	try {
		console.log(jwt, image)
		const response = await axios.post('http://localhost:5000/image', {img: image}, {
		headers: {
			'Authorization': `Bearer ${jwt}`
		}})
		return response.data.secure_url
	}
	catch(e) {
		console.log(e)
	}
}

const updateUserAvatar = async (url) => {
	setUserAvatar(url)
	try {
		const response = await axios.post('http://localhost:5000/user/update', {avatar: url}, {
		headers: {
			'authorization': `Bearer ${jwt}`
		}})

		console.log(response.data)
		return response.data

	}
	catch(e) {
		console.log(e)
	}
}

const addTrusted = async ({firstName, lastName, email, avatar}) => {
	console.log(avatar)
	try {
		const response = await axios.post('http://localhost:5000/trusted-contact/add', {
			firstName,
			lastName,
			email,
			avatar
		}, {
		headers: {
			'authorization': `Bearer ${jwt}`
		}})
		return response.data
	}
	catch(e) {
		console.log(e)
	}
}

const storeTrusted = (firstName, lastName, email, avatar) => {
	localStorage.setItem('trustedContactFirstName', firstName)
	localStorage.setItem('trustedContactLastName', lastName)
	localStorage.setItem('trustedContactEmail', email)
	localStorage.setItem('trustedContactAvatar', avatar)
}

const getStoredTrusted = () => {
	const firstName = localStorage.getItem('trustedContactFirstName'),
				lastName = localStorage.getItem('trustedContactLastName'),
				email = localStorage.getItem('trustedContactEmail'),
				avatar = localStorage.getItem('trustedContactAvatar'),
				pending = localStorage.getItem('trustedContactPending')
	return {
		firstName,
		lastName,
		email,
		avatar,
		pending
	}
}

const delTrusted = () => {
	localStorage.removeItem('trustedContactFirstName')
	localStorage.removeItem('trustedContactLastName')
	localStorage.removeItem('trustedContactEmail')
	localStorage.removeItem('trustedContactAvatar')

	updateStoredTrustedPending(false)
}

const updateStoredTrustedPending = (status) => {
	localStorage.setItem('trustedContactPending', status)
}

export {
	getJwt,
	setJwt,
	delJwt,
	uploadImage,
	updateUserAvatar,
	setUserAvatar,
	addTrusted,
	storeTrusted,
	getStoredTrusted,
	updateStoredTrustedPending,
	delTrusted,
}