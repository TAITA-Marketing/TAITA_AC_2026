import { defineField, defineType } from "sanity";

export default defineType({
  name: "ticket",
  title: "Ticket",
  type: "document",
  fields: [
    defineField({ name: "kind", type: "string", validation: (r) => r.required() }),
    defineField({ name: "price", type: "string", validation: (r) => r.required() }),
    defineField({ name: "description", type: "text", rows: 2 }),
    defineField({ name: "zeffyUrl", title: "Zeffy URL", type: "url" }),
    defineField({ name: "salesEnd", type: "datetime" }),
    defineField({ name: "emphasis", title: "Dark card", type: "boolean", initialValue: false }),
  ],
  preview: {
    select: { title: "kind", subtitle: "price" },
  },
});
