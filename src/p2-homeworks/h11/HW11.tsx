import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import s from './common/c7-SuperRange/SuperRange.module.css'


export function HW11() {

    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)

    const onChangeRange = (value:number) => {
        return setValue1(value)
    }

    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div className={s.superRangeContainer}>
                <span className={s.span}>{value1}</span>
                <SuperRange
                    onChangeRange={onChangeRange}
                    value={value1}

                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div>
                <span className={s.span}>{value1}</span>
                <SuperDoubleRange
                    min={0}
                    max={100}
                    arrValue={[value1,value2]}
                    setMinVal={setValue1}
                    setMaxVal={setValue2}
                    // сделать так чтоб value1 и value2 изменялось
                />
                <span>{value2}</span>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}
