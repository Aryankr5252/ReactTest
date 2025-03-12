import { Link, NavLink} from "react-router-dom"

const NavBar = () => {
    const list = [
        {
            page: "Home",
            links:'/'
        },
        {
            page: "Dasboard",
            links:'/Dasboard'
        },
        
        
    ]
  return (
    <nav className="flex justify-between px-5 py-4 bg-gray-400 rounded-lg m-2 pr-10 items-center">
        <div className="text-2xl hover:text-white hover:bg-violet-500 p-2">
            <Link to={list[0].links}>Logo</Link>
        </div>


        <ul className="flex gap-10 text-2xl  ">
            {
                list.map((list,key) =>(
                    <li key ={key}><Link to={list.links} className="text-black hover:text-white hover:bg-violet-500 p-2">{list.page}</Link></li>
                ))
            }
        </ul>

    </nav>
  )
}

export default NavBar