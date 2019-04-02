const initState = {
	loggedIn: false,
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
		default: return state
	}
}

export default rootReducer