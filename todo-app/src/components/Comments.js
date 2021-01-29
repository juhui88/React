import React, {useState} from 'react';
import {FaRegCommentDots} from  'react-icons/fa';
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
        setState([val,...state]);
        setValue('');
      }
    
    function handleOnChange(e) {
        setValue(e.target.value);
      }
      function handleRemove(idx) {
        setState(
          [...state.slice(0,idx),...state.slice(idx+1)]
      );
    }
  
    return (
        <div className='Comments'>
          <div className="gma">
            <input
              placeholder="댓글을 입력하세요"
              value={val}
              onChange={handleOnChange}
              onKeyPress={handleOnKeyPress}
            />
            <button type='submit' onClick={handleOnSubmit}>
              <FaRegCommentDots/>
            </button>
          </div>
          <div className='comment'>
            {state.map((e, idx) => (
            <div key={idx}>
              <span>↳ {e}</span>
              <button onClick={() => handleRemove(idx)}><BsFillTrashFill/></button>
            </div>
          ))}
          </div>
          
        </div>
      );
}

export default Comments;