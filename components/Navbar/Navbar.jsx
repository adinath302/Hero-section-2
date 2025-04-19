import React from 'react'

const NavLink = [
    {
        id: 1,
        name: "Home",
        link: "/"
    },
    {
        id: 2,
        name: "Features",
        link: "#"
    },
    {
        id: 3,
        name: "Shop",
        link: "#"
    },
    {
        id: 4,
        name: "About us",
        link: "#"
    },
    {
        id: 5,
        name: "Contact",
        link: "#"
    },
]
const Navbar = () => {
    return (
        <>
            <div className='container'>
                {/* Logo section */}
                <div>
                    <img src="" alt="" />
                </div>
                {/* Link section */}
                <div>
                    <ul>
                        {
                            NavLink.map((item) => {
                                return (
                                    <li key={item.id}>
                                        <a href={item.link}>{item.title}</a>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
                {/* Button section */}
                <div>
                    <button></button>
                </div>
            </div>
        </>
    )
}

export default Navbar