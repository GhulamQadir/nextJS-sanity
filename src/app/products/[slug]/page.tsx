import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

interface Props {
  params: {
    slug: string;
  };
}
export default async function Product({ params }: Props) {
  console.log("params", params);

  const data = await client.fetch(
    `*[_type=="post" && slug.current=="${params.slug}"]{ title, images, price}`
  );
  console.log("data", data);
  const { title, images, price } = data[0];
  return (
    <div>
      <Image
        src={urlFor(images[0]).url()}
        height={300}
        width={300}
        alt={title}
      />
      <p className="text-3xl font-bold">{title}</p>
      <p className="text-xl font-bold text-gray-500">{price}</p>
    </div>
  );
}
