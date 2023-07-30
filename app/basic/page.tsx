import getInstance from "@/lib/knex";
import Image from "next/image";
import Link from "next/link";

export type Item = {
  id: string;
  itemName: string;
  itemImageUrl: string | null;
};

export default async function Basic() {
  const knex = getInstance();
  const data = await knex<Item>("item");
  return (
    <div className="w-full grid grid-cols-3 gap-6">
      <h1 className="col-span-full">My Favorite Things</h1>
      {data.map((item) => (
        <Link
          key={item.id}
          href={`/basic/${item.id}`}
          className="col-span-1 w-full flex flex-col h-56 bg-gray-800 border-white border rounded cursor-pointer"
        >
          <div className="w-full h-48 relative">
            <Image
              src={item.itemImageUrl || "https://picsum.photos/id/237/200/300"}
              fill
              alt="Item Image"
            />
          </div>
          <h4 className="text-white text-xl my-auto p-2">{item.itemName}</h4>
        </Link>
      ))}
    </div>
  );
}
