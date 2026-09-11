import { defineField, defineType } from "sanity";

// priceLabel/availabilityLabel/benefits were dropped per README.md — the
// site shows neither prices nor a benefits table.
export default defineType({
  name: "sponsorTier",
  title: "Sponsor tier",
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "string",
      options: { list: ["Super Diamond", "Diamond", "Emerald", "Platinum", "Gold"] },
      validation: (r) => r.required(),
    }),
    defineField({ name: "order", type: "number" }),
  ],
  preview: { select: { title: "name" } },
});
