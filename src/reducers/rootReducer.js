const {getJwt, setJwt, delJwt} = require('../helpers.js')
const axios = require('axios')

const initState = {
	loggedIn: false,
	jwt: null,
	profilePicPreviewBase64: null,
	isOpened: false,
	isAddOwnerOpened: false,
	property: {
		title: '',
		img: '',
		owners: '',
	},
	trustedContact: {
		info: {
			firstName: '',
			lastName: '',
			email: '',
			avatar: '',
		},
		pending: false,
	},
	owners: [],
	funeralInputs: {},
}

const rootReducer = (state = initState, action) => {
	console.log('rootReducer update');
	console.log(state);
	switch(action.type) {
		case 'SET_PROFILE_PIC_PREVIEW': {
			console.log('NEW PROFILE PIC PREVIEW', action.base64)
			return {
				...state,
				profilePicPreviewBase64: action.base64,
			}
		}

		case 'UPLOAD_PIC': {
			

			return state

		}

		case 'ADD_TRUSTED': {
			return {
				...state,
				trustedContact: {
					info: {
						firstName: action.info.firstName,
						lastName: action.info.lastName,
						email: action.info.email,
						avatar: action.info.avatar,
					}
				}
			}
		}

		case 'SET_TRUSTED_PENDING': {
			console.log('reducer set pending')
			return {
				...state,
				trustedContact: {
					...state.trustedContact,
					pending: true,
				}
			}
		}

		case 'SIGN_IN': {
			setJwt(action.jwt)

			return {
				...state,
				loggedIn: true,
				jwt: action.jwt
			}
		}

		case 'SIGN_OUT': {
			delJwt()

			return {
				...state,
				loggedIn: false,
				jwt: null,
			}	
		}		

		case 'IS_OPENED': {
			const toogle = !state.isOpened
			console.log(toogle, 'opened')
			return {
				...state,
				isOpened: toogle
			}
		}
		case 'IS_ADD_OWNER_OPENED': {
			const toogle = !state.isAddOwnerOpened
			console.log(toogle, 'owner')
			return {
				...state,
				isAddOwnerOpened: toogle
			}
		}
		case 'SET_FUNERAL_INPUTS': {
			return {
				...state,
				funeralInputs: action.funeralInputs,
			}
		}
		default: return state
	}
}

export default rootReducer