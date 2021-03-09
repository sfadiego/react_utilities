import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import { useCounter } from '../../hooks/useCounter';

export const MultipleCustomHooks = () => {
    // const handlefetch =()=>{
    // }
    const { counter, incrementar } = useCounter(1);
    const { loading, data } = useFetch(`quotes/${counter}`);
    const { quote, author } = !!data && data[0];

    return (
        <div>
            <h3>Custom hooks</h3>
            <h4>Breakingbad Quotes</h4>
            <hr></hr>
            {
                loading
                    ?
                    (
                        <div className="alert alert-info text-center">
                            Loading ...
                        </div>
                    )
                    :
                    <blockquote className="blockquote text-right">
                        <p className="">{quote}</p>
                        <footer className="blockquote-footer">{author}</footer>
                    </blockquote>
            }

            <button className="btn btn-primary " onClick={() => incrementar()}> + </button>

        </div>
    )
}
