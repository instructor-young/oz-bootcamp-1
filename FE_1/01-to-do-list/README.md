리엑트에서의 전역 상태 관리

1. props drilling -> 조금 ㅁㅅ한 방법
2. 3rd party library
   - redux
   - recoil
   - zustand
   - react-query
3. Context API (리엑트 내장 기능)
   - 어떤 한계가 있어요.
   - 3rd party library들을 사용하면 극복이 되요.
   - 그래서, 여전히 3rd party library

---

# Context API

- 컴포넌트 트리 내에서, 특정한 상태를 공유하고 싶은 범위를 정해서, 그 부분을 Context로 묶고, 상태를 공유
- 컨텍스트 API 작성법
  1. 만든다 -> createContext
  2. 사용한다 -> useContext
  3. 범위 정해서 값을 내려준다. -> <Provider value={value}></Provider>
