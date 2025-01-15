"use client";
import { client } from "./client";

const fetchData = async () => {
  const data: any = await client.fetch(
    "*[_type=='post']{images, title, price, description,_id, 'slug':slug.current}"
  );
  return data;
};
export { fetchData };
