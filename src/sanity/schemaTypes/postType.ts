import { defineField, defineType } from "sanity";

export const postType = defineType({
  name: "post", // code level for identification
  title: "Post",
  type: "document",
  fields: [
    // defineField({
    //   name: "image",
    //   title: "Image",
    //   type: "image",
    // }),
    {
      name: "images",
      type: "array",
      title: "Images",
      of: [
        {
          type: "image",
        },
      ],
      options: {
        validation: {
          max: 3, // Allow a maximum of 10 images
        },
      },
    },
    defineField({
      name: "title",
      title: "Post Title",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 50,
      },
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Men", value: "men" },
          { title: "Women", value: "women" },
          { title: "Kids", value: "kids" },
        ],
      },
    }),
  ],
});
