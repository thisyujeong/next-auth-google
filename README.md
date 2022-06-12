# Next-auth for Google Template

Google login & logout tempalte with Next-auth of Next.js

- Framework: [Next.js](https://nextjs.org/), [Next-auth](https://next-auth.js.org/)
- Styling: [tailwindcss](https://tailwindcss.com/)

## env setting

setting in `env.local` file

```
NEXTAUTH_URL=http://localhost:3000
SECRET=

GOOGLE_ID=
GOOGLE_SECRET=
```

`GOOGLE_ID`, `GOOGLE_SECRET`  
: 구글 클라우드 플랫폼에서 발급한 ID 및 비밀 코드 할당.  
: Allocation of ID and secret code issued by Google Cloud platform.

`SECRET`  
: 임의의 난수를 발샐시켜 프로젝트 별 고유값으로 설정.  
: An arbitrary random number is generated and set to a unique value for each project.

```
openssl rand -hex 32
```

## Running Locally

```
yarn install
yarn dev
```
