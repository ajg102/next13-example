"use client";
import { Item } from "@/app/basic/page";
import { updateItem } from "@/lib/actions";

type EditFormProps = {
  item: Item;
};

const EditForm = ({ item }: EditFormProps) => {
  return (
    <form
      action={(data) => updateItem(data, item.id)}
      className="flex flex-col space-y-4 text-black"
    >
      <label className="text-white font-semibold">Item Name</label>
      <div className="rounded bg-vc-border-gradient p-px shadow-lg shadow-black/20">
        <input
          className="bg-white w-full rounded"
          name="itemName"
          type="text"
          placeholder="Enter your item name..."
          defaultValue={item?.itemName}
        />
      </div>

      <label className="text-white font-semibold">Item Image</label>
      <div className="rounded bg-vc-border-gradient p-px shadow-lg shadow-black/20">
        <input
          className="bg-white w-full rounded"
          name="itemImageUrl"
          type="text"
          placeholder="Enter a url image for your item (optional)"
          defaultValue={item?.itemImageUrl ?? ""}
        />
      </div>
      <div className="rounded bg-vc-border-gradient p-px  shadow-lg shadow-black/20">
        <button className="rounded  bg-black text-white py-4 w-full h-full">
          Update Item
        </button>
      </div>
    </form>
  );
};

export default EditForm;
