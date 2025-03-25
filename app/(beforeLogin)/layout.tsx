import { ReactNode } from "react";
import style from './page.module.css'
import Link from "next/link";

const Before_layout = ({
    children,
    modal
}:{
    children : ReactNode,
    modal : ReactNode,
}) => {

    return <div className={style.container}>
        <section className={style.sidebar}>
          <nav className={style.nav}><Link href={"/home"}>홈</Link></nav>  
          <nav className={style.nav}><Link href={"/signin"}>로그인</Link></nav>  
          <nav className={style.nav}><Link href={"/signup"}>회원가입</Link></nav>  
        </section>
        {children}
        {modal}
    </div>
}

export default Before_layout;