import { sampleProducts } from "@/data";
import React from "react";

export default function Main() {
  return (
    <main className="">
      <ul className="grid grid-cols-12 gap-2">
        {sampleProducts.map((product) => (
          <li
            className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3"
            key={product.slug}
          >
            <img
              src={product.image}
              alt={product.description}
              className="max-w-[400px] w-full"
            />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
