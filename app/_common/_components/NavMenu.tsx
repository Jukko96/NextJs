"use client"

import Link from "next/link"
import { useSelectedLayoutSegment } from "next/navigation";
import style from "@/app/(beforeLogin)/page.module.css"

const NavMenu = ({
    text,
    url
}:{
    url:string,
    text:string,

}) =>{
    const segment = useSelectedLayoutSegment();
   
    
    return <nav className={segment&&url.includes(segment)? style.nav_fill:style.nav}>
        <Link href={url}>{text}</Link>
    </nav>
}

export default NavMenu;