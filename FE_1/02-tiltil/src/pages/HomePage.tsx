import Page from "../components/Page";
import { useAppSelector } from "../store";

function HomePage() {
  const tils = useAppSelector((state) => state.til.tils);

  return (
    <Page title="홈페이지">
      {tils.map((til) => (
        <div key={til.title}>
          {til.title} / {til.content}
        </div>
      ))}
    </Page>
  );
}

export default HomePage;
