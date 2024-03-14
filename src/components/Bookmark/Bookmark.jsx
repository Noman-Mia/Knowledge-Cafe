import React from 'react';

const Bookmark = ({bookmark}) => {
    return (     
        <div className='bg-slate-200 p-5 m-4 rounded-xl'>
            <h1 className='text-2xl'>{bookmark?.title}</h1>
        </div>
    );
};

export default Bookmark;    