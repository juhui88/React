import React, {useState, useCallback} from 'react';
import {MdAdd} from  'react-icons/md';
import {BsFillTrashFill} from 'react-icons/bs'
import './Comments.scss'

function Comments() {
    const [val, setValue] = useState('');
    const [state, setState] = useState([]);

    function handleOnKeyPress(e) {
        if (e.key === 'Enter') {
          handleOnSubmit();
        }
      }
    
    function handleOnSubmit() {
        //setState
        setState([val,...state]);
        //setValue
        setValue('');
      }
    
    function handleOnChange(e) {
        //setValue
        setValue(e.target.value);
      }
      function handleRemove(idx) {
        //setState(spread, slice)
        setState(
          [...state.slice(0,idx),...state.slice(idx+1)]
      );
    }

    return (
        <div className='Comments'>
          <input
            placeholder="댓글을 입력하세요"
            value={val}
            onChange={handleOnChange}
            onKeyPress={handleOnKeyPress}
          />
          <button type='submit' onClick={handleOnSubmit}>
            <MdAdd/>
          </button>
          {state.map((e, idx) => (
            <div className = 'comment' key={idx}>
              <span>{e}</span>
              &nbsp;
              <button onClick={() => handleRemove(idx)}>
                  <BsFillTrashFill/>
                </button> 
            </div>
          ))}
        </div>
      );
}

export default Comments;