import SwipeButton from "@/components/animata/button/swipe-button";
import Expandable from "@/components/animata/carousel/expandable";
import BackButton from "@/components/BackButton";
import { allProducts } from "@/libs/utils";
import Link from "next/link";

async function page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const currentProduct = allProducts.find(
    (product) => product.id === Number(id)
  );

  if (!currentProduct) {
    return <h1>No product found</h1>;
  }

  return (
    <section className="max-w-5xl mx-auto w-[90%] pb-10 md:pb-14">
      <div className="pt-5 pb-10">
        <BackButton to="/products/all" />
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        {/* image */}
        <div className="max-w-lg w-full">
          <Expandable list={currentProduct?.images} />
        </div>
        {/* cont */}
        <div className="flex flex-col gap-3 max-w-md">
          <h1 className="text-2xl font-semibold">{currentProduct.name}</h1>
          <p className="text-xl">₹ {currentProduct.price}</p>
          <Link href={"#"} className="">
            <SwipeButton
              firstText="Dm on whatsapp"
              secondText="Dm on whatsapp"
              className="max-w-36"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
export default page;
