// =============================================================
// 比較表に並べる事業者データ（= 編集部がまとめた中立情報）。
//
// 【重要・景表法/ステマ規制】
// ここは「お金をもらって順位を上げる枠」ではありません。
// 有料掲載は src/data/ads.ts 側（AdSlot）で必ず PR 表記して扱います。
// 比較表の並び順は「ランキング」ではなく、order の昇順で固定し、
// その基準（事業者名の五十音順）を表のキャプションに明示します。
//
// 【出典・裏取りについて】
// 下記の事業者・対応エリア・サービス内容は、各社公式サイト等の公開情報
// （2026年6月時点・編集部調べ）をもとに整理したものです。各 provider の
// `url` が確認元です。料金は変動し、現地条件で変わります。
//   - monthlyFee に「要問合せ」とあるのは、公式サイトに金額の明示が
//     確認できなかったもの（金額を推測で記載していません）。
//   - manage/utilize/sell/demolish は公式記載で確認できたものを true に
//     しています。記載が確認できない項目は false（＝表では「—」）にして
//     あり、「非対応」を断定するものではありません（要確認）。
// 公開前に、各社へ最新の料金・対応可否を改めてご確認ください。
// =============================================================

export type Provider = {
  id: string;
  name: string;
  // 並び順の基準（ランキングではない）。小さいほど上に表示。
  order: number;
  // 対応エリア区分（site.ts の regions[].id と対応）。複数可。
  regions: string[];
  areas: string[];          // 主な対応エリア（区分内の具体的な市区町村）
  monthlyFee: string;       // 月額管理費の目安（実費は要見積。「目安」と明示）
  patrol: string;           // 巡回頻度／報告方法
  manage: boolean;          // 管理（巡回・換気・通水・郵便確認など）
  utilize: boolean;         // 活用（賃貸・リノベ・駐車場など）
  sell: boolean;            // 売却（買取・仲介）
  demolish: boolean;        // 解体
  feature: string;          // 特徴（中立的な事実のみ）
  url?: string;             // 公式サイト（出典・確認先）
  // 有料掲載かどうか。true の場合は表内に [PR] を必ず表示する。
  sponsored?: boolean;
};

export const providers: Provider[] = [
  // ---------------------------------------------------------------
  // 横浜・川崎エリア（掲載順＝事業者名の五十音順）
  // ---------------------------------------------------------------
  {
    id: "junxion",
    name: "株式会社ジャンクション",
    order: 1,
    regions: ["yokohama-kawasaki"],
    areas: ["横浜市全域", "横浜市近郊"],
    monthlyFee: "5,500円〜/月（戸建・マンション／充実プラン11,000円）",
    patrol: "月1回（隔月も可）／レポート（メール・郵送）＋写真",
    manage: true, utilize: true, sell: true, demolish: false,
    feature: "外部点検・施錠防犯・全室換気・通水・簡易清掃・害虫予防。売却/賃貸など活用の相談も可（除草・剪定は管理に含まず別料金）。",
    url: "https://junxion.co.jp/kanri/",
  },
  {
    id: "clan",
    name: "クラン（空き家管理）",
    order: 2,
    regions: ["yokohama-kawasaki"],
    areas: ["横浜市", "川崎市"],
    monthlyFee: "3,000円〜/月（基本プラン）",
    patrol: "月1回（オプションで2回以上も可）",
    manage: true, utilize: false, sell: false, demolish: false,
    feature: "横浜市・川崎市に特化した地域密着の空き家管理。",
    url: "https://akiyakanri.clan-home.co.jp/",
  },
  {
    id: "zero-house",
    name: "横浜ゼロ空き家管理（株式会社ゼロハウス）",
    order: 3,
    regions: ["yokohama-kawasaki"],
    areas: ["横浜市（都筑区拠点）"],
    monthlyFee: "要問合せ（ライト／スタンダード／スタンダードプラスの3プラン）",
    patrol: "要問合せ",
    manage: true, utilize: false, sell: false, demolish: false,
    feature: "横浜市都筑区を拠点とする空き家管理。プラン別の料金は問い合わせで確認。",
    url: "https://www.akiyakanri.biz/",
  },
  {
    id: "akiya-akichi-center",
    name: "NPO法人 空家・空地管理センター",
    order: 4,
    regions: ["yokohama-kawasaki", "shonan", "seisho"],
    areas: ["全国対応（神奈川県内も対応エリア）"],
    monthlyFee: "2,750円〜/月（スタンダード／あんしん管理プラス6,600円）",
    patrol: "月1回／写真付メール報告",
    manage: true, utilize: false, sell: false, demolish: false,
    feature: "全国対応。建物外観確認・草木確認・ポスト掃除等。賠償責任・火災費用の「あんしん補償」が自動付帯（プラスは換気・通水・室内確認）。",
    url: "https://www.akiya-akichi.or.jp/kanri/",
  },
  {
    id: "tokyo-gas-omamori",
    name: "東京ガス「実家のお守り」",
    order: 5,
    regions: ["yokohama-kawasaki", "miura", "shonan", "kenou"],
    areas: ["横浜市", "川崎市", "横須賀市", "藤沢市", "茅ヶ崎市", "平塚市", "鎌倉市", "逗子市", "三浦市", "厚木市ほか神奈川主要都市"],
    monthlyFee: "要問合せ（3メニュー・現地カウンセリングで提示）",
    patrol: "月1回／作業報告書＋写真（マイページで確認）",
    manage: true, utilize: false, sell: false, demolish: false,
    feature: "東京ガスの空き家管理サービス。換気・通水・草むしり・簡易清掃・外観/内観確認等。郵便転送等のオプションあり。",
    url: "https://home.tokyo-gas.co.jp/service/housework/vacant_house.html",
  },

  // ---------------------------------------------------------------
  // 横須賀・三浦（三浦半島）エリア
  // ---------------------------------------------------------------
  {
    id: "akiya-marutto",
    name: "空き家まるっと管理（ハレトアメ合同会社）",
    order: 10,
    regions: ["miura", "shonan"],
    areas: ["横浜市", "横須賀市", "鎌倉市", "逗子市", "三浦市", "葉山町"],
    monthlyFee: "2,500円〜/月（屋外）／室内点検を含む充実プラン5,000円",
    patrol: "月1回／訪問日時・点検結果を写真付きで報告",
    manage: true, utilize: false, sell: true, demolish: false,
    feature: "三浦半島〜横浜を中心に対応。将来の売却サポートにも対応。",
    url: "https://akiyamarutto.com/",
  },
  {
    id: "usui-fudosan",
    name: "臼井不動産（空き家管理代行）",
    order: 12,
    regions: ["miura"],
    areas: ["横須賀市", "三浦市"],
    monthlyFee: "要問合せ（公式に金額の明示なし）",
    patrol: "定期巡回／確認結果を写真で記録し報告",
    manage: true, utilize: false, sell: true, demolish: false,
    feature: "横須賀市・三浦市の地域不動産。通風・通水・換気・清掃等。売却の相談も可能。",
    url: "https://www.usui-fudosan.jp/akiya/",
  },
  {
    id: "human-community",
    name: "株式会社ヒューマンコミュニティ",
    order: 14,
    regions: ["miura"],
    areas: ["横須賀市", "逗子市", "葉山町", "三浦市", "横浜市南区"],
    monthlyFee: "要問合せ",
    patrol: "要問合せ",
    manage: true, utilize: false, sell: false, demolish: false,
    feature: "横須賀市を中心に三浦半島へ対応。一級空き家管理士が地域特性をふまえ管理。",
    url: "https://www.human-akiya.com/",
  },
  {
    id: "central-homes",
    name: "セントラル・ホームズ（空き家コンシェルジュ）",
    order: 16,
    regions: ["miura"],
    areas: ["横須賀市", "三浦市"],
    monthlyFee: "要問合せ",
    patrol: "要問合せ",
    manage: true, utilize: false, sell: false, demolish: false,
    feature: "横須賀市・三浦市の空き家をトータルサポート。詳細・料金は問い合わせで確認。",
    url: "https://www.centralhomes.co.jp/akiya/",
  },

  // ---------------------------------------------------------------
  // 湘南（鎌倉〜平塚）エリア
  //   ※ NPO法人 空家・空地管理センター（order 4）、東京ガス（order 5）、
  //     空き家まるっと管理（order 10）も湘南に対応（複数エリア表示）。
  // ---------------------------------------------------------------
  {
    id: "kanade-clean",
    name: "奏クリーンサービス",
    order: 20,
    regions: ["shonan", "kenou", "seisho"],
    areas: ["藤沢市", "茅ヶ崎市", "平塚市", "秦野市", "厚木市", "海老名市", "伊勢原市", "大磯町", "二宮町", "中井町ほか"],
    monthlyFee: "要問合せ（公式に金額の明示なし）",
    patrol: "要問合せ",
    manage: true, utilize: true, sell: false, demolish: false,
    feature: "認定空き家再生診断士が在籍し、活用・修繕の相談にも対応。ハウスクリーニング・換気・通水・除草・剪定・リフォーム・不用品撤去。",
    url: "https://www.kanade-osouji.com/menu_akiya.html",
  },

  // ---------------------------------------------------------------
  // 県央（厚木・海老名・伊勢原）エリア
  //   ※ 東京ガス（order 5）、奏クリーンサービス（order 20）も県央に対応。
  // ---------------------------------------------------------------
  {
    id: "asushia-home",
    name: "アスシア・ホーム（空き家巡回サービス）",
    order: 30,
    regions: ["kenou"],
    areas: ["厚木市", "厚木市周辺"],
    monthlyFee: "要問合せ（公式に金額の明示なし）",
    patrol: "月1回（建物内に立入）／報告書（画像付）を送付",
    manage: true, utilize: true, sell: true, demolish: false,
    feature: "厚木市の地域密着不動産。空き家管理から不動産活用・売却の相談まで対応。",
    url: "https://akiya-kanri.asushia-home.com/",
  },
  {
    id: "nakajima-shouji",
    name: "有限会社なかじま商事",
    order: 32,
    regions: ["kenou"],
    areas: ["厚木市", "海老名市", "伊勢原市"],
    monthlyFee: "要相談（内容に応じて個別設定／一律料金なし）",
    patrol: "要問合せ",
    manage: true, utilize: false, sell: true, demolish: false,
    feature: "厚木市・海老名市・伊勢原市限定の地域不動産。管理内容と金額を相談のうえ設定。",
    url: "https://nakajima-shouji.com/archives/2746",
  },

  // ---------------------------------------------------------------
  // 西湘（大磯以西）エリア
  //   ※ NPO法人 空家・空地管理センター（order 4）、
  //     奏クリーンサービス（order 20・大磯/二宮/中井ほか）も西湘に対応。
  //   管理は各市のシルバー人材センターが担い、買取・売却中心の地域不動産も併記する。
  //   （別荘管理専業は「空き家管理」とは別カテゴリのため掲載対象外）
  // ---------------------------------------------------------------
  {
    id: "silver-odawara",
    name: "小田原市シルバー人材センター（空家管理）",
    order: 40,
    regions: ["seisho"],
    areas: ["小田原市"],
    monthlyFee: "3,300円（基本・現状確認1回／事務費・税込）＋オプション別途",
    patrol: "現状確認（建物外観・敷地）／写真撮影・報告",
    manage: true, utilize: false, sell: false, demolish: false,
    feature: "小田原市内の空き家の現状確認（写真・報告）。除草・屋外清掃・剪定・伐採はオプション見積。",
    url: "https://webc.sjc.ne.jp/odawara/activity_6",
  },
  {
    id: "silver-minamiashigara",
    name: "南足柄市シルバー人材センター（空き家管理代行）",
    order: 42,
    regions: ["seisho"],
    areas: ["南足柄市"],
    monthlyFee: "要問合せ",
    patrol: "現状確認・草刈り等（要問合せ）",
    manage: true, utilize: false, sell: false, demolish: false,
    feature: "南足柄市と協定。2018年12月開始の空き家管理代行（現状確認・草刈り等）。",
    url: "https://www.city.minamiashigara.kanagawa.jp/kurashi/sumai/akiya/p05022.html",
  },
  {
    id: "towa-fudosan",
    name: "株式会社藤和不動産",
    order: 46,
    regions: ["seisho"],
    areas: ["小田原市", "湘南エリア"],
    monthlyFee: "—（定期管理サービスなし／買取・売却が中心）",
    patrol: "—",
    manage: false, utilize: false, sell: true, demolish: false,
    feature: "小田原を拠点に湘南エリアへ。空き家・古民家・利用の難しい土地の買取・売却の相談に対応。",
    url: "https://108towa.co.jp/",
  },
  {
    id: "plus-seisho",
    name: "株式会社プラス（不動産売却）",
    order: 48,
    regions: ["seisho"],
    areas: ["小田原市", "南足柄市", "西湘エリア"],
    monthlyFee: "—（売却・買取専門）",
    patrol: "—",
    manage: false, utilize: false, sell: true, demolish: false,
    feature: "西湘エリアの不動産売却を専門に対応。空き家・事故物件など特殊な売却の相談も可。",
    url: "https://iqrafudosan.com/companies/6742",
  },
];
