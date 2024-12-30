"use client";
import { client } from "./client";

const fetchData = async () => {
  const data: any = await client.fetch("*[_type=='post']");
  return data;
};
export { fetchData };
