import React from 'react';
import './Template.scss';
import {AiOutlinePicture} from 'react-icons/ai'

const Template = ({children}) => {
    return (
        <div className="Template">
            <div className="app-title"><AiOutlinePicture/></div>
            <div className="content">{children}</div>
        </div>
    );
};

export default Template;