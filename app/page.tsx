import Banner from "@/src/components/banner/Banner";
import Category from "@component/src/components/category/Category";
import IntroductionProducts from "@component/src/components/IntroductionProducts/IntroductionProducts";

export default function Home() {
  return (
    <div>
      <Banner />
      <IntroductionProducts />
      <Category />
    </div>
  );
}
