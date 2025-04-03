import React, { useContext, useEffect } from 'react';
import { AppContext } from '../Context/AppContext';
import { MdDelete } from "react-icons/md";

const Home = () => {
    const { posts, loading, theme,removeCard } = useContext(AppContext);


    return (
        <div className={` p-4 ${theme?"bg-gray-900 text-white":"bg-white"}`}>
            <h1 className="text-3xl font-bold text-center mb-4">Posts</h1>

            {loading ? <p className="text-center">Loading...</p> : (
                <div className="grid grid-cols-1 grid-cols-3 gap-6 px-4">
                {posts.map((post) => (
                  <div 
                    key={post.id} 
                    className={`${theme?"bg-slate-600 text-slate-100":"bg-slate-100 text-gray-700"} border border-gray-200 p-5 rounded-xl shadow-md transition-transform duration-300 hover:scale-95 hover:shadow-lg`}
                  >

                    <h2 className="text-xl font-bold underline mb-2">{post.title}</h2>
                    
                    <p className=" mb-4">{post.body}</p>

                    <div className='flex justify-between'>
                    <p className="text-sm ">Post_ID:- {post.id}</p>
                    <button className='text-xl' onClick={() => removeCard(post.id)}><MdDelete/></button>
                    </div>

                  </div>
                ))}
              </div>
            )}
        </div>
    );
}

export default Home;