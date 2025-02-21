import {createClient} from "@/src/utils/supabase/server";
import {slideLinks} from "@component/src/constants";
import ItemSlide from "./ItemSlide";

const Slide = async () => {
  const supabase = await createClient();

  const {data, error} = await supabase.from("sliders").select();

  const dataWithLinks =
    data?.map((slide, index) => ({
      ...slide,
      detail: slideLinks[index],
    })) || [];

  if (error) {
    console.error("Error fetching sliders:", error);
    return <div>Error loading slides</div>;
  }

  return (
    <div className="flex items-center">
      {dataWithLinks.map((slide) => (
        <ItemSlide
          key={slide.id}
          id={slide.id}
          title={slide.title}
          description={slide.description}
          detail={slide.detail}
          image_url={slide.image_url}
        />
      ))}
    </div>
  );
};

export default Slide;
