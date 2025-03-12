import data from "../data";
import Card from "./Card";

const Dasboard = () => {
    
    
  return (
    <div className="p-5 flex flex-wrap gap-5 justify-evenly">
        {/* <button onClick={handler}>sas</button> */}
        {
            data.map((data, key) => (
                <Card {...data} key= {key} />
            ))
        }
    </div>
  )
}

export default Dasboard
