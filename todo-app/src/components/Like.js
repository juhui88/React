import React, {useState} from 'react'
import {BsHeartHalf} from 'react-icons/bs'
import './Like.scss'

const Like = () => {
    const [num, setNum] = useState(0);

    function add() {
        setNum(prevNum => prevNum + 1)
    }
    return (
        <div className = 'Like'>
            <button onClick={add}><BsHeartHalf/></button>
            {num}명이 좋아합니다.
        </div>
    )
}

export default Like;