import { createClient } from "@/src/utils/supabase/server";
import { slideLinks } from "@component/src/constants";

const Slide = async () => {
  const supabase = await createClient();

  const { data, error } = await supabase.from("sliders").select();

  if (error) {
    console.error("Error fetching sliders:", error);
    return <div>Error loading slides</div>;
  }

  if (data) {
    data.forEach((slide, index) => {
      return {
        ...slide,
        link: slideLinks[index],
      };
    });
  }

  console.log(data);

  return (
    <div>
      {data.map((slide) => (
        <div key={slide.id}>
          <h2>{slide.title}</h2>
          <p>{slide.description}</p>
          <p>{slide.link}</p>
          <img src={slide.image_url} alt={slide.title} />
        </div>
      ))}
    </div>
  );
};

export default Slide;
