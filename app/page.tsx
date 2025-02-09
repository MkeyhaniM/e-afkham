import Banner from "@/src/components/banner/Banner";
import Category from "@component/src/components/category/Category";
import IntroductionProducts from "@component/src/components/IntroductionProducts/IntroductionProducts";
import OffPrice from "@component/src/components/offPrice/OffPrice";
import Slide from "@component/src/components/slide/Slide";

export default function Home() {
  return (
    <div>
      <Banner />
      <IntroductionProducts />
      <Category />
      <Slide />
      <OffPrice />
    </div>
  );
}
