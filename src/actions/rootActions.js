const SET_PROFILE_PIC_PREVIEW = (base64) => ({
	type: 'SET_PROFILE_PIC_PREVIEW',
	base64: base64,
})

const IS_OPENED = () => ({
	type: 'IS_OPENED',
})

const IS_ADD_OWNER_OPENED = () => ({
	type: 'IS_ADD_OWNER_OPENED',
})

const SET_FUNERAL_INPUTS = (funeralInputs) => ({
	type: 'SET_FUNERAL_INPUTS',
	funeralInputs: funeralInputs,
})

module.exports = {
	SET_PROFILE_PIC_PREVIEW,
	IS_OPENED,
	IS_ADD_OWNER_OPENED,
	SET_FUNERAL_INPUTS,
}