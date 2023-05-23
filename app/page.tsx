import pizzas from "@/data";
import Banner from "./components/Banner";
import Pizza from "./components/pizza/Pizza";

export default function Home() {
  return (
    <section>
      <Banner />
      <div className="container mx-auto">
        {/* pizza grid */}
        <div className=" grid gap-8 lg:gap-4 grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {pizzas.map((pizza) => (
            <Pizza pizza={pizza} key={pizza.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
