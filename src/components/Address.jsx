import React, { useEffect, useState } from "react";
import axios from "axios";

const Address = () => {
  const cities = ["Cities", "Kathmandu", "Pokhara"];
  const district = ["district", "Kathmandu", "Pokhara"];
  const province = ["province", "Kathmandu", "Pokhara"];

  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("Nepal");


  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedProvince, setSelectedProvince] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const addressData = {
      country: selectedCountry,
      district: selectedDistrict,
      province: selectedProvince,
      city: selectedCity,
    };
    localStorage.setItem('addressData', JSON.stringify(addressData));
  };

  return (
    <>
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

        <select className="uppercase text-sm outline-none rounded sm:w-[45%]">
          {district.map((items) => (
            <>
              <option className="uppercase text-sm" value={items}>
                {items}
              </option>
            </>
          ))}
        </select>

        <select className="uppercase text-sm outline-none rounded sm:w-[45%]">
          {province.map((items) => (
            <>
              <option className="uppercase text-sm" value={items}>
                {items}
              </option>
            </>
          ))}
        </select>

        <select className="uppercase text-sm outline-none rounded sm:w-[45%]">
          {cities.map((items) => (
            <>
              <option className="uppercase text-sm" value={items}>
                {items}
              </option>
            </>
          ))}
        </select>
      </div>
    </>
  );
};

export default Address;
