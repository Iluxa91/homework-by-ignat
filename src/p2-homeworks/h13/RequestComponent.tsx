import {ChangeEvent, useState} from "react";
import {requestsAPI} from "./RequestsAPI";
import {log} from "util";

export const RequestComponent = () => {
    const [status, setStatus] = useState<boolean>(false)
    const [state, setState] = useState<any>('')


    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.checked)
    }

    const changeStatusRequest = () => {
        requestsAPI.changeStatus(status)
            .then(response =>
                setState(response.data))
            // .then(res=>console.log(res))
            // .catch(reject=>console.error(reject))

            // .catch(error)
        // {
        //     console.log({...error});
        //     console.log(error.response ? error.response.data.errorText : error.message);
        // }
    }
    return (
        <div>

            <button onClick={changeStatusRequest}>send request</button>
            <input type={'checkbox'} onChange={onChangeCallback}/>
            <div>errorText: {JSON.stringify(state.errorText)}</div>
            <div>info: {JSON.stringify(state.info)}</div>
        </div>
    )
}