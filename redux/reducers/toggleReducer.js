export const toggle = (state = {isDark : false}, actions) => {
    const {type, payload} = actions
    switch (type) {
        case "TOGGLE":
            return {...state,  isDark : !state.isDark}
        default:
            return state
    }
}