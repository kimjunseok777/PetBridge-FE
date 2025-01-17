



export const URL_HELPER = {
    // 로그인
    "/": {
        backBtn: false,
        alarmBtn: false,
        topLogo: true //--> 상단 로고
    },
    // 회원가입
    "/sign-up": {
        backBtn: true,
        alarmBtn: false
    },
    // 회원가입 완료
    "/sign-up-complete": {
        backBtn: false,
        alarmBtn: false,
        topLogo: true
    },
    //--------------------------------------------------------------------
    // 리스트 조회
    "/list-read": {
        nav: true,
        backBtn: true,
        alarmBtn: true,
        logOutBtn: true //--> 로그아웃 버튼
    },
    // 리스트 검색
    "/list-search": {
        nav: true,
        backBtn: true,
        alarmBtn: true
    },
    // 리스트 상세보기
    "/list-detailPage": {
        nav: true,
        backBtn: true,
        alarmBtn: true
    },
    // 분양글 생성
    "/list-create": {
        nav: true,
        backBtn: true,
        alarmBtn: true
    },
    // 분양글 생성 완료
    "/list-create-complete": {
        nav: true,
        backBtn: false,
        alarmBtn: true,
    },
    //--------------------------------------------------------------------
    // 알람
    "/alarmPage": {
        nav: true,
        backBtn: true,
        alarmBtn: false
    },
    //--------------------------------------------------------------------
    // 입양 계약서 페이지
    "/contract-userPage": {
        nav: true,
        backBtn: true,
        alarmBtn: true
    },
    // 분양 계약서 페이지
    "/contract-writerPage": {
        nav: true,
        backBtn: true,
        alarmBtn: true
    },
    //--------------------------------------------------------------------
}




