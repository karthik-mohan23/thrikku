import { allProducts } from "@/libs/utils";
import Image from "next/image";
import Link from "next/link";

function ListProducts() {
  return (
    <section className="">
      <h1 className="py-5 md:py-10 font-semibold text-2xl text-center underline">
        Latest Arrivals
      </h1>
      <div className="w-[90%] lg:w-full mx-auto flex flex-col md:flex-row flex-wrap md:justify-center items-center gap-8 ">
        {allProducts.map((product) => (
          <Link
            href={`/products/${product.id}`}
            key={product.id}
            className="border border-black rounded-lg w-80 h-[440px] group shadow-lg hover:shadow-2xl duration-300">
            <div className="flex flex-col gap-2 p-4 w-full">
              <div className="w-full h-80 relative">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  className="object-cover w-full h-full rounded-lg group-hover:scale-[1.03] transition-all duration-300"
                  fill
                  priority
                />
              </div>
              <h3 className="font-semibold text-lg">{product.name}</h3>
              <div className="flex items-center gap-1">
                <p
                  className={`${
                    product.discountedPrice
                      ? "line-through opacity-80"
                      : "text-lg"
                  } `}>
                  ₹{product.price}
                </p>

                {product.discountedPrice && (
                  <p className="font-medium text-lg">
                    ₹{product.discountedPrice}
                  </p>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
export default ListProducts;
