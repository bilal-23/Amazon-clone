import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";

export default function Home({ products }) {

  return (
    <div className="bg-gray-100">
      <main className="max-w-screen-2xl mx-auto">
        <Banner />
        <ProductFeed products={products} />
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://course-api.com/react-store-products");
  const products = await response.json();

  return {
    props: {
      products: products
    },
    revalidate: 8640000
  }

}