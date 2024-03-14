import React from 'react';

const Bookmark = ({bookmark}) => {
   const {title}=bookmark
    return (
        <div>
            <h1 className='text-2xl'>{title}</h1>
        </div>
    );
};

export default Bookmark;    