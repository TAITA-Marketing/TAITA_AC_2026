import { defineField, defineType } from "sanity";

export default defineType({
  name: "session",
  title: "Session",
  type: "document",
  fields: [
    defineField({ name: "startTime", type: "datetime", validation: (r) => r.required() }),
    defineField({ name: "durationMinutes", type: "number", validation: (r) => r.required() }),
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "description", type: "text", rows: 3 }),
    defineField({ name: "track", type: "string" }),
    defineField({ name: "room", type: "string" }),
    defineField({
      name: "speakers",
      type: "array",
      of: [{ type: "reference", to: [{ type: "speaker" }] }],
    }),
    defineField({
      name: "emphasis",
      title: "Row fill",
      type: "string",
      options: { list: ["light", "mint", "dark"] },
      initialValue: "light",
    }),
  ],
  orderings: [{ name: "startTime", title: "Start time", by: [{ field: "startTime", direction: "asc" }] }],
  preview: {
    select: { title: "title", subtitle: "track" },
  },
});
