const SET_PROFILE_PIC_PREVIEW = (base64) => ({
	type: 'SET_PROFILE_PIC_PREVIEW',
	base64: base64,
})

const SIGN_IN = (jwt) => ({
	type: 'SIGN_IN',
	jwt
})

const SIGN_OUT = () => ({
	type: 'SIGN_OUT',
})	

const SET_FUNERAL_INPUTS = (funeralInputs) => ({
	type: 'SET_FUNERAL_INPUTS',
	funeralInputs: funeralInputs,
})

module.exports = {
	SET_PROFILE_PIC_PREVIEW,
	SIGN_IN,
	SIGN_OUT,
	SET_FUNERAL_INPUTS,
}