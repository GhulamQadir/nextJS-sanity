"use client";
import { fetchData } from "@/sanity/lib/fetchData";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { useEffect, useState } from "react";
export default function Home() {
  const [postData, setPostData] = useState(null);
  useEffect(() => {
    const fetchPosts = async () => {
      const data = await fetchData();
      setPostData(data);
    };
    fetchPosts();
  }, []);
  return (
    <div className="flex flex-wrap justify-around gap-y-5">
      {postData?.map((post: any, index: number) => {
        const { image, title, price, description } = post;
        console.log(urlFor(image).url());
        return (
          <div key={index} className="border-2 w-2/5">
            <Image
              src={urlFor(image).url()}
              height={200}
              width={230}
              alt="image"
            />
            <p>{title}</p>
            <p>{description}</p>
            <p>{price}</p>
          </div>
        );
      })}
    </div>
  );
}
