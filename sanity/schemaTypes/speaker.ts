import { defineField, defineType } from "sanity";

export default defineType({
  name: "speaker",
  title: "Speaker",
  type: "document",
  fields: [
    defineField({ name: "name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "role", type: "string" }),
    defineField({ name: "company", type: "string" }),
    defineField({
      name: "headshot",
      title: "Headshot",
      type: "image",
      description: "Square, 1200×1200 or larger",
      options: { hotspot: true },
    }),
    defineField({ name: "bio", type: "text", rows: 3 }),
    defineField({ name: "track", type: "string" }),
    defineField({ name: "linkedin", type: "url" }),
    defineField({ name: "isKeynote", title: "Is keynote", type: "boolean", initialValue: false }),
    defineField({ name: "order", type: "number" }),
  ],
  orderings: [{ name: "order", title: "Display order", by: [{ field: "order", direction: "asc" }] }],
  preview: {
    select: { title: "name", subtitle: "role", media: "headshot" },
  },
});
