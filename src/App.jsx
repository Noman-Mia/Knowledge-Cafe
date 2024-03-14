import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const addToCart = (blog) => {
    const newBookmark = [...bookmarks, blog]
    setBookmarks(newBookmark)
    console.log(newBookmark);
  };

  return (
    <>
      <Header></Header>
      <div className="md:flex container mx-auto">
        <Blogs addToCart={addToCart}></Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  );
}

export default App;
