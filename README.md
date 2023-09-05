# Minesweeper
- 구글 설문조사 클론입니다.


## 프로젝트 실행
```
yarn install
yarn start
```

## 프로젝트 구조 및 기술 스택
- React18 cra, Redux(RTK), TypeScript 를 사용했습니다.
- 상태를 Redux 라이브러리를 통해 전역으로 관리할 수 있도록 설계했습니다. 

```
    "@reduxjs/toolkit": "^1.9.5",
    "@types/node": "^16.7.13",
    "@types/react": "^18.0.0",
    "@types/react-dom": "^18.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-redux": "^8.1.1",
    "react-scripts": "5.0.1",
    "typescript": "^4.4.2",
    "web-vitals": "^2.1.0"
```

## 동작 및 상세 내용
- 설문지 제목 및 설명 추가, 편집이 가능합니다.
- 질문 추가, 복사, 삭제 및 필수 옵션 설정이 가능합니다.
- 질문 타입에 따라 각각의 옵션 설정이 가능합니다.
- 미리 보기 기능 및 양식 지우기 기능이 있습니다.
- 제출한 데이터를 볼 수 있습니다.
