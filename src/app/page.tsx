import { EmblaCarousel } from "@/components/BannerCarousal";
import ListProducts from "../components/ListProducts";
import { desktopBanners, mobileBanners } from "@/libs/utils";

function Home() {
  return (
    <main>
      <section className="pb-10 pt-2 md:pb-20">
        <div className="hidden sm:block">
          <EmblaCarousel images={desktopBanners} />
        </div>
        <div className="sm:hidden">
          <EmblaCarousel images={mobileBanners} />
        </div>
        <ListProducts />
      </section>
    </main>
  );
}
export default Home;
