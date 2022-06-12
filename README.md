# Next-auth for Google template

Google login & logout template with Next-auth of Next.js

- Framework: [Next.js](https://nextjs.org/), [Next-auth](https://next-auth.js.org/)
- Styling: [tailwindcss](https://tailwindcss.com/)

## env setting

setting in `.env.local` file

```
NEXTAUTH_URL=http://localhost:3000
SECRET=
GOOGLE_ID=
GOOGLE_SECRET=
```

### `NEXTAUTH_URL`

- 기본 host 설정. 개발/운영 배포시 각 환경에 맞는 BASE_URL 값으로 조정
- Default host setting. During development/production deployment, adjust to the BASE_URL value for each environment.

### `GOOGLE_ID`, `GOOGLE_SECRET`

- [Google Cloud platform](https://console.cloud.google.com/?hl=ko)에서 발급한 ID 및 비밀 코드 할당.
- Allocation of ID and secret code issued by [Google Cloud platform](https://console.cloud.google.com/?hl=ko).

### `SECRET`

- 임의의 난수를 발생시켜 프로젝트 별 고유값으로 설정.
- An arbitrary random number is generated and set to a unique value for each project.

  ```
  openssl rand -hex 32
  ```

## Running Locally

```
yarn install
yarn dev
```
