import { defineCollection, z } from "astro:content";

// 記事は src/content/articles/ に .md を1枚足すだけで増やせる。
const articles = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // 公開日・更新日（E-E-A-T / 鮮度のため両方推奨）
    publishedAt: z.string(),
    updatedAt: z.string().optional(),
    // カテゴリ（管理 / 活用 / 売却 / 相続 / 費用 / 制度 など）
    category: z.string().default("空き家"),
    // 対応エリア記事の場合の市区町村（SEOの軸）
    area: z.string().optional(),
    // 監修者・執筆者（信頼性表示）
    author: z.string().default("編集部"),
    draft: z.boolean().default(false),
  }),
});

export const collections = { articles };
