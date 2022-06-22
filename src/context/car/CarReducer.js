const reducer = (globalState, action) => {
	switch (action.type) {
		case 'GUARDA_CARRITO':
            
			return {...globalState, car: [...globalState.car, action.payload]}
			
		default:
			return globalState
	}
}

export default reducer