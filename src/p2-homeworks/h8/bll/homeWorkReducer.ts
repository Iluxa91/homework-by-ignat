import {UserType} from "../HW8";

type ActionType = { type: 'sort', payload: 'up' | 'down' } | { type: 'check', payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            let sortUp = (x:UserType, y:UserType) => {
                if (x.name > y.name) return 1;
                else if (x.name < y.name) return -1;
                else return 0
            }
            let newArr = [...state].sort(sortUp)

            return action.payload === 'up' ? newArr : newArr.reverse()
        }
        case 'check': {
            // need to fix
            return state.filter(el => el.age >= action.payload)
        }
        default:
            return state
    }
}