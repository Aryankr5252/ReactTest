import { Link, NavLink} from "react-router-dom"
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
const NavBar = () => {
    const {theme, setTheme} = useContext(AppContext)

    const list = [
        {
            page: "Home",
            links:'/'
        },
        {
            page: "Create_Note",
            links:'/Notes'
        },
        
        
    ]
  return (
    <nav className={`flex justify-between px-5 py-4  ${theme?'bg-gray-700 text-white':'bg-gray-400 text-black'}  pr-10 items-center`}>
        <div className="text-2xl hover:text-white hover:bg-violet-500 p-2">
            <Link to={list[0].links}>Logo</Link>
        </div>


        <ul className="flex gap-10 text-2xl  ">
            {
                list.map((list,key) =>(
                    <li key ={key}><Link to={list.links} className=" hover:text-white hover:bg-violet-500 p-2">{list.page}</Link></li>
                ))
            }
            
            <button onClick={()=> setTheme(!theme)} >{theme?<MdLightMode />:<MdDarkMode />}</button>
        </ul>

    </nav>
  )
}

export default NavBar