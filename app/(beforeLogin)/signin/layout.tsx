import { ReactNode } from "react";

const Before_layout = ({
    children,
}:{
    children : ReactNode,
}) => {

    return <div >
        로그인 레이아웃
        {children}
    </div>
}

export default Before_layout;