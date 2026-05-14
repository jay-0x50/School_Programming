# Programming 소스 코드
## 02_counter
vanilla HTML, JavaScript
## React 시작
```shell
$ npm create vite@llatest .
```

```shell
$ Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
$ npm run dev
```

### CounterApp
- `userState( 초기값 )`
- `onClick = { () => set함수( 바꿀값 ) }`
- `onClick = { () => set함수( ( 이전state ) => 이전state + 1 ) }`
- `onClick = { 함수이름 }`

### TodoListApp
- React Component 분리
- for -> htmlFor, class -> className
- props
- `<input id = {id} value = {} />`, `<label htmlFor = {id} />`
- onChange
- 구조 분해 할당
- `...스프레드연산자`
- `<form onSubmit = {} />`
- `map()`
- `<TodoItem key = {}` 