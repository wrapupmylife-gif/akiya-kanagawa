// =============================================================
// サイト全体の設定。運営者情報・連絡先・エリアをここで一元管理。
// 特商法・運営者情報の表示に使うので、本番では正確な値に。
// =============================================================
export const site = {
  name: "かながわ空き家活用ガイド",
  tagline: "神奈川県の空き家を、管理・活用・売却から落ち着いて選ぶために。",
  // トップページ等のメタディスクリプション（検索結果に出る説明文）
  description:
    "神奈川県（横浜・川崎／横須賀・三浦／湘南／県央／西湘）の空き家管理・活用・売却・解体サービスを、月額管理費の目安・巡回頻度・対応内容で比較できる中立の情報サイト。相続した実家の空き家をどうするか迷うご家族のための比較・記事サイトです。",
  // OGP画像（SNSシェア時のサムネ・1200x630）。public/ogp.png を置いたら "/ogp.png" を指定。
  ogImage: "",
  // OGP/HTMLのロケール
  locale: "ja_JP",
  // Google Search Console の所有権確認コード（HTMLタグ方式）。
  googleSiteVerification: "",
  // Google アナリティクス(GA4) の測定ID（例: "G-XXXXXXXXXX"）。空なら計測なし。
  gaId: "",
  // 公開URL（astro.config.mjs の site と揃える）
  url: "https://akiya-kanagawa.wrapupmylife.workers.dev",
  // 対応エリア（記事・比較表の絞り込みやSEOの軸に使う）
  area: "神奈川県",
  // 対応エリアは下記の区分に分けて扱う（比較表・導線の軸）。
  // id は providers.ts の regions（区分の割り当て）と対応させること。
  regions: [
    {
      id: "yokohama-kawasaki",
      name: "横浜・川崎",
      summary: "横浜市・川崎市の市街地エリア。",
      cities: ["横浜市", "川崎市"],
    },
    {
      id: "miura",
      name: "横須賀・三浦（三浦半島）",
      summary: "横須賀・三浦・逗子・葉山の三浦半島エリア。",
      cities: ["横須賀市", "三浦市", "逗子市", "葉山町"],
    },
    {
      id: "shonan",
      name: "湘南（鎌倉〜平塚）",
      summary: "鎌倉から平塚までの湘南沿岸エリア。",
      cities: ["鎌倉市", "藤沢市", "茅ヶ崎市", "寒川町", "平塚市", "大磯町"],
    },
    {
      id: "kenou",
      name: "県央（厚木・海老名・伊勢原）",
      summary: "厚木・海老名・伊勢原・秦野の内陸エリア。",
      cities: ["厚木市", "海老名市", "伊勢原市", "秦野市", "座間市", "綾瀬市", "愛川町"],
    },
    {
      id: "seisho",
      name: "西湘（大磯以西）",
      summary: "大磯より西の県西エリア（箱根・湯河原を含む）。",
      cities: ["小田原市", "南足柄市", "箱根町", "湯河原町", "真鶴町", "大井町", "松田町", "山北町"],
    },
  ],
  // お問い合わせ・広告掲載の依頼フォーム（Googleフォーム等）。
  // メールアドレスは公開せず、このフォームに誘導する。
  contactForm: "https://example.com/contact",
  // 運営者情報（運営者ページ・フッターに表示）
  operator: {
    name: "かながわ終活ナビ",
    contact: "contact@example.com",
  },
} as const;

// ナビゲーション
export const nav = [
  { label: "トップ", href: "/" },
  { label: "サービスを比較", href: "/#compare" },
  { label: "記事一覧", href: "/articles/" },
  { label: "掲載をご希望の事業者へ", href: "/advertise/" },
  { label: "運営者情報", href: "/about/" },
] as const;
