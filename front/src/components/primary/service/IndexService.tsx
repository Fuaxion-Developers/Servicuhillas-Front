"use client";
import Head from "./head/Head";
import Figures from "./figures/Figures";
import Industry from "./industry/Industry";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { IndustryT } from "@/types/industry";
import Papa from "papaparse";

const IndexService = () => {
  const [industries, setIndustries] = useState<IndustryT[]>();

  const fetchData = async () => {
    const url = process.env.NEXT_PUBLIC_SERVICES_URL;

    if (!url) throw new Error("LA url no está definida");

    const response = await fetch(url).then((res) => res.text());

    const gettingIndustries = Papa.parse(response, {
      header: true,
      skipEmptyLines: true,
    });

    const industries = gettingIndustries.data as IndustryT[];

    return industries;
  };

  useEffect(() => {
    const getData = async () => {
      const data = await fetchData();
      console.log(data);
      setIndustries(data);
    };
    getData();
  }, []);

  return (
    <Box
      sx={{
        marginTop: "150px",
      }}
    >
      <Head></Head>
      {industries?.map((industry) => {
        return <Industry key={industry.number} industry={industry}></Industry>;
      })}
      <Figures></Figures>
    </Box>
  );
};

export default IndexService;
