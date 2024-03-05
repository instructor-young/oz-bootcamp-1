"use client";

import Page from "@/components/Page";
import useQueryGetProducts from "@/react-query/quries/useQuery.getProducts";

function HomePage() {
  const { data: products, refetch, isFetching } = useQueryGetProducts();

  return (
    <Page title="홈">
      <section className="grid gap-y-8">
        <button className="button" onClick={() => refetch()}>
          새로고침
        </button>

        <div className="bg-red-50 h-[400px]">
          이곳은 배너 영역~~ 쇼핑몰 배너 상상해 주세요~
        </div>

        <div>
          {isFetching
            ? "로딩중 ..."
            : products.map((product: any) => (
                <div key={product.id}>{product.name}</div>
              ))}
        </div>
      </section>
    </Page>
  );
}

export default HomePage;
