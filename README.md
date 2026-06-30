# かながわ空き家活用ガイド（静的サイト雛形）

神奈川県の空き家「管理・活用・売却・解体」の**比較サイト**雛形です。Astro（静的サイト生成）でできています。
**広告（有料掲載）を直接営業して載せる**運用を前提に、編集コンテンツ（中立）と広告枠（有料・PR表記）を構造的に分けてあります。

姉妹サイト「かながわ遺品整理ガイド」と同じ設計思想・同じディレクトリ構成で、**配色（深いティール × テラコッタ）だけ空き家テーマに変えて**います。

## セットアップ

```bash
npm install
npm run dev      # ローカル開発（http://localhost:4321）
npm run build    # dist/ に静的書き出し
npm run preview  # ビルド結果の確認
```

Vercel / Cloudflare Pages / Netlify などにそのままデプロイできます（出力先 `dist/`）。
デプロイ後、`astro.config.mjs` と `src/config/site.ts` の `url` を本番URLに変更してください。

## ディレクトリ構成

```
akiya-kanagawa/
├── astro.config.mjs          # site(公開URL)などの設定
├── package.json
├── src/
│   ├── config/
│   │   └── site.ts           # サイト名・運営者・対応エリア(5区分)・ナビ（ここを最初に編集）
│   ├── data/
│   │   ├── providers.ts      # 比較表の事業者データ（= 中立の編集情報。現状サンプル）
│   │   └── ads.ts            # 広告枠データ（= 有料掲載。PR表記される）
│   ├── content/
│   │   ├── config.ts         # 記事のフロントマター定義
│   │   └── articles/         # ★記事は .md を1枚足すだけで増える
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro       # 運営者情報・広告を含む旨の注記
│   │   ├── PrBadge.astro      # 「広告/PR」バッジ
│   │   ├── AdSlot.astro       # ★広告枠（PR表記つき・rel=sponsored）
│   │   └── ComparisonTable.astro  # ★比較表（エリア別・中立・非ランキング）
│   ├── layouts/
│   │   └── BaseLayout.astro   # head/フォント/構造化データ
│   ├── pages/
│   │   ├── index.astro        # ★トップ（ヒーロー＋4方向ガイド＋広告枠＋比較表＋FAQ＋新着）
│   │   ├── articles/
│   │   │   ├── index.astro    # 記事一覧
│   │   │   └── [...slug].astro# 記事描画（記事末に広告枠）
│   │   ├── advertise.astro    # 掲載をご希望の事業者へ（営業着地ページ）
│   │   ├── disclosure.astro   # 広告・PR表記ポリシー（ステマ規制対応）
│   │   ├── about.astro        # 運営者情報
│   │   └── privacy.astro      # プライバシーポリシー
│   └── styles/
│       └── global.css         # デザイントークン（配色・書体）
```

## 比較表の軸（空き家版）

遺品整理版から比較軸を空き家向けに変更しています。`providers.ts` の各事業者に以下を持たせます。

- `monthlyFee`：月額管理費の目安（高単価ニッチの肝＝ストック収益）
- `patrol`：巡回頻度／報告方法（遠方家族向けに写真・LINE報告の有無を可視化）
- `manage` / `utilize` / `sell` / `demolish`：管理／活用（賃貸・リノベ）／売却（買取・仲介）／解体の対応可否
- `areas`：主な対応エリア、`feature`：中立的な特徴

対応エリアは `site.ts` の `regions` で **5区分**（横浜・川崎／横須賀・三浦／湘南／県央／西湘）に分けています。

## よくある編集作業

### 記事を1本追加する
`src/content/articles/` に `.md` を1枚追加するだけ。フロントマターは既存記事をコピーして使う。
一覧・トップの新着・URL（`/articles/スラッグ/`）は自動で反映される。

### 比較表に事業者を追加する
`src/data/providers.ts` の配列に1件足す。これは**中立の編集情報**であり、有料枠ではない。
`regions` に区分ID（`site.ts` の `regions[].id`）を入れると、そのエリアの表に並ぶ。

### 広告（有料掲載）を追加する
`src/data/ads.ts` の配列に1件足し、`active: true` に。表示したいページの該当箇所に
`<AdSlot slot="top" />` のように置く（slot: `top` / `area` / `article-inline` / `article-bottom` / `sidebar`）。
`slot="area"` は `region` を指定すると、そのエリアの比較表直下にだけ出る。
広告は必ず「広告」バッジ・広告主名・`rel="sponsored"` が付く。

## 設計上の重要ポイント（景表法・ステマ規制）

- **編集コンテンツ（中立）と広告枠（有料）を構造的に分離**。比較表＝`providers.ts`、広告＝`ads.ts`。
- 比較表は**ランキングではない**。並び順は事業者名の五十音順（`order` 昇順）でキャプションに明示。
- 広告には**「広告/PR」表記**と広告主名を必須化（`AdSlot` が自動で出す）。
- 「No.1」「絶対」等の根拠なき断定や、有利誤認・優良誤認となる表現は使わない。
- 詳細は `/disclosure/`（広告・PR表記ポリシー）に明記。

## 事業者データについて（重要）

- `providers.ts` の事業者は、**各社公式サイト等の公開情報（2026年6月時点・編集部調べ）をもとにした実在事業者**です。各 provider の `url` が確認元です。
- 料金が公式に明示されていない社は、数字を推測せず **`要問合せ`** としています。
- `manage`/`utilize`/`sell`/`demolish` は**公式記載で確認できたものだけ `true`** にしています。`false`（表では「—」）は「非対応」の断定ではなく**「記載を確認できず＝要確認」**の意味です。
- 公開・運用前に、各社へ**最新の料金・対応可否を改めて確認**し、必要に応じて加筆・修正してください（料金は変動します）。

## ⚠ そのほか公開前にやること

- `src/config/site.ts` の運営者情報・連絡先・`contactForm`・`gaId`・`url` を実値に。
- `src/data/ads.ts` の広告枠はサンプルです。契約した案件に差し替え（未契約なら `active: false`）。
- OGP画像が必要なら `public/ogp.png`（1200x630）を置き、`site.ogImage` に `/ogp.png` を設定。
