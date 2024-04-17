import React from "react";
import Button from "../reusableComponents/Button";

const Result = () => {
  return (
    <>
      <>
        <section className="bg-white overflow-x-scroll md:overflow-x-hidden">
          <div className="container">
            <div className="flex flex-col text-center">
              <h1 className="sm:text-3xl text-2xl font-medium mb-2 text-black">
                User Listing
              </h1>
            </div>
            <div className="w-full mx-auto overflow-auto">
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
                  <tr>
                    <td className="px-[.3rem] py-1">Nothing Everything</td>
                    <td className="px-[.3rem] py-1">
                      nothingeverything@gmail.com
                    </td>
                    <td className="px-[.3rem] py-1">3355659845</td>
                    <td className="px-[.3rem] py-1">2012/12/5</td>
                    <td className="px-[.3rem] py-1">
                      Kathmandu, Kathmandu, Bagmati, Nepal
                    </td>
                    <td className="px-[.3rem] py-1 w-fit">
                      <Button
                        buttonName="edit"
                        background="black"
                        text="white"
                      />
                    </td>
                    <td className="px-[.3rem] py-1 w-fit">
                      <Button
                        buttonName="delete"
                        background="red"
                        text="black"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="px-[.3rem] py-1">Nothing Everything</td>
                    <td className="px-[.3rem] py-1">
                      nothingeverything@gmail.com
                    </td>
                    <td className="px-[.3rem] py-1">3355659845</td>
                    <td className="px-[.3rem] py-1">2012/12/5</td>
                    <td className="px-[.3rem] py-1">
                      Kathmandu, Kathmandu, Bagmati, Nepal
                    </td>
                    <td className="px-[.3rem] py-1 w-fit">
                      <Button
                        buttonName="edit"
                        background="black"
                        text="white"
                      />
                    </td>
                    <td className="px-[.3rem] py-1  w-fit">
                      <Button
                        buttonName="delete"
                        background="red"
                        text="black"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </>
    </>
  );
};

export default Result;
