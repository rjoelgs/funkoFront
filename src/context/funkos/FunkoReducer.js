const reducer = (globalState, action) => {
	switch (action.type) {
		case 'OBTENER_FUNKOS':
			return {
				...globalState,
				funkos: action.payload,
			}
			case 'OBTENER_FUNKO':
				return {
					...globalState,
					funko: action.payload,
				}
	
		
		default:
			return globalState
	}
	


}

export default reducer