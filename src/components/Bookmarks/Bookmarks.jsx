import React from 'react';
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className='md:w-1/3 bg-gray-300'>
            <div className='text-center text-3xl font-bold mb-5 text-purple-800'>
                <h3>Mark Reading Time : {readingTime}</h3>
            </div>
            <h1 className='text-center text-3xl font-medium '>Bookmarked Blogs : {bookmarks.length}</h1>
             { 
                bookmarks.map((bookmark, index) =>
                    <Bookmark
                     key={index}
                     bookmark = {bookmark}>      
                     </Bookmark>)
             }
        </div>
    );
};

export default Bookmarks;