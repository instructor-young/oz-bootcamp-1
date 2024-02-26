import { useDispatch } from "react-redux";
import Page from "../components/Page";
import { LOG_IN } from "../store/reducers/auth.reducer";

function LogInPage() {
  const dispatch = useDispatch();

  const handleClickLogIn = () => {
    const action = { type: LOG_IN };

    dispatch(action);
  };

  return (
    <Page title="로그인">
      <button onClick={handleClickLogIn}>이거 누르면 로그인</button>
    </Page>
  );
}

export default LogInPage;
