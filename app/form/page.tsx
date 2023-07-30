import getInstance from "@/lib/knex";
import { redirect } from "next/navigation";
import { v4 } from "uuid";

export default async function Form() {
  const saveItem = async (formData: FormData) => {
    "use server";
    const knex = getInstance();
    const payload = {
      id: v4(),
      itemName: formData.get("itemName"),
      itemImageUrl: formData.get("itemImageUrl"),
    };
    await knex("item").insert(payload);
    redirect("/basic");
  };

  return (
    <main>
      <form className="flex flex-col space-y-4 text-black">
        <label className="text-white font-semibold">Item Name</label>
        <div className="rounded bg-vc-border-gradient p-px shadow-lg shadow-black/20">
          <input
            className="bg-white w-full rounded"
            name="itemName"
            type="text"
            placeholder="Enter your item name..."
          />
        </div>

        <label className="text-white font-semibold">Item Image</label>
        <div className="rounded bg-vc-border-gradient p-px shadow-lg shadow-black/20">
          <input
            className="bg-white w-full rounded"
            name="itemImageUrl"
            type="text"
            placeholder="Enter a url image for your item (optional)"
          />
        </div>
        <div className="rounded bg-vc-border-gradient p-px  shadow-lg shadow-black/20">
          <button
            className="rounded  bg-black text-white py-4 w-full h-full"
            formAction={saveItem}
          >
            Save Item
          </button>
        </div>
      </form>
    </main>
  );
}
