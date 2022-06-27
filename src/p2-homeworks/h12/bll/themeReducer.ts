import {ThemesType} from "../HW12";

const initState = 'dark';

export const themeReducer = (state:ThemesType = initState, action: ChangeThemeAT): ThemesType => { // fix any
    switch (action.type) {
        case 'CHANGE_THEME':
            return action.theme;
        default:
            return state;
    }
};

export const changeThemeC = (theme: ThemesType): ChangeThemeAT => ({type: 'CHANGE_THEME', theme} as const); // fix any

type ChangeThemeAT = {
    type: 'CHANGE_THEME'
    theme: ThemesType
}