import { client } from "@/sanity/lib/client";
import Image from "next/image";

interface Props {
  params: {
    slug: string;
  };
}
export default async function Product({ params }: Props) {
  console.log("params", params);

  const data = await client.fetch(
    `*[_type=="post" && slug.current=="${params.slug}"]{ title, "image":image.asset->url, price}`
  );
  console.log("data", data);
  const { title, image, price } = data[0];
  return (
    <div>
      <Image src={image} height={300} width={300} alt={title} />
      <p className="text-3xl font-bold">{title}</p>
      <p className="text-xl font-bold text-gray-500">{price}</p>
    </div>
  );
}
