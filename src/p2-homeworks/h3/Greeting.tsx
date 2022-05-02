import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>)=>void // need to fix any
    addUser: ()=>void // need to fix any
    error: boolean // need to fix any
    totalUsers: number // need to fix any
    onKeyPressHandler: (event: KeyboardEvent<HTMLInputElement>)=>void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error,onKeyPressHandler, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error? s.error : '' // need to fix with (?:)

    return (
        <div>
            <input value={name} onChange={setNameCallback} onKeyPress={onKeyPressHandler} className={inputClass}/>
            <span>{error}</span>
            <button onClick={addUser}>add</button>
            <span className={s.totalUser}>{totalUsers}</span>
            {error && <div className={s.errorMessage}>Title is required</div>}
        </div>
    )
}

export default Greeting
