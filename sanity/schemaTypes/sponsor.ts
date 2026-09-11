import { defineField, defineType } from "sanity";

export default defineType({
  name: "sponsor",
  title: "Sponsor",
  type: "document",
  fields: [
    defineField({ name: "name", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      description: "SVG or transparent PNG",
    }),
    defineField({ name: "url", type: "url" }),
    defineField({
      name: "tier",
      type: "reference",
      to: [{ type: "sponsorTier" }],
      validation: (r) => r.required(),
    }),
    defineField({ name: "order", type: "number" }),
  ],
  preview: {
    select: { title: "name", subtitle: "tier.name", media: "logo" },
  },
});
