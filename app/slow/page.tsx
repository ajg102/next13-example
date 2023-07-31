import Image from "next/image";
import { Pokemon } from "./types";

export const getPokemon = async (id: string | number) => {
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
    cache: "no-cache",
    next: {
      // just noting this is a thing?
    },
  });
  const parsedRes = await data.json();
  return parsedRes as Pokemon;
};

export default async function Slow() {
  const promises = Array.from({ length: 1008 }).map((_, index) =>
    getPokemon(index + 1)
  );
  const pokemon = await Promise.all(promises);
  return (
    <div className="w-full grid grid-cols-3 gap-6">
      <h1 className="col-span-full">Really Slow Loading</h1>
      {pokemon.map((poke) => (
        <div
          key={poke.id}
          className="col-span-1 border-white text-white bg-black"
        >
          <Image
            width={50}
            height={50}
            src={poke.sprites.front_default}
            alt={poke.name}
          />
          <p>{poke.name}</p>
          <p>
            {poke.types.map((type) => (
              <div key={type.type.name} className="rounded-full px-3 py-2">
                {type.type.name}
              </div>
            ))}
          </p>
        </div>
      ))}
    </div>
  );
}
