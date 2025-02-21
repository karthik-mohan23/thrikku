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
        <BackButton to="/products" />
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

          <div className="flex flex-col gap-1">
            <p>100% Cotton T-shirt</p>
            <p>Export Quality Cotton</p>
            <p>Soft and stretchable material</p>
          </div>
          <div className="flex items-center gap-2">
            <p>Available sizes : </p>
            <p className="flex flex-wrap items-center gap-3 lg:gap-5">
              {currentProduct.sizes.map((size) => (
                <span
                  key={size}
                  className="rounded border border-gray-200 bg-orange-50/60 px-2 py-1 flex justify-center items-center font-semibold">
                  {size}
                </span>
              ))}
            </p>
          </div>
          <div className="flex items-center gap-1">
            <p
              className={`${
                currentProduct.discountedPrice
                  ? "line-through opacity-80"
                  : "text-2xl md:text-3xl"
              } `}>
              ₹{currentProduct.price}
            </p>

            {currentProduct.discountedPrice && (
              <p className="font-medium text-2xl md:text-3xl">
                ₹{currentProduct.discountedPrice}
              </p>
            )}
          </div>
          {/* <p className="text-2xl md:text-3xl">₹ {currentProduct.price}</p> */}
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
