const initState = {
	loggedIn: false,
	profilePicPreviewBase64: null,
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