import ListProducts from "./ListProducts";

function page() {
  return (
    <section className="max-w-5xl mx-auto pb-10 pt-2 md:pb-20">
      <div>
        <img
          src="https://printnew.in/wp-content/uploads/2021/11/Printed-Graphic-T-shirt-Banner-For-Print-New-India-1-1024x441-1.png"
          alt=""
          className="w-full h-full lg:rounded-lg"
        />
      </div>
      <ListProducts />
    </section>
  );
}
export default page;
