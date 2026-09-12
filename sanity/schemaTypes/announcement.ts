import { defineField, defineType } from "sanity";

// Site-wide banner shown below the header. Only one should be active at a
// time; the front end picks the most recently updated active one.
export default defineType({
  name: "announcement",
  title: "Announcement",
  type: "document",
  fields: [
    defineField({ name: "message", type: "string", validation: (r) => r.required() }),
    defineField({ name: "ctaLabel", title: "CTA label", type: "string" }),
    defineField({ name: "ctaUrl", title: "CTA URL", type: "url" }),
    defineField({ name: "isActive", title: "Active", type: "boolean", initialValue: false }),
    defineField({
      name: "expiresAt",
      title: "Expires at",
      type: "datetime",
      description: "Optional. Once this time passes, the banner stops showing even if Active is still on.",
    }),
  ],
  preview: {
    select: { title: "message", active: "isActive" },
    prepare({ title, active }) {
      return { title, subtitle: active ? "Active" : "Inactive" };
    },
  },
});
