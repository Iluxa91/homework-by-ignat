const initState = {
    isLoading: false
}
export type StatePropsType = {
    isLoading:boolean
}
type LoadingAT = {
    type: 'CHANGE-ISLOADING-STATUS'
    isLoading:boolean
}
export const loadingReducer = (state = initState, action: LoadingAT): StatePropsType => { // fix any
    switch (action.type) {
        case 'CHANGE-ISLOADING-STATUS': {
            return {...state,isLoading:action.isLoading}
        }
        default:
            return state
    }
}

export const loadingAC = (isLoading:boolean): LoadingAT => ({
    type:'CHANGE-ISLOADING-STATUS',isLoading
}) // fix any