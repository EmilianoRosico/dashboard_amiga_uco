import React from 'react'

export default function SideBarLi(props) {
    return (
        <>
            {props.links.map((link, i) =>
                <li className="nav-item" key={link+i}>
                    <a className="nav-link collapsed" href={link.name}>
                        <i className={link.icon}></i>
                        <span>{link.name}</span>
                    </a>
                </li>
            )}
        </>
    )
}
