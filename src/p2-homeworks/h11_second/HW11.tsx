import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import s from './H11.module.css'


export function HW11_second() {

    const [value1, setValue1] = useState(0)
    const [value, setValue] = useState<number[]>([0, 100])

    const onChangeRange = (value1: number) => {
        if(value1<value[1]){
            setValue1(value1)
            setValue(prev => [value1, prev[1]])
        }
    }
    const onChangeRange2 = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
        // @ts-ignore
        setValue1(newValue[0])
    };

    return (
        <div>
            <hr/>
            homeworks 11
            <div className={s.mainBlock}>
                {/*should work (должно работать)*/}
                <div className={s.container}>
                    <span className={s.span}>{value1}</span>
                    <SuperRange
                        onChangeRange={onChangeRange}
                        value={value1}

                        // сделать так чтоб value1 изменялось
                    />
                </div>

                <div className={s.container}>
                    <span className={s.span}>{value1}</span>
                    <SuperDoubleRange
                        min={0}
                        max={100}
                        step={1}
                        value={value}
                        onChangeRange2={onChangeRange2}

                        // сделать так чтоб value1 и value2 изменялось
                    />
                    <span className={s.span}>{value[1]}</span>
                </div>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}
