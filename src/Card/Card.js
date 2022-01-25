import React from 'react'

const Card = (props,i) => {
    const item=props.item
    return(
        <div>
            <div className='card'>
                <div className='img'>
                    <img src={item.url}></img>
                </div><br/>
                <div className='content'>
                    <div id='username'>{item.user}</div><br/>
                    <div id='emailaddress'>{item.email}</div><br/>
                    <div id='mobile'>{item.mob}</div><br/>
                </div>
                <button onClick={()=>props.removeItem(i)}>Delete</button>
            </div>
        </div>
    )
}

export default Card