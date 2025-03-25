import { ReactNode } from "react";
import style from './page.module.css'
import NavMenu from "../_common/_components/NavMenu";

const Before_layout = ({
    children,
    modal
}:{
    children : ReactNode,
    modal : ReactNode,
}) => {

    return <div className={style.container}>
        <section className={style.sidebar}>
          <NavMenu url={"/home"} text={"홈"}/>
          <NavMenu url={"/signin"} text={"로그인"}/>
          <NavMenu url={"/signup"} text={"회원가입"}/>
        </section>
        {children}
        {modal}
    </div>
}

export default Before_layout;