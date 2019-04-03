const initState = {
	loggedIn: false,
	jwt: null,
	profilePicPreviewBase64: null
}

const rootReducer = (state = initState, action) => {
	console.log('rootReducer update')
	switch(action.type) {
		case 'SET_PROFILE_PIC_PREVIEW': {
			return {
				...state,
				profilePicPreviewBase64: action.base64,
			}
		}


		case 'SIGN_IN': {
			localStorage.setItem('jwt', action.jwt)

			return {
				...state,
				loggedIn: true,
				jwt: action.jwt
			}
		}

		case 'SIGN_OUT': {
			localStorage.removeItem('jwt')

			return {
				...state,
				loggedIn: false,
				jwt: null,
			}
		}
		default: return state
	}
}

export default rootReducer