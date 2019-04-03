const initState = {
	loggedIn: false,
	jwt: null,
	profilePicPreviewBase64: null
	funeralInputs: {},
}

const rootReducer = (state = initState, action) => {
	console.log('rootReducer update');
	console.log(state);
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