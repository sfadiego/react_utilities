import React from 'react'

export const GifGridItem = ({ id, url, title }) => {
    // console.log(img)
    return (
        <div className="card animate__animated animate__fadeIn" key={id}>
            <img alt={title} src={url}></img>
            <p>{title}</p>
        </div>
    )
}
