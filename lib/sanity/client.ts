import { createClient, type QueryParams } from "next-sanity";
import { apiVersion, dataset, isSanityConfigured, projectId } from "./env";

export const client = isSanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: process.env.NODE_ENV === "production",
    })
  : null;

/**
 * Fetches a GROQ query, returning `fallback` when no Sanity project is
 * configured yet (see lib/content/) or when the request fails.
 */
export async function sanityFetch<T>(
  query: string,
  params: QueryParams,
  fallback: T
): Promise<T> {
  if (!client) return fallback;
  try {
    const result = await client.fetch<T>(query, params);
    return result ?? fallback;
  } catch (err) {
    console.error("Sanity query failed, using seed data:", err);
    return fallback;
  }
}
