# 리액트로 일기장 만들기

## scss 사용법

1. style.css와 style.scss 파일을 생성
2. 터미널에 아래와 같은 명령어를 입력

```
npx sass --watch scss파일경로 css파일경로
-- 예제
npx sass --watch src/assets/scss/style.scss src/assets/css/style.css
```

3. minify하는 방법

```
sass --watch --style=compressed src/assets/scss/style.scss src/assets/css/style.css
```

4. 변수를 사용하는 방법

-   $key : value

```
$my-width: 40px;
width: $my-width;
```
