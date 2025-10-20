/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

interface ISheetData {
  [key: string]: string | number | null;
}

const Registered = () => {
  const [hideContent, setHideContent] = useState<boolean>(true);
  const [data, setData] = useState<ISheetData[]>([]);
  const [loading, setLoading] = useState(true);

  // ✅ Check sessionStorage on mount
  useEffect(() => {
    const isAuthorized = sessionStorage.getItem("isAuthorized");
    if (isAuthorized === "true") {
      setHideContent(false);
    }
  }, []);

  const handleAuthorization = (e: any) => {
    e.preventDefault();
    const loadingToast = toast.loading("Verifying...");
    const inputKey = e.target.inputKey.value;

    if (inputKey === "team3@Magpieo") {
      sessionStorage.setItem("isAuthorized", "true"); // ✅ Save authorization
      setHideContent(false);
      toast.dismiss(loadingToast);
      toast.success("Authorization Succeed!");
    } else {
      toast.dismiss(loadingToast);
      toast.error("Sorry! You Are Not Authorized.");
    }
  };

  useEffect(() => {
    const fetchData = () => {
      const callbackName = "displayData_" + Date.now();

      (window as any)[callbackName] = (response: any) => {
        if (response.result === "success") {
          setData(response.data);
        }
        setLoading(false);
        delete (window as any)[callbackName];
      };

      const script = document.createElement("script");
      script.src = `https://script.google.com/macros/s/AKfycbzFDAn-GJM49BWoizklDmL4Ec8_-6U8w9j2okoTSJUmNhxvUJWQNTkGw-BrzMWdQM7G/exec?callback=${callbackName}`;
      script.onerror = () => {
        console.error("Failed to load JSONP");
        setLoading(false);
      };

      document.body.appendChild(script);
    };

    fetchData();
  }, []);

  if (hideContent) {
    return (
      <div className="h-[70vh] flex justify-center items-center">
        <form className="text-center" onSubmit={handleAuthorization}>
          <h2 className="">Enter Your Secret Key</h2>
          <input
            type="text"
            name="inputKey"
            className="w-72 border mt-4 p-3 rounded-l-xl"
            placeholder="Enter key"
          />
          <input
            type="submit"
            className="px-6 py-[13px] rounded-r-xl bg-white text-black cursor-pointer"
            value="Submit"
          />
        </form>
      </div>
    );
  }

  if (loading)
    return (
      <div className="h-[70vh] flex justify-center items-center">
        <p className="text-gray-400">Loading...</p>
      </div>
    );

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Registration Data</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-[#1a1a1a] border border-gray-700 rounded-lg text-sm">
          <thead>
            <tr className="bg-gray-800 text-gray-200">
              <th className="p-2 border border-gray-700 w-[60px] text-center">
                #
              </th>
              {data.length > 0 &&
                Object.keys(data[0]).map((key) => (
                  <th key={key} className="p-2 border border-gray-700">
                    {key}
                  </th>
                ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr
                key={i}
                className="border-t border-gray-700 hover:bg-gray-800 transition"
              >
                <td className="p-2 border border-gray-700 text-center text-gray-400 font-semibold">
                  {i + 1}
                </td>
                {Object.values(row).map((value, j) => (
                  <td
                    key={j}
                    className="p-2 border border-gray-700 text-gray-300"
                  >
                    {String(value || "")}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Registered;
