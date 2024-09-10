import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
//handler를 route.ts로 보내서, 들어오는 모든 요청에 대해 실행한다.

export const {
  handlers,
  signIn,
  signOut,
  auth,
  unstable_update: update,
} = NextAuth({
  providers: [GitHub],
  //세션전략은 jwt를 사용하고, 세션을 만료시간을 24시간으로 설정
  session: {
    strategy: "jwt", // JSON Web Token 사용
    maxAge: 60 * 60 * 24, // 세션 만료 시간(sec)
  },
  //로그인 페이지 설정
  pages: {
    signIn: "/signin", // Default: '/auth/signin'
  },
  //인증 관련 이벤트에 대한 콜백 함수
  //signIn 할 때 호출, jwt생성할 때 호출, 세션 생성할 때 호출, 리다이렉트 할 때 호출
  //redirect는 인증 후 리디렉션 처리하는 콜백

  callbacks: {
    signIn: async () => {
      return true;
    },
    jwt: async ({ token, user }) => {
      //if (user) token = { ...token, id: user.id }; 이건 언젠가...
      return token;
    },
    session: async ({ session, token }) => {
      return session;
    },
    redirect: async ({ url, baseUrl }) => {
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      if (url) {
        const { search, origin } = new URL(url);
        const callbackUrl = new URLSearchParams(search).get("callbackUrl");
        if (callbackUrl)
          return callbackUrl.startsWith("/")
            ? `${baseUrl}${callbackUrl}`
            : callbackUrl;
        if (origin === baseUrl) return url;
      }
      return baseUrl;
    },
  },
});
