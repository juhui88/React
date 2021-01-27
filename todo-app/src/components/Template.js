import React from 'react';
import './Template.scss';

const TodoTemplate = ({children}) => {
    return (
        <div className="TodoTemplate">
            <div className="app-title">웹 페이지 구현</div>
            <div className="content">{children}</div>
        </div>
    );
};

export default TodoTemplate;