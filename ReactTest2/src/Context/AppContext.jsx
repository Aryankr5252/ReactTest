import { createContext, useState } from "react"

export const AppContext = createContext();


const AppContextProvider = ({children}) => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts ] = useState([]);
  const [theme, setTheme] = useState(false);

  function removeCard(id){
    const newPosts = posts.filter(post => post.id !==id);
    setPosts(newPosts);
  }

  const val = {
    loading,
    setLoading,
    posts,
    setPosts,
    theme,
    setTheme,
    removeCard
  }

  return (
    <div>
        <AppContext.Provider value={val} >
          {children}
        </AppContext.Provider>
    </div>
  )
}

export default AppContextProvider