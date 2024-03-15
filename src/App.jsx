import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0)

  const addToCart = (blog) => {
    const newBookmark = [...bookmarks, blog]
    setBookmarks(newBookmark)
  };

  const markToRead = (id, time) => {
   setReadingTime(readingTime + time)
   // remove the read blog from bookmark
   const remainingBookmkark = bookmarks.filter(bookmark => bookmark.id !== id)
   setBookmarks(remainingBookmkark)
  }

  return (
    <>
      <Header></Header>
      <div className="md:flex max-w-6xl mx-auto gap-3">
        <Blogs addToCart = {addToCart} markToRead = {markToRead}></Blogs>
        <Bookmarks bookmarks = {bookmarks} readingTime = {readingTime}></Bookmarks>
      </div>
    </>
  );
}

export default App;
