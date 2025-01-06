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
    return (
      <section className="max-w-5xl mx-auto w-[90%] flex items-center justify-center min-h-[80vh]">
        <h1 className="text-3xl md:text-5xl font-semibold">
          Product not found.
        </h1>
      </section>
    );
  }

  return (
    <section className="max-w-5xl mx-auto w-[90%] pb-10 md:pb-14">
      <div className="pt-5 pb-10">
        <BackButton to="/products/all" />
      </div>
      <div className="flex flex-col md:flex-row gap-4 lg:gap-8">
        {/* image */}
        <div className="max-w-lg w-full">
          <Expandable list={currentProduct?.images} />
        </div>
        {/* cont */}
        <div className="flex flex-col gap-3 w-full">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
            {currentProduct.name}
          </h1>
          <p className="text-xl md:text-2xl">₹ {currentProduct.price}</p>
          <Link
            href="https://wa.me/919778781981"
            target="_blank"
            className="max-w-72">
            <SwipeButton
              firstText="Order via WhatsApp"
              secondText="Order via WhatsApp"
              className="w-full"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
export default page;
