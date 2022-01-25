import React, { useState } from 'react'
import Card from '../Card/Card'

const Form = () => {

    const [items,setInput]=useState([])
    const [user,setUser]=useState('')
    const [email,setEmail]=useState('')
    const [mob,setMob]=useState('')
    const [url,setPic]=useState('')

    const submit = (e) => {
        e.preventDefault()
        if(user!==''){
            if(email!==''){
                if(mob!==''){
                    if(url!==''){
                        if(!items.find((item)=>item.user===user)){
                            setInput([...items,{
                                id:items.length,
                                user:user,
                                email:email,
                                mob:mob,
                                url:url
                            }])
                        }
                        else{
                            alert('Invalid Data')
                        }
                    }
                    else{
                        alert('Provide Profile URL')
                    }
                }
                else{
                    alert('Provide Mobile Number')
                }
            }
            else{
                alert('Provide Email Address')
            }
        }
        else{
            alert('Provide Username')
        }
        
        //clear
        setUser('')
        setEmail('')
        setMob('')
        setPic('')
    }

    function delete_card(i){
        let take=[...items]
        take.splice(i,1)
        setInput(take)
    }

    return(
        <div>
            <div className='form'>
                <form>
                    <label>Enter your Name</label><br/>
                    <input type={'text'} placeholder='Enter your Name' id='user' value={user} onChange={(e)=>setUser(e.target.value)}/><br/><br/>
                    <label>Enter your Email Address</label><br/>
                    <input type={'email'} placeholder='Enter your Email Address' id='email' value={email} onChange={(e)=>setEmail(e.target.value)}/><br/><br/>
                    <label>Enter your Mobile Number</label><br/>
                    <input type={'number'} placeholder='Enter your Mobile Number' id='mob' value={mob} onChange={(e)=>setMob(e.target.value)}/><br/><br/>
                    <label>Paste your Profile Picture URL</label><br/>
                    <input type={'url'} placeholder='Profile Picture URL' id='url' value={url} onChange={(e)=>setPic(e.target.value)}/><br/><br/>
                    <button onClick={submit} id='submit'>Create</button>
                </form>
            </div><br/>
            <div>
                {items.map((item,i)=><div key={item.id} id='output'><Card item={item} i={i} removeItem={delete_card}></Card></div>)}
            </div>
            <br/>
        </div>
    )
}

export default Form