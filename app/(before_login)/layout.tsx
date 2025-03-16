import { ReactNode } from "react";

const Before_layout = ({
    children,
    modal
}:{
    children : ReactNode,
    modal : ReactNode,
}) => {

    return <div>
        로그인 페이지
        {children}
        {modal}
    </div>
}

export default Before_layout;