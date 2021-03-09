import { useState, useEffect } from "react"
import {getGifs} from '../helpers/getGifs'
//use - estandar para hooks
//custom hook
export const useFetchGifs = (categoria) => {
    const [state, setstate] = useState({
        //regresa un objeto inicial
        data: [],
        loading: true
    })

    //similar a componentdidmount
    useEffect(()=>{
        getGifs(categoria).then(resp => {
            setstate({
                data:resp,
                loading:false
            })
        });
    },[categoria]);//evalua categoria

    return state; //{ data:[], loading:true }
}

