# Next (App router)

## 핵심

1. app 아래의 디렉터리 경로가 그대로 url이 된다.
2. app 디렉터리는 root('/') url이다.
3. 디렉터리 안에 있는 `page.tsx` 파일이 페이지가 된다.
4. 디렉터리 안에 있는 `layout.tsx` 파일이 해당 경로의 페이지와 하위 경로에 있는 페이지들의 레이아웃이 된다.
5. 동적라우팅(Dynamic Routing)은 디렉터리의 이름을 대괄호로 묶어서 생성하면 된다.

## SSR

- Next에서는 모든 컴포넌트가 "기본적으로" 서버사이드렌더링 된다.

## 레이아웃

- 디렉터리 안에 있는 `layout.tsx` 파일이 해당 경로의 페이지와 하위 경로에 있는 페이지들의 레이아웃이 된다.

## 경로에 포함되지 않는 디렉터리

1. 디렉터리 이름을 소괄호('()')로 감싼다.

   - 경로에는 포함되지 않지만, 라우팅 시스템에는 포함됨.
   - 즉, App Router 라우팅 시스템이 제공하는 컨벤션들을 쓸 수 있음.

디렉터리 경로 url
app/(blabla)/my -> /my
app/(blabla)/products -> /products
app/(blabla)/products/[productId]-> /products/:productId

2. 디렉터리 이름의 첫 글자를 언더스코어로 시작한다.
   - 경로에도 포함되지 않고, 라우팅 시스템 자체에서 배제됨.
   - 즉, App Router 라우팅 시스템이 제공하는 컨벤션들이 무효임.

## CSR

서버사이드에서 그려서 보내줄 수 없는 경우들

1. 이벤트를 핸들링 하는 코드가 있는 컴포넌트
2. React의 hook을 사용하는 코드가 있는 컴포넌트

이런 컴포넌트를 그냥 사용하려고 하면 에러가 나요.
Next는 기본적으로 모든 컴포넌트를 서버 사이드에서 그리려고 하기 때문에.

그런 컴포넌트들을 클라이언트 사이드에서 그리라고 알려주려면
"해당 파일의 최상단에" `'use client'` 라고 작성해야 함.

# React Query

## 배경 지식

State Management 상태 관리
-> Global State Management 전역 상태 관리 라이브러리들이 만들어졌죠

Redux -> 리액트, 즉 클라이언트 사이드에서의 이런저런 상태 관리에는 최적화
-> 서버로부터 받아오는 데이터들을 클라이언트에서 계속해서 동기화하고, 관리하는 것에는 충분히 편리하지 않았던 것

Client State Management Library
클라이언트(에만 존재하는) 상태를 전문적으로 관리하는 라이브러리
-> Redux

Server State Management Library
서버(에 존재하는 데이터에 대한 클라이언트) 상태를 전문적으로 관리하는 라이브러리
-> React Query

## 설치 및 세팅

1. 설치
   https://tanstack.com/query/latest/docs/framework/react/installation

2. 세팅
   https://tanstack.com/query/latest/docs/framework/react/quick-start

3. Devtools
   https://tanstack.com/query/latest/docs/framework/react/devtools
