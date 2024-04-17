import React from "react";
import Button from "../reusableComponents/Button";

const Result = () => {
  const storedDataString = localStorage.getItem("formData");
  const [storedData, setStoredData] = React.useState(
    storedDataString ? JSON.parse(storedDataString) : []
  );

  const handleDelete = (index) => {
    const updatedData = [...storedData];
    updatedData.splice(index, 1);
    localStorage.setItem("formData", JSON.stringify(updatedData));
    setStoredData(updatedData);
  };

  
  return (
    <section className="bg-white overflow-x-scroll md:overflow-x-hidden">
      <div className="container">
        <div className="flex flex-col text-center">
          <h1 className="sm:text-3xl text-2xl font-medium mb-2 text-black">
            User Listing
          </h1>
        </div>
        <div className="w-full mx-auto overflow-auto">
          {storedData.length > 0 ? (
            <table className="table-auto w-full text-left whitespace-no-wrap">
              <thead>
                <tr>
                  <th className="px-[.3rem] py-1 tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl uppercase">
                    Name
                  </th>
                  <th className="px-[.3rem] py-1 tracking-wider font-medium text-gray-900 text-sm bg-gray-100 uppercase">
                    Email
                  </th>
                  <th className="px-[.3rem] py-1 tracking-wider font-medium text-gray-900 text-sm bg-gray-100 uppercase">
                    Phone No.
                  </th>
                  <th className="px-[.3rem] py-1 tracking-wider font-medium text-gray-900 text-sm bg-gray-100 uppercase">
                    DOB
                  </th>
                  <th className="px-[.3rem] py-1 tracking-wider font-medium text-gray-900 text-sm bg-gray-100 uppercase">
                    Address
                  </th>
                  <th className="px-[.3rem] py-1 tracking-wider font-medium text-gray-900 text-sm bg-gray-100"></th>
                  <th className="px-[.3rem] py-1 tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br"></th>
                </tr>
              </thead>
              <tbody className="text-xs">
                {storedData.map((dataItem, index) => (
                  <tr key={index}>
                    <td className="px-[.3rem] py-1">{dataItem.name}</td>
                    <td className="px-[.3rem] py-1">{dataItem.email}</td>
                    <td className="px-[.3rem] py-1">{dataItem["phone no."]}</td>
                    <td className="px-[.3rem] py-1">{dataItem.dob}</td>
                    <td className="px-[.3rem] py-1">
                      {dataItem.selectedCountry}, {dataItem.selectedDistrict},{" "}
                      {dataItem.selectedProvince}, {dataItem.selectedCity}
                    </td>
                    <td className="px-[.3rem] py-1 w-fit">
                      <button
                        type="submit"
                        className={`text-white border-none tracking-wider py-[.5px] text-[.6rem] lowercase px-[.5rem] focus:outline-none rounded bg-black`}
                      >
                        edit
                      </button>
                    </td>
                    <td className="px-[.3rem] py-1 w-fit">
                      <button
                        type="submit"
                        className={`text-white border-none tracking-wider py-[.5px] text-[.6rem] lowercase px-[.5rem] focus:outline-none rounded bg-red`}
                        onClick={() => handleDelete(index)}
                      >
                        delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No user data available.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Result;
