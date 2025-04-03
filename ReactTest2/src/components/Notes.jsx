import React, { useContext, useState } from 'react'
import { AppContext } from '../Context/AppContext';
import {  toast } from 'react-toastify';

const Notes = () => {
    const {posts, setPosts, theme} = useContext(AppContext);
    

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    

   function submitHandler(e){
    e.preventDefault();

    const newPost = {
        id: posts.length + 1,
        title,
        body
    };
    
    setPosts(prevPosts => [...prevPosts, newPost]);
    console.log(posts)
    setTitle('');
    setBody('');
    toast.success("Your Card is Added");
   }


    return (
      <div className={`flex justify-center items-center min-h-screen ${theme?"bg-black":"bg-gray-100"}`}>
        <div className={`${theme?"bg-slate-600 text-white":"bg-white text-gray-700"} p-6 rounded-lg shadow-md w-full max-w-md`}>
          <h2 className="text-2xl font-bold  text-center mb-6">
            Create a Post
          </h2>
          
          <form className="space-y-4" onSubmit={submitHandler}>
            
            <div>
              <label className="block  font-medium">Title</label>
              <input type="text" placeholder="Enter post title"
                className="w-full text-black mt-1 p-3 border rounded-lg "
                onChange = {(e) => {setTitle(e.target.value)}}
              />
            </div>
  
            
            <div>
              <label className="block  font-medium">Body</label>
              <textarea 
                placeholder="Enter post content"
                className="w-full text-black mt-1 p-3 border rounded-lg "
                onChange = {(e) => {setBody(e.target.value)}}
              />
            </div>
  
            
            <button 
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold text-lg "
            //   onSubmit={() => {setArr(setTitle,setBody);setposts(setArr);console.log(posts)}}
            
            >
              Submit Post
            </button>
          </form>
        </div>
      </div>
    );
  }
  

export default Notes