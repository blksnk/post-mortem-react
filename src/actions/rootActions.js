const SET_PROFILE_PIC_PREVIEW = (base64) => ({
	type: 'SET_PROFILE_PIC_PREVIEW',
	base64: base64,
})

const SET_FUNERAL_INPUTS = (funeralInputs) => ({
	type: 'SET_FUNERAL_INPUTS',
	funeralInputs: funeralInputs,
})

module.exports = {
	SET_PROFILE_PIC_PREVIEW,
	SET_FUNERAL_INPUTS,
}