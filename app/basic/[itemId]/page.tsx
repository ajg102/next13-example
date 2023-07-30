import EditForm from "@/components/EditForm";
import getInstance from "@/lib/knex";
import { BackwardIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import type { Item } from "../page";

type PageProps = {
  params: { itemId: string };
};

export default async function Form({ params }: PageProps) {
  const knex = getInstance();
  const itemId = params.itemId;
  const item = await knex<Item>("item").first("*").where({ id: itemId });

  return (
    <main>
      <Link className="flex flex-row items-center space-x-6" href="/basic">
        <BackwardIcon className="w-6 h-6" />
        <p>Go Back</p>
      </Link>
      <div className="w-full h-64 relative">
        <Image
          src={item.itemImageUrl || "https://picsum.photos/id/237/200/300"}
          fill
          alt="Item Image"
        />
      </div>
      <EditForm item={item} />
    </main>
  );
}
