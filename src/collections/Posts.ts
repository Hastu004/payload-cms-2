import { CollectionConfig } from "payload/types";

const Posts: CollectionConfig = {
  slug: "posts",
  auth: false,
  admin: {
    useAsTitle: "name",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "name",
      type: "text",
    },
    {
      name: "enableCoolStuff", // required
      type: "checkbox", // required
      label: "Enable?",
      defaultValue: false,
    },
    { name: "user", type: "relationship", relationTo: "users" },
    {name: "media", type: "relationship", relationTo: "media"},
    {
      name: "description",
      type: "richText",
    },
  ],
};

export default Posts;
