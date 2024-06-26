import { useState, useEffect } from "react";
import { faker } from "@faker-js/faker";

const HomePage = () => {
  const [catsData, setCatsData] = useState([]);
  const [errorMsg, setErrorMsg] = useState("")

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://api.thecatapi.com/v1/images/search?limit=10"
      );
      if (!response.ok) {
        throw new Error("...");
      }
      const data = await response.json();
      console.log(data);
      setCatsData(data);
    } catch (error) {
      console.log(error);
      setErrorMsg(error.message);
    }
  };
};
