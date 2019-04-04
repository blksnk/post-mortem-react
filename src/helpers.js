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

const addTrusted = async ({firstName, lastName, email}) => {
	console.log(jwt)
	try {
		const response = await axios.post('http://localhost:5000/trusted-contact/add', {
			firstName,
			lastName,
			email
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

export {
	getJwt,
	setJwt,
	delJwt,
	uploadImage,
	updateUserAvatar,
	setUserAvatar,
	addTrusted,
}