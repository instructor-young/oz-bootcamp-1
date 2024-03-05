import Header from "./components/Header";
import HeavyList from "./components/HeavyList";
import Page from "./components/Page";
import { AuthProvider } from "./contexts/auth.context";

function App() {
  return (
    <AuthProvider>
      <div>
        <h1>Context API 수업</h1>
        <hr />

        <Header />
        <hr />

        <Page />
        <hr />

        <HeavyList />
      </div>
    </AuthProvider>
  );
}

export default App;

// --
// 리렌더링이 되는 경우 세 가지~
// 1. state가 변경될 때 리렌더링~
// 2. 부모로부터 받은 props가 변경될 때 리렌더링~!
// 3. 부모 컴포넌트가 리렌더링 될 때~ 자식 컴포넌트도 리렌더링!

// 1. 만든다. -> createContext
// 2. 사용한다. -> useContext
// 3. 범위를 정해서 값을 내려준다. -> Provider를 만들고 value를 내려준다.
