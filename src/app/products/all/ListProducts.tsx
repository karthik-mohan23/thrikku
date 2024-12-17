import { allProducts } from "@/libs/utils";
import Link from "next/link";

function ListProducts() {
  return (
    <section className="">
      <h1 className="py-5 md:py-10 font-semibold text-2xl text-center underline">
        Latest Arrivals
      </h1>
      <div className="w-[90%] lg:w-full mx-auto flex flex-col md:flex-row flex-wrap lg:justify-center items-center gap-8 ">
        {allProducts.map((product) => (
          <Link href={`products/${product.id}`} key={product.id}>
            <div className="max-w-80 h-96 flex flex-col gap-2">
              <div className="w-full h-80">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
              <h3 className="font-semibold">{product.name}</h3>
              <p>₹ {product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
export default ListProducts;
