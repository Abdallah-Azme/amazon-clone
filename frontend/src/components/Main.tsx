import { sampleProducts } from "@/data";
import { Link } from "react-router-dom";

export default function Main() {
  return (
    <main className="">
      <ul className="grid grid-cols-12 gap-2">
        {sampleProducts.map((product) => (
          <Link
            to={"/product/" + product.slug}
            key={product.slug}
            className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3"
          >
            <li>
              <img
                src={product.image}
                alt={product.description}
                className="max-w-[400px] w-full"
              />
              <h3>{product.name}</h3>
              <p>${product.price}</p>
            </li>
          </Link>
        ))}
      </ul>
    </main>
  );
}
