import React from "react";
import { Link } from "react-router-dom";
const Categories = () => {
    const cat = [
        {
            name: "Comedy",
            color: "bg-purple-200",
            to: "/categories/Comedy",
            img: "https://w7.pngwing.com/pngs/237/319/png-transparent-humour-comedy-comedian-happy-customers-photography-smiley-internet-radio.png",
        
        },

        {
            name: "Business",
            color: "bg-green-200",
            to: "/categories/Business",
            img: "https://w7.pngwing.com/pngs/660/463/png-transparent-business-process-career-business-development-business-continuity-business-service-people-public-relations.png",
        },


        {
            name: "Education",
            color: "bg-red-200",
            to: "/categories/Education",
            img: "https://static.vecteezy.com/system/resources/thumbnails/009/584/446/small_2x/3d-illustration-toga-hat-and-books-for-education-png.png",
        },

        {
            name: "Hobbies",
            color: "bg-zinc-200",
            to: "/categories/zinc",
            img: "https://e7.pngegg.com/pngimages/976/733/png-clipart-computer-icons-hobby-others-miscellaneous-text.png",
        },

        {
            name: "Government",
            color: "bg-indigo-200",
            to: "/categories/Government",
            img: "https://i.pinimg.com/originals/37/42/bc/3742bcd3b4b5d471dae27a60bd4b5f07.png",
        },

    ];





    return (
        <div className="h-screen lg:h-[78vh]">
            <div className="px-4 lg:px-12 py-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {cat.map((items, i) => (
                    <Link to={items.to} key={i} className={`rounded px-8 py-4 text-xl font-semibold ${items.color} hover:scale-105 shadow-xl transition-all duration-300 relative h-[22vh] overflow-hidden `}
                    >
                        <div>{items.name}</div>
                        <div className="w-[100%] flex items-center justify-end absolute -bottom-2 -right-2">

                            <img src={items.img} alt="category" className="rounded rotate-11 h-[15vh] md:h-[17vh] lg:h-[18vh]" 
                            />

                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Categories;