import React from 'react'
import {Slider} from "@mui/material";
import s from './SuperDoubleRange.module.css'


type SuperDoubleRangePropsType = {
    onChangeRange2: (event: Event, newValue: number | number[]) => void
    min: number
    max: number
    step: number
    value:number[]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange2, min, max, step,value
        // min, max, step, disable, ...
    }
) => {


    return (
        <div className={s.container}>
            <Slider
                min={min}
                max={max}
                step={step}
                valueLabelDisplay={'auto'}
                value={value}
                onChange={onChangeRange2}

            />
        </div>

    )
}

export default SuperDoubleRange
