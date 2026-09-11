import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { apiVersion, dataset, projectId } from "./lib/sanity/env";
import { schemaTypes } from "./sanity/schemaTypes";

export default defineConfig({
  name: "taita-conference",
  title: "TAITA Annual Conference",
  projectId: projectId || "",
  dataset,
  apiVersion,
  basePath: "/studio",
  plugins: [structureTool()],
  schema: { types: schemaTypes },
});
