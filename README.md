## 적용 기술

- React Native
- Typescript
- Expo
- Supabase

## 아키텍처

- 컴포넌트 계층에 Atomic Component(아토믹 컴포넌트) 방법론을 적용하여 중복되는 컴포넌트를 최소한으로 줄임
- Supabase database, storage를 이용하여 백엔드 코드 없이도 React Client에서 SQL 작업을 수행할 수 있도록 구현함
- Expo Go의 한계로 인해 IOS 테스트 환경에서 이미지 업로드는 작동하지 않음 (웹에서는 작동)
- 현재 해당 프로젝트에는 보안 처리로 인해 .env.local 파일이 포함되어 있지 않으므로 clone을 통해 외부 로컬에서 작동시키는것이 불가함

## 시연 영상

[시연 영상 링크](https://vimeo.com/1115437433?share=copy)
