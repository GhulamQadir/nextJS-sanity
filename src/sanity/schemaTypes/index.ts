import { type SchemaTypeDefinition } from "sanity";
import { postType } from "./postType";
import { productType } from "./product";
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [postType, productType],
};
