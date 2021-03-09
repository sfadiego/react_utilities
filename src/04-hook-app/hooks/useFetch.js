import { useState, useEffect, useRef } from "react"
const endpoint = "https://www.breakingbadapi.com/api/";

export const useFetch = (url) => {
    // useRef
    const isMounted = useRef(true);
    //desmontar componente
    useEffect(() => {
        
        return () => {
            // cleanup
            //sin esta referencia da error por que no se desmontaba
            isMounted.current = false
        }
    }, [])
    const [state, setstate] = useState({
        data: null,
        loading: true,
        error: null
    })
    
    useEffect(() => {
        fetch(`${endpoint}${url}`)
            .then(resp => resp.json())
            .then(data => {
                setTimeout(() => {
                    if(isMounted.current){
                        setstate({
                            ...state,
                            data: data,
                            loading: false
                        });
                    }else{
                        console.log("setstate no se llamo")
                    }
                }, 3000);
            })
    }, [url])

    return state
}
