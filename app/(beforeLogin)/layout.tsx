"use client"
import { ReactNode } from "react";
import style from './page.module.css'
import NavMenu from "../_common/_components/NavMenu";
import { usePathname } from "next/navigation";

const Before_layout = ({
    children,
    modal
}:{
    children : ReactNode,
    modal : ReactNode,
}) => {
    const path_name = usePathname();

    return <div className={style.container}>
        <section className={style.sidebar}>
          <NavMenu url={"/home"} text={"홈"}/>
          <NavMenu url={"/signin"} text={"로그인"}/>
          <NavMenu url={"/signup"} text={"회원가입"}/>
          {path_name !== "/extra" && (
            <NavMenu url="/extra" text="추가 메뉴" />
            )}

        </section>
        {children}
        {modal}
    </div>
}

export default Before_layout;