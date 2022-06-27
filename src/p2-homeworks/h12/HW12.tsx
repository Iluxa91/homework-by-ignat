import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import s from './HW12.module.css'
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {changeThemeC} from "./bll/themeReducer";

const themes = ['dark', 'red', 'green', 'blue'];
export type ThemesType = 'dark' | 'red' | 'green' | 'blue'

function HW12() {
    const theme = useSelector<AppStoreType, ThemesType>(state => state.theme); // useSelector
    let dispatch = useDispatch()

    const onChangeCallback = (option:ThemesType) => {
        dispatch(changeThemeC(option))
    }
    // useDispatch, onChangeCallback

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>

            {/*should work (должно работать)*/}
            <SuperSelect
                options={themes}
                value={theme}
                onChangeOption={onChangeCallback}/>
            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>
    );
}

export default HW12;
