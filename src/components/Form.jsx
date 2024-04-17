import React, { useEffect, useState } from "react";
import axios from "axios";
import Address from "./Address";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [dob, setDob] = useState("");

  const [formData, setFormData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    let storedData = localStorage.getItem("formData");
    let parsedData = [];

    try {
      parsedData = JSON.parse(storedData) || [];
      if (!Array.isArray(parsedData)) {
        parsedData = []; // Ensure parsedData is an array
      }
    } catch (error) {
      console.error("Error parsing stored data:", error);
    }

    const updatedData = [
      ...parsedData,
      {
        name,
        email,
        phoneNo,
        dob,
        selectedCountry,
        selectedDistrict,
        selectedProvince,
        selectedCity,
      },
    ];

    localStorage.setItem("formData", JSON.stringify(updatedData));
    setFormData({});
  };

  const cities = ["Kathmandu", "Pokhara"];
  const district = ["Kathmandu", "Pokhara"];
  const province = ["Kathmandu", "Pokhara"];

  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("Nepal");

  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  useEffect(() => {
    axios.interceptors.response.use(
      (response) => response,
      (error) => {
        console.error("Request failed:", error);
        return Promise.reject(error);
      }
    );

    const fetchCountries = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        const sortedCountries = response.data
          .map((country) => country.name.common)
          .sort();
        setCountries(sortedCountries);
      } catch (error) {
        console.error("Failed to fetch countries:", error);
      }
    };

    fetchCountries();
    return () => {
      axios.interceptors.response.eject();
    };
  }, []);

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const handleDistrictChange = (event) => {
    setSelectedDistrict(event.target.value);
  };

  const handleProvinceChange = (event) => {
    setSelectedProvince(event.target.value);
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  return (
    <>
      <div className="bg-[#f5f5f5] rounded-lg px-5 py-3 md:w-[20vw] w-full md:min-w-64 max-w-100">
        <form
          onSubmit={handleSubmit}
          action=""
          method=""
          className="flex gap-3 flex-col"
        >
          <h1 className="sm:text-3xl text-center text-2xl font-medium mb-2 text-black">
            User Data
          </h1>
          <div className="row flex flex-col">
            <label htmlFor="name" className="uppercase">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="px-3 py-1 w-full h-fit outline-none rounded-md text-sm"
              placeholder="Name"
              required
            />
          </div>

          <div className="row flex flex-col">
            <label htmlFor="email" className="uppercase">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-3 py-1 w-full h-fit outline-none rounded-md text-sm"
              placeholder="Email"
              required
            />
          </div>

          <div className="row flex flex-col">
            <label htmlFor="phoneNo" className="uppercase">
              Phone No.
            </label>
            <input
              type="text"
              id="phoneNo"
              name="phoneNo"
              value={phoneNo}
              onChange={(e) => setPhoneNo(e.target.value)}
              className="px-3 py-1 w-full h-fit outline-none rounded-md text-sm"
              placeholder="Phone No."
              required
            />
          </div>

          <div className="row flex flex-col">
            <label htmlFor="dob" className="uppercase">
              Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="px-3 py-1 w-full h-fit outline-none rounded-md text-sm"
              placeholder="Date of Birth"
              required
            />
          </div>

          <label className="uppercase -mb-2">Address</label>
          {/* <Address /> */}
          <div className="row flex w-full flex-wrap gap-2 justify-between overflow-hidden">
            <select
              className="uppercase text-sm outline-none rounded sm:w-[45%]"
              value={selectedCountry}
              onChange={handleCountryChange}
            >
              <option value="">Select a country</option>
              {countries.map((country, index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              ))}
            </select>

            <select
              className="uppercase text-sm outline-none rounded sm:w-[45%]"
              value={selectedDistrict}
              onChange={handleDistrictChange}
            >
              <option value="">Select a district</option>
              {district.map((items, index) => (
                <>
                  <option
                    className="uppercase text-sm"
                    key={index}
                    value={items}
                  >
                    {items}
                  </option>
                </>
              ))}
            </select>

            <select
              className="uppercase text-sm outline-none rounded sm:w-[45%]"
              value={selectedProvince}
              onChange={handleProvinceChange}
            >
              <option value="">Select a province</option>
              {province.map((items, index) => (
                <>
                  <option
                    className="uppercase text-sm"
                    key={index}
                    value={items}
                  >
                    {items}
                  </option>
                </>
              ))}
            </select>

            <select
              className="uppercase text-sm outline-none rounded sm:w-[45%]"
              value={selectedCity}
              onChange={handleCityChange}
            >
              <option value="">Select a city</option>
              {cities.map((items, index) => (
                <>
                  <option
                    className="uppercase text-sm"
                    key={index}
                    value={items}
                  >
                    {items}
                  </option>
                </>
              ))}
            </select>
          </div>
          <div className="w-full">
            <input
              className="text-white border-none tracking-wider text-center py-[2px] text-[.7rem] uppercase focus:outline-none rounded bg-black font-bold px-0 w-full hover:cursor-pointer hover:bg-[#0e0e0e] hover:text-[#f5f5f5]"
              value="Add"
              type="submit"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
