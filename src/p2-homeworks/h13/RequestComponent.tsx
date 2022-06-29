import {ChangeEvent, useEffect, useState} from "react";
import axios from "axios";
import {requestsAPI} from "./RequestsAPI";

export const RequestComponent = () => {
    const [status, setStatus] = useState<boolean>(false)
    const [state, setState] = useState<any>('')



    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.checked)
    }

    const changeStatusRequest = () => {
        requestsAPI.changeStatus(status)
            .then (res=>
                setState(res.data))
    }
    return (
        <div>
            <div>{JSON.stringify(state)}</div>
            <button onClick={changeStatusRequest}>change status </button>
            <input type={'checkbox'} checked={status} onChange={onChangeCallback}/>
        </div>
    )
}