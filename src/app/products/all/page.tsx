import { EmblaCarousel } from "@/components/BannerCarousal";
import ListProducts from "./ListProducts";
import { desktopBanners, mobileBanners } from "@/libs/utils";

function page() {
  return (
    <section className="max-w-5xl mx-auto pb-10 pt-2 md:pb-20">
      <div className="hidden md:block">
        <EmblaCarousel images={desktopBanners} />
      </div>
      <div className="md:hidden">
        <EmblaCarousel images={mobileBanners} />
      </div>
      <ListProducts />
    </section>
  );
}
export default page;
