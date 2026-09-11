import { defineField, defineType } from "sanity";

// Write-only, from the sponsors page form. Not currently wired up on the
// site (sponsorship applications moved to email / a Google Form — see
// README.md "Open items"), but kept so the pipeline is ready if that
// flow is reinstated.
export default defineType({
  name: "sponsorInquiry",
  title: "Sponsor inquiry",
  type: "document",
  fields: [
    defineField({ name: "company", type: "string", validation: (r) => r.required() }),
    defineField({ name: "contactName", type: "string", validation: (r) => r.required() }),
    defineField({ name: "email", type: "string", validation: (r) => r.required().email() }),
    defineField({ name: "website", type: "url" }),
    defineField({
      name: "tier",
      type: "string",
      options: { list: ["platinum", "gold", "silver", "inKind"] },
    }),
    defineField({ name: "message", type: "text", rows: 4 }),
    defineField({ name: "ref", type: "string", readOnly: true }),
    defineField({ name: "submittedAt", type: "datetime", readOnly: true }),
    defineField({
      name: "status",
      type: "string",
      options: { list: ["new", "contacted", "won", "declined"] },
      initialValue: "new",
    }),
  ],
  preview: {
    select: { title: "company", subtitle: "status" },
  },
});
