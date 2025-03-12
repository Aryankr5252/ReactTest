import { useState } from "react";

const Card = ({ image, info, price, name }) => {
    const [truee, setTruee] = useState(false);
    const description = truee ? info : `${info.substring(0, 200)}...`;
    return (
        <div className="card w-3/12 ">
            <img src={image} className="w-full h-[260px] overflow-hidden"></img>
            <div>
                <div className="tour-details">
                    <h4 className="">${price}</h4>
                    <h4 className="font-bold text-violet-700">{name}</h4>
                </div>
                <div className="">
                    {description}
                    <button className="py-2 px-4 bg-slate-700 rounded-md text-white mt-3" onClick={() => setTruee(!truee)} >{truee ? "Show Less" : "Read More"}</button>
                </div>
            </div>

        </div>
    )
}

export default Card