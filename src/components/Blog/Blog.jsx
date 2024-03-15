import PropTypes from 'prop-types';
import { FaBookmark } from "react-icons/fa";
const Blog = ({blog, addToCart, markToRead}) => {
const {id, title, cover, author, author_img, posted_date, reading_time, hashtags} = blog;
console.log(author_img);
    return (
        <div className='mb-16'>
            <img className='w-full' src={cover} alt={`cover picture of the title ${title}`} />
            <div className='flex justify-between mb-5'>
                <div className='flex gap-6 mt-5'>
                    <div>
                        <img className='w-14' src={author_img} alt="" />
                    </div>
                    <div>
                       <h1>{author}</h1>
                       <h2>{posted_date}</h2>
                    </div>
                </div>

                <div className='mt-5'>
                   <span>{reading_time} mim read</span>
                   <button onClick={() => addToCart(blog)}  className='ml-2'>
                    <FaBookmark></FaBookmark>
                    </button>
                </div>
            </div>
            <h1 className='text-4xl font-bold'>{title}</h1>
            <p className='mt-5'>
                {
                    hashtags.map((hash,index)=> <span key={index}><a href=""> #{hashtags}</a></span>)
                }
            </p>
            <button onClick={() => markToRead(id, reading_time)} className='text-purple-600 underline font-semibold'>mark as read</button>  
        </div>
    );
};

Blog.propTypes = {
    blog:PropTypes.object.isRequired
}
export default Blog;