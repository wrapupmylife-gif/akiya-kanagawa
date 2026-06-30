// =============================================================
// 広告枠（= 有料掲載）のデータ。
// ここに入るものは「企業からお金をもらって載せる枠」です。
// 表示する AdSlot コンポーネントが、必ず「広告 / PR」バッジと
// 「有料掲載」の旨を出すようにしてあります（ステマ規制対応）。
//
// 編集記事（中立）と広告枠（有料）を構造的に分けるための入口。
// 営業して獲得した案件は、原則ここに追加 → ページに <AdSlot> を置く。
// =============================================================

export type Ad = {
  id: string;
  // 掲載スロットの位置キー（ページ側で slot を指定して呼び出す）
  // "area" は各エリアの比較表直下の広告枠（region でエリアを指定）。
  slot: "top" | "area" | "article-inline" | "article-bottom" | "sidebar";
  // slot="area" のときの対象エリア区分（site.ts の regions[].id）。
  // 省略すると全エリア共通の広告として扱う。
  region?: string;
  advertiser: string;       // 広告主名（PR表記とセットで明示）
  headline: string;
  body: string;
  ctaLabel: string;
  href: string;             // 遷移先（計測パラメータを付ける場合もここで）
  active: boolean;          // 掲載期間外は false にして非表示
};

// ダミー。契約した案件をここに追加していく。
export const ads: Ad[] = [
  {
    id: "ad-top-001",
    slot: "top",
    advertiser: "広告主サンプル株式会社",
    headline: "相続した空き家、まずは無料査定から",
    body: "神奈川県全域の空き家の管理・活用・売却をワンストップでサポート。",
    ctaLabel: "無料で相談・査定を依頼する",
    href: "https://example.com/lp?utm_source=akiya-guide&utm_medium=ad&utm_campaign=top",
    active: false,
  },
  {
    id: "ad-article-001",
    slot: "article-bottom",
    advertiser: "広告主サンプル株式会社",
    headline: "放置のリスクが不安な方へ：まずは現地点検から",
    body: "巡回・換気・通水・外観点検つきの管理プランをご案内します。",
    ctaLabel: "管理プランの相談をする",
    href: "https://example.com/lp?utm_source=akiya-guide&utm_medium=ad&utm_campaign=article",
    active: false,
  },

  // --- 各エリア比較表の直下に出る広告枠（サンプル） ---
  // region を比較表の区分IDに合わせると、そのエリアにだけ表示されます。
  // 契約前のサンプルです。掲載しない場合は active:false にしてください。
  {
    id: "ad-area-yokohama-kawasaki",
    slot: "area",
    region: "yokohama-kawasaki",
    advertiser: "広告主サンプル株式会社",
    headline: "横浜・川崎エリア対応｜空き家の管理・売却",
    body: "横浜市・川崎市の空き家を、定期巡回から売却・活用までサポートします。",
    ctaLabel: "このエリアで無料相談する",
    href: "https://example.com/lp?utm_source=akiya-guide&utm_medium=ad&utm_campaign=area-yokohama",
    active: false,
  },
  {
    id: "ad-area-miura",
    slot: "area",
    region: "miura",
    advertiser: "広告主サンプル株式会社",
    headline: "三浦半島対応｜海沿い・別荘地の空き家管理",
    body: "横須賀・三浦・逗子・葉山の塩害対策や別荘の遠隔管理にも対応。",
    ctaLabel: "このエリアで無料相談する",
    href: "https://example.com/lp?utm_source=akiya-guide&utm_medium=ad&utm_campaign=area-miura",
    active: false,
  },
  {
    id: "ad-area-shonan",
    slot: "area",
    region: "shonan",
    advertiser: "広告主サンプル株式会社",
    headline: "湘南エリア対応｜古民家の活用もご相談ください",
    body: "鎌倉・藤沢・茅ヶ崎・平塚の空き家を、管理から賃貸活用までサポート。",
    ctaLabel: "このエリアで無料相談する",
    href: "https://example.com/lp?utm_source=akiya-guide&utm_medium=ad&utm_campaign=area-shonan",
    active: false,
  },
  {
    id: "ad-area-kenou",
    slot: "area",
    region: "kenou",
    advertiser: "広告主サンプル株式会社",
    headline: "県央エリア対応｜厚木・海老名・伊勢原",
    body: "県央エリアの空き家の管理・除草・解体・売却に対応。お見積りは無料です。",
    ctaLabel: "このエリアで無料相談する",
    href: "https://example.com/lp?utm_source=akiya-guide&utm_medium=ad&utm_campaign=area-kenou",
    active: false,
  },
  {
    id: "ad-area-seisho",
    slot: "area",
    region: "seisho",
    advertiser: "広告主サンプル株式会社",
    headline: "西湘エリア対応｜小田原・箱根・湯河原",
    body: "別荘地・遠隔地の空き家も定期管理。古民家の活用・売却もご相談ください。",
    ctaLabel: "このエリアで無料相談する",
    href: "https://example.com/lp?utm_source=akiya-guide&utm_medium=ad&utm_campaign=area-seisho",
    active: false,
  },
];

export function adsForSlot(slot: Ad["slot"]): Ad[] {
  return ads.filter((a) => a.active && a.slot === slot);
}

// エリア区分向けの広告を取得（region 指定なしの全エリア共通広告も含む）。
export function adsForArea(region: string): Ad[] {
  return ads.filter(
    (a) => a.active && a.slot === "area" && (!a.region || a.region === region),
  );
}
