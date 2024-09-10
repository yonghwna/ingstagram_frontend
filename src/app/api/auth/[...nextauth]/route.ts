import { handlers } from "@/auth";
export const { GET, POST } = handlers;
//catch-all dynamic route라서 Auth.js api 관련 모든 route에 응답한다.
//handler 객체로 라우트 get, post 함수를 매핑.
//이렇게 하면 api/auth/로 시작하는 모든 요청에 대해
//auth.ts 파일에서 정의한 핸들러를 사용할 수 있습니다.
