import React from "react";

const Form = () => {
  const Entries = ["name", "email", "phone no.", "dob"];
  const Address = ["city", "district", "province", "country"];

  return (
    <>
      <div className="bg-[#f5f5f5] rounded-lg px-5 py-3 md:w-[20vw] w-full md:min-w-64 max-w-100">
        <form action="" method="" className="flex gap-3 flex-col">
          <h1 className="sm:text-3xl text-center text-2xl font-medium mb-2 text-black">
            User Data
          </h1>
          {Entries.map((items, index) => (
            <div className="row flex flex-col">
              <label htmlFor={items} className="uppercase">
                {items}
              </label>
              <input
                type="text"
                id={items}
                name={items}
                className="px-3 py-1 w-full h-fit outline-none rounded-md text-sm"
                placeholder={items}
              />
            </div>
          ))}
          <label htmlFor="address" className="uppercase">
            address
          </label>
          <div className="row flex w-full flex-wrap gap-2 justify-between">
            {Address.map((items, index) => (
              <input
                type="text"
                id={items}
                name={items}
                className="px-3 py-1 w-2/5 h-fit outline-none rounded-md text-xs"
                placeholder={items}
              />
            ))}
          </div>
          <div className="flex justify-between w-full gap-4">
            <input
              className="text-white border-none tracking-wider text-center py-[2px] text-[.7rem] uppercase w-full focus:outline-none rounded bg-black font-bold"
              value="Submit"
            />
            <input
              className="text-black border-none tracking-wider text-center py-[2px] text-[.7rem] uppercase w-full focus:outline-none rounded bg-white font-bold"
              value="Reset"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
