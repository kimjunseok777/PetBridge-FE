import {createBrowserRouter} from "react-router-dom";
import RootLayout from "../layouts/layout";
import SignUp from "../pages/Certify-page/sign-up";
import SignIn from "../pages/Certify-page/sign-in";
import SignUpComplete from "../pages/Certify-page/sign-up-complete";
import ListRead from "../pages/list-read-page/listRead";
import ListCreate from "../pages/list-create-page/listCreate";
import ListSearch from "../pages/list-search-page/listSearch";



export const router = createBrowserRouter([
    {
        element: <RootLayout/>,
        
        /* RootLayout의 자식 컴포넌트를 Outlet으로 보여주는 것이다
        --> 상단에 뒤로가기 바나 네브바가 페이지마다 고정되기 때문에 만들어준 것이다 */
        
        children: [
            {
                // 로그인 페이지
                path: "/",
                element: <SignIn/>
            },
            {
                // 회원가입 페이지
                path: "/sign-up",
                element: <SignUp/>
            },
            {
                // 회원가입 완료 페이지
                path: "/sign-up-complete",
                element: <SignUpComplete/>
            },
            //--------------------------------------------------------------------
            {
                // 분양글 조회 페이지 (리스트 조회 페이지)
                path: "/list-read",
                element: <ListRead/>
            },
            {
                // 분양글 검색 페이지 (리스트 검색 페이지)
                path: "/list-search",
                element: <ListSearch/>
            },
            {
                // 분양글 생성 페이지 (리스트 생성 페이지)
                path: "/list-create",
                element: <ListCreate/>
            },
            //--------------------------------------------------------------------
            {
                // 메세지 페이지
                path: "/message"
            },
        ]
    },
])




