import React from 'react';
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({bookmarks}) => {
    return (
        <div className='md:w-1/3'>
            <h1>Bookmarked Blogs : {bookmarks.length}</h1>
             {
                bookmarks.map((bookmark, index) =>

                    <Bookmark
                    key={index}
                     bookmark={bookmark}></Bookmark>)
             }
        </div>
    );
};

export default Bookmarks;