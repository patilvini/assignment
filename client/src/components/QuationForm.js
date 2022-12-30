import { useState } from "react";
import api from "../api/quotation";

function QuatationForm() {
  const [data, setData] = useState({
    name: "",
    price: "",
    uom: "",
    qty: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      data.name === "" ||
      data.price === "" ||
      data.uom === "" ||
      data.qty === ""
    ) {
      return;
    }

    let quotation = {
      id: Math.floor(Math.random() * 100),
      ...data,
    };
    const response = await api.post("/quatation", quotation);
    console.log(response);
    setData({ ...data, response });
    setData({
      name: "",
      price: "",
      uom: "",
      qty: "",
    });
  };

  return (
    <div className="shadow-lg ml-7 mt-7 p-5 flex-auto w-24">
      <h3 className="my-2 font-bold text-blue-400">Vendor Quatation : </h3>
      <form>
        <label className="block" htmlFor="material">
          Material :
        </label>
        <input
          className="block border-gray-200 border-2 rounded-lg p-1  focus:outline-none w-full"
          name="materila"
          id="material"
          autoComplete="off"
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />
        <label className="block mt-2" htmlFor="price">
          Price :
        </label>
        <input
          className="block border-gray-200 border-2 rounded-lg p-1 w-full"
          name="price"
          id="price"
          autoComplete="off"
          type="number"
          onChange={(e) => setData({ ...data, price: e.target.value })}
        />
        <label className="block mt-2" htmlFor="uom">
          UOM :
        </label>
        <input
          className="block border-gray-200 border-2 rounded-lg p-1 w-full"
          name="uom"
          id="uom"
          autoComplete="off"
          onChange={(e) => setData({ ...data, uom: e.target.value })}
        />
        <label className="block mt-2" htmlFor="quantity">
          Quantity :
        </label>
        <input
          className="block border-gray-200 border-2 rounded-lg p-1 w-full"
          name="quantity"
          id="quantity"
          autoComplete="off"
          type="number"
          onChange={(e) => setData({ ...data, qty: e.target.value })}
        />
        <button
          className="px-6 py-2 rounded-lg bg-blue-400 my-5"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default QuatationForm;
