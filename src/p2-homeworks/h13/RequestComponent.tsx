import {ChangeEvent, useState} from "react";
import {requestsAPI} from "./RequestsAPI";

export const RequestComponent = () => {
    const [status, setStatus] = useState<boolean>(false)
    const [state, setState] = useState<any>('')
    const [error, setError] = useState<any>('')

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.checked)
    }

    const changeStatusRequest = () => {
        requestsAPI.changeStatus(status)
            .then(response => {
                console.log(response)
                setState(response.data)
                setError('')
            })
            .catch((err) => {
                    console.log(err)
                    setState('')
                    setError(err.response.data)
                }
            )
    }
    return (
        <div>
            <button onClick={changeStatusRequest}>send request</button>
            <input type={'checkbox'} value={state} onChange={onChangeCallback}/>
            <div>errorText: {JSON.stringify(state.errorText ? state.errorText : error.errorText)}</div>
            <div>info: {JSON.stringify(state.info? state.info:error.info)}</div>
        </div>
    )
}