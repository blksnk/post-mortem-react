const initState = {
	loggedIn: false,
	profilePicPreviewBase64: null,
	isOpened: false,
	isAddOwnerOpened: false,
	property: {
		title: '',
		img: '',
		owners: '',
	},
	owners: [],
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
		default: return state
	}
}

export default rootReducer