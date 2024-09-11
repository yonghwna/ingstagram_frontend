"use server";
//이걸 쓰면 자동으로 서버 함수에 대한 참조를 생성하고, 클라이언트 컴포넌트에 전달한다.
//그 함수가 클라이언트에서 호출되면 React는 서버에 요청을 보내 함수를 실행하고, 결과를 반환한다.
import { auth, signIn, signOut, update } from "@/auth";

export const login = async () => {
  await signIn();
  // ...
};
export const signInWithGoogle = async () => {
  console.log(
    await signIn("google", {
      /* 옵션 */
    })
  );
  await signIn("google", {
    /* 옵션 */
  });
  // ...
};
export const logOut = async () => {
  await signOut();
};
export const loginWithSomeProvider = async (provider: string) => {
  await signIn(provider, {
    /* 옵션 */
  });
  // ...
};
export { auth as getSession, update as updateSession };
