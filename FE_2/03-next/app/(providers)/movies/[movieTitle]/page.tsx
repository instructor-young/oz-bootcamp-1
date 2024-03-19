import Page from "@/components/Page";

function page(props: { params: { movieTitle: string } }) {
  return <Page title={props.params.movieTitle}>영화 상세 정보</Page>;
}

export default page;
