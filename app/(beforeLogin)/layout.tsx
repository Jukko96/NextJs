import { ReactNode } from "react";
import style from './page.module.css'

const Before_layout = ({
    children,
    modal
}:{
    children : ReactNode,
    modal : ReactNode,
}) => {

    return <div className={style.container}>
        메인 페이지 레이아웃
        {children}
        {modal}
    </div>
}

export default Before_layout;