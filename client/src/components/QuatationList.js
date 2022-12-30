import React, { useEffect, useState } from "react";
import api from "../api/quotation";

const QuatationList = () => {
  const [data, setData] = useState();
  let total = 0;

  useEffect(() => {
    async function fetchData() {
      let response = await api.get("/quatation");
      setData(response.data);
    }
    fetchData();
  }, [data]);

  return (
    <div className="shadow-lg mx-7  my-7 p-8 flex-auto w-90">
      <table className="w-full">
        <thead className="bg-gray-200">
          <tr>
            <th className="text-left w-24 p-2">S.NO</th>
            <th className="text-left w-40 pl-1">NAME OF THE MATERIAL</th>
            <th className="text-left w-28 pl-2">PRICE</th>
            <th className="text-left w-28 p-2">UOM</th>
            <th className="text-left w-28 p-2">QTY</th>
            <th className="text-left w-28 p-2">Total</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => {
            total += item.qty * item.price;
            return (
              <tr className="w-20">
                <td className="p-2 border">{item.id}</td>
                <td className="p-2 border">{item.name}</td>
                <td className="p-2 border">{item.price}</td>
                <td className="p-2 border">{item.uom}</td>
                <td className="p-2 border">{item.qty}</td>
                <td className="p-2 border">{item.price * item.qty}</td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td className="p-2 border"></td>
            <td className="p-2 border"></td>
            <td className="p-2 border"></td>
            <td className="p-2 border"></td>
            <td className="p-2 border">Grand Total : </td>
            <td className="p-2 border">{total}/-</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default QuatationList;
