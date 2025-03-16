import { ReactNode } from "react";

const Home_Layout = ({children}: {children:ReactNode}) =>{
    return <div>
        home layout
        {/* 자동 리렌더링을 시키고 싶다면 template를 사용 */}
        {children}
    </div>
}

export default Home_Layout;