"use client";
import { fetchData } from "@/sanity/lib/fetchData";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function Home() {
  const [postData, setPostData] = useState<PostT[] | null>(null);
  useEffect(() => {
    const fetchPosts = async () => {
      const data = await fetchData();
      setPostData(data);
      console.log("postData", postData);
    };
    fetchPosts();
  }, []);

  interface PostT {
    title: string;
    images: string[];
    description: string;
    slug: string;
    _id: string;
    price: number;
  }

  return (
    <div className="flex flex-wrap justify-around gap-y-5">
      {postData?.map((post: PostT) => {
        console.log(post);
        const { title, price, images, description, slug, _id } = post;
        return (
          <div key={_id} className="border-2 w-2/5">
            <Link href={`products/${slug}`}>
              <Image
                src={urlFor(images[0]).url()}
                height={200}
                width={230}
                alt="image"
              />
              <p>{title}</p>
              <p>{description}</p>
              <p>{price}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
