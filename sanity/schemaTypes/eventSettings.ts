import { defineField, defineType } from "sanity";

export default defineType({
  name: "eventSettings",
  title: "Event settings",
  type: "document",
  fields: [
    defineField({ name: "eventDate", type: "datetime", validation: (r) => r.required() }),
    defineField({ name: "doorsOpen", type: "string" }),
    defineField({ name: "venueName", type: "string" }),
    defineField({ name: "address", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "mapUrl", type: "url" }),
    defineField({ name: "roomBlockUrl", type: "url" }),
    defineField({ name: "heroHeadline", type: "text", rows: 2 }),
    defineField({ name: "heroSubhead", type: "text", rows: 3 }),
    defineField({
      name: "stats",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "number", type: "string" },
            { name: "label", type: "string" },
          ],
        },
      ],
    }),
    defineField({
      name: "socialLinks",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", type: "string" },
            { name: "url", type: "url" },
          ],
        },
      ],
    }),
    defineField({ name: "contactEmails", type: "array", of: [{ type: "string" }] }),
  ],
  preview: {
    prepare() {
      return { title: "Event settings" };
    },
  },
});
