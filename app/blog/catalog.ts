import { blogPosts } from "../data";
import aug20Meta from "../aug20-meta.json";
import aug21Meta from "../aug21-meta.json";
import { aug23BlogBatch } from "../aug23-blog";
import { sep3BlogBatch } from "../sep3-blog";
import { sep4BlogBatch } from "../sep4-content";
import { sep7BlogBatch } from "../sep7-content";
import { sep8BlogBatch } from "../sep8-content";
import { sep9BlogBatch } from "../sep9-content";
import { sep10BlogBatch } from "../sep10-content";
import { sep18bBlogBatch } from "../sep18b-content";
import { sep22BlogBatch } from "../sep22-content";
import { sep23BlogBatch } from "../sep23-content";
import { sep24BlogBatch } from "../sep24-content";
import { sep25BlogBatch } from "../sep25-content";
import { sep28BlogBatch } from "../sep28-blog";
import { oct2BlogBatch } from "../oct2-blog";
import { oct5BlogBatch } from "../oct5-blog";
import { oct8BlogBatch } from "../oct8-content";
import { oct12BlogBatch } from "../oct12-content";
import { oct13BlogBatch } from "../oct13-content";
import { oct22BlogBatch } from "../oct22-content";
import { oct25BlogBatch } from "../oct25-blog";
import { oct26BlogBatch } from "../oct26-blog";
import { oct28BlogBatch } from "../oct28-blog";
import { nov02BlogBatch } from "../nov02-blog";
import { nov04BlogBatch } from "../nov04-blog";
import { nov05BlogBatch } from "../nov05-blog";
import { nov06BlogBatch } from "../nov06-blog";
import { nov03BlogBatch } from "../nov03-blog";
import { oct27BlogBatch } from "../oct27-blog";
const daily = [
    ...nov06BlogBatch.map((p) => [p.slug, { title: p.title, description: p.description, published: p.published, image: p.featuredImage, minutes: p.minutes }] as const),
    ...nov05BlogBatch.map((p) => [p.slug, { title: p.title, description: p.description, published: p.published, image: p.featuredImage, minutes: p.minutes }] as const),
    ...nov04BlogBatch.map((p) => [p.slug, { title: p.title, description: p.description, published: p.published }] as const),
    ...nov03BlogBatch.map((p) => [p.slug, { title: p.title, description: p.description, published: p.published }] as const),
    ...nov02BlogBatch.map((p) => [p.slug, { title: p.title, description: p.description, published: p.published }] as const),
    ...oct28BlogBatch.map((p) => [p.slug, { title: p.title, description: p.description, published: p.published }] as const),
    ...oct27BlogBatch.map((p) => [p.slug, { title: p.title, description: p.description, published: p.published }] as const),
    ...oct26BlogBatch.map((p) => [p.slug, { title: p.title, description: p.description, published: p.published }] as const),
    ...oct25BlogBatch.map((p) => [p.slug, { title: p.title, description: p.description, published: p.published }] as const),
    ...oct22BlogBatch.map((p) => [p.slug, { title: p.title, description: p.description, published: p.published }] as const),
    ...oct13BlogBatch.map((p) => [p.slug, { title: p.title, description: p.description, published: p.published }] as const),
    ...oct12BlogBatch.map((p) => [p.slug, { title: p.title, description: p.description, published: p.published }] as const),
    ...oct8BlogBatch.map(
      (p) => [p.slug, { title: p.title, description: p.description, published: p.published }] as const,
    ),
    ...oct5BlogBatch.map(
      (p) => [p.slug, { title: p.title, description: p.description }] as const,
    ),
    ...oct2BlogBatch.map(
      (p) => [p.slug, { title: p.title, description: p.description }] as const,
    ),
    ...sep28BlogBatch.map(
      (p) => [p.slug, { title: p.title, description: p.description }] as const,
    ),
    ...sep25BlogBatch.map(
      (p) => [p.slug, { title: p.title, description: p.description }] as const,
    ),
    ...sep24BlogBatch.map(
      (p) => [p.slug, { title: p.title, description: p.description }] as const,
    ),
    ...sep23BlogBatch.map(
      (p) => [p.slug, { title: p.title, description: p.description }] as const,
    ),
    ...sep22BlogBatch.map(
      (p) => [p.slug, { title: p.title, description: p.description }] as const,
    ),
    ...sep18bBlogBatch.map(
      (p) => [p.slug, { title: p.title, description: p.description }] as const,
    ),
    ...sep10BlogBatch.map(
      (p) => [p.slug, { title: p.title, description: p.description }] as const,
    ),
    ...sep9BlogBatch.map(
      (p) => [p.slug, { title: p.title, description: p.description }] as const,
    ),
    ...sep8BlogBatch.map(
      (p) => [p.slug, { title: p.title, description: p.description }] as const,
    ),
    ...sep7BlogBatch.map(
      (p) => [p.slug, { title: p.title, description: p.description }] as const,
    ),
    ...sep4BlogBatch.map(
      (p) => [p.slug, { title: p.title, description: p.description }] as const,
    ),
    ...sep3BlogBatch.map(
      (p) => [p.slug, { title: p.title, description: p.description }] as const,
    ),
    ...aug23BlogBatch.map(
      (p) => [p.slug, { title: p.title, description: p.description }] as const,
    ),
    ...Object.entries(aug21Meta),
    ...Object.entries(aug20Meta),
  ].map(([slug, p]) => ({
    slug,
    title: p.title,
    excerpt: p.description,
    image: "image" in p && typeof p.image === "string" ? p.image : undefined,
    minutes: "minutes" in p && typeof p.minutes === "number" ? p.minutes : 8,
    published: "published" in p ? p.published : undefined,
  }));
const latest = blogPosts.filter((p) => p.detail?.published === "2026-09-02");
const earlier = blogPosts.filter((p) => p.detail?.published !== "2026-09-02");
export const allPosts = [...daily.slice(0, 24), ...latest, ...daily.slice(24), ...earlier];
export const blogPageCount = Math.max(1, Math.ceil(allPosts.length / 20));
