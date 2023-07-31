import { isFulfilled } from "@/lib/helpers";
import Image from "next/image";
import { Pokemon } from "./types";

const getPokemon = async (id: string | number) => {
  try {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
      cache: "no-cache",
      next: {
        // just noting this is a thing?
      },
    });
    const parsedRes = await data.json();
    return parsedRes as Pokemon;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export default async function Slow() {
  const promises = Array.from({ length: 151 }).map((_, index) =>
    getPokemon(index + 1)
  );
  const data = await Promise.allSettled(promises);
  const pokemon = data.filter(isFulfilled);

  return (
    <div className="w-full grid grid-cols-3 gap-6">
      <h1 className="col-span-full">Really Slow Loading</h1>
      {pokemon.map(({ value }) => (
        <div
          key={value.id}
          className="col-span-1 border-white border text-white bg-black"
        >
          <Image
            width={50}
            height={50}
            src={value.sprites.front_default}
            alt={value.name}
          />
          <p>{value.name}</p>
          <p>
            {value.types.map((type) => (
              <div
                key={type.type.name}
                className="rounded-full px-3 py-2 bg-yellow-600 text-white"
              >
                {type.type.name}
              </div>
            ))}
          </p>
        </div>
      ))}
    </div>
  );
}
