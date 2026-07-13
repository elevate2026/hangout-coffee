// ═══════════════════════════════════════════════════════════════════════
//  Hangout coffee — サイト共通データ（単一情報源）
//  住所・営業時間・評価・メニュー・お知らせ・ギャラリー・FAQは
//  すべてこのファイルで一元管理。公開前の更新はここだけを編集してください。
// ═══════════════════════════════════════════════════════════════════════

export const site = {
  name: 'Hangout coffee',
  tagline: 'For your daily brews',

  // ★ 営業用デモ表記。正式公開時は false にするとフッターの注記が消えます。
  demoNotice: true,

  postal: '〒390-0811',
  addressJa: '長野県松本市中央2丁目3-20 2F',
  addressEn: '2F, 2-3-20 Chuo, Matsumoto, Nagano 390-0811',

  hoursLabel: 'OPEN EVERY DAY',
  hours: '9:00–17:00',
  morning: '9:00–11:30 L.O.',
  lunch: '11:30–16:30 L.O.',

  instagramUrl: 'https://www.instagram.com/hangout_coffee_/',
  instagramHandle: '@hangout_coffee_',
  gmapsUrl: 'https://www.google.com/maps/place/Hangout+coffee/@36.2334395,137.9664115,17z/data=!3m1!5s0x601d0e8e7cfaa16f:0x25a0b8c784904696!4m15!1m8!3m7!1s0x601d0fa7f23f741d:0x84bb512af6919b74!2sHangout+coffee!8m2!3d36.2334395!4d137.9689864!10e2!16s%2Fg%2F11q4czx7hn!3m5!1s0x601d0fa7f23f741d:0x84bb512af6919b74!8m2!3d36.2334395!4d137.9689864!16s%2Fg%2F11q4czx7hn',
  mapEmbed: 'https://maps.google.com/maps?q=36.2334395,137.9689864&z=17&output=embed',

  // ★ Googleマップ評価 — 公開前にここを最新値へ更新（一箇所管理）
  rating: '4.5',
  ratingCount: '332',
  price: '¥1,000–2,000',
};

// ── 画像レジストリ（差し替えは assets/ の同名ファイルを置き換えるだけ）──
const A = 'assets/';
function im(key, w, h, altJa, altEn) {
  return {
    src: A + key + '.webp',
    s800: A + key + '-800.webp',
    srcset: A + key + '-800.webp 800w, ' + A + key + '.webp ' + w + 'w',
    w, h, altJa, altEn,
  };
}
export const IMG = {
  logo:        { src: A + 'img01-logo.webp', w: 640, h: 640, altJa: 'Hangout coffee のロゴ', altEn: 'Hangout coffee logo' },
  counter:     im('img02-counter', 1080, 1440, '注文カウンターで先に注文をするお客様', 'A customer ordering at the counter'),
  space:       im('img03-space', 1440, 1440, '木の床にテーブルとカウンター席が並ぶ2階の店内', 'The second-floor room — wooden floors, tables and counter seats'),
  light:       im('img04-light', 1440, 1440, 'ブラインド越しの光と影が落ちるソファ席', 'Afternoon light falling across the sofa through the blinds'),
  frenchtoast: im('img05-frenchtoast', 1250, 1562, 'アイスクリームをのせたフレンチトーストを切り分ける手元', 'Cutting into French toast topped with ice cream'),
  benedict:    im('img06-benedict', 1440, 1440, 'エッグベネディクトにオランデーズソースをかける瞬間', 'Hollandaise poured over eggs Benedict'),
  sandwich:    im('img07-sandwich', 1440, 1440, '野菜とスプラウトをたっぷり挟んだサンドイッチ', 'A sandwich piled with vegetables and sprouts'),
  bread:       im('img08-bread', 1440, 1440, '型に入ったパン生地が焼き上がりを待つ様子', 'Loaf tins waiting for the oven'),
  beer:        im('img09-beer', 1440, 1440, 'クラフトビールの缶がずらりと並ぶカウンター奥の棚', 'Shelves of craft-beer cans behind the counter'),
  order:       im('img10-order', 1440, 1440, '店内の「How to Order」案内板', 'The “How to Order” sign inside the shop'),
};

// ── メニュー（価格・正式名称は未確定 → 「¥—」のまま。確定後ここを更新）──
export const menu = {
  morning: [
    { ja: 'エッグベネディクト', en: 'Eggs Benedict', dJa: 'ポーチドエッグとオランデーズソース、トースト', dEn: 'Poached eggs, hollandaise, toast', price: '¥—' },
    { ja: 'フレンチトースト', en: 'French Toast', dJa: 'アイスクリームを添えて', dEn: 'Served with ice cream', price: '¥—' },
    { ja: 'MENU ITEM', en: 'MENU ITEM', dJa: '正式メニュー確定後に差し替える仮枠です', dEn: 'Placeholder — replace with the confirmed menu', price: '¥—', ph: true },
  ],
  lunch: [
    { ja: 'サンドイッチ', en: 'Sandwich', dJa: '野菜をたっぷり挟んで', dEn: 'Piled with fresh vegetables', price: '¥—' },
    { ja: 'MENU ITEM', en: 'MENU ITEM', dJa: '正式メニュー確定後に差し替える仮枠です', dEn: 'Placeholder — replace with the confirmed menu', price: '¥—', ph: true },
  ],
  drinkGroups: [
    {
      name: 'ESPRESSO',
      items: [
        { ja: 'ロングブラック', en: 'Long Black', price: '¥—' },
        { ja: 'フラットホワイト', en: 'Flat White', price: '¥—' },
        { ja: 'ラテ', en: 'Latte', price: '¥—' },
        { ja: 'カプチーノ', en: 'Cappuccino', price: '¥—' },
      ],
    },
    {
      name: 'TEA & NON-COFFEE',
      items: [
        { ja: 'チャイ', en: 'Chai', price: '¥—' },
        { ja: 'ティーラテ', en: 'Tea Latte', price: '¥—' },
        { ja: 'その他のドリンク', en: 'Other drinks', dJa: '店頭でご確認ください', dEn: 'Please ask at the counter', price: '' },
      ],
    },
    {
      name: 'MILK OPTIONS',
      items: [
        { ja: 'オーツミルク', en: 'Oat Milk', price: '+¥—' },
        { ja: 'ソイミルク', en: 'Soy Milk', price: '+¥—' },
      ],
    },
  ],
  // メニュー画像 / PDF が用意できたらパスを設定（例: 'assets/menu.pdf'）
  fullMenuUrl: null,
};

// ── Coffee & Beer ページ：コーヒーガイド ──
export const coffeeGuide = [
  { n: '01', name: 'LONG BLACK', ja: 'エスプレッソの風味を、すっきりと楽しみたい方へ。', en: 'For a clean, straightforward taste of the espresso itself.' },
  { n: '02', name: 'FLAT WHITE', ja: 'エスプレッソと滑らかなミルクの、バランスを楽しむ一杯。', en: 'Espresso and silky steamed milk, in easy balance.' },
  { n: '03', name: 'LATTE', ja: 'ミルクの甘さとともに、ゆっくり楽しめる定番。', en: 'The mellow classic — milky, gentle and slow.' },
  { n: '04', name: 'CAPPUCCINO', ja: 'エスプレッソとミルクフォームを軽やかに楽しむ一杯。', en: 'Espresso under a light cap of foam.' },
];
export const notOnlyCoffee = [
  { ja: 'チャイ', en: 'Chai' },
  { ja: 'ティーラテ', en: 'Tea Latte' },
  { ja: 'ティー', en: 'Tea' },
  { ja: 'オーツミルク', en: 'Oat Milk' },
  { ja: 'ソイミルク', en: 'Soy Milk' },
];

// ── What's On（CMS風。記事はこの配列に追加するだけで一覧に反映）──
// 例: { date: '2026-07-01', cat: 'BEER', titleJa: '…', titleEn: '…',
//       bodyJa: '…', bodyEn: '…', img: 'beer' /* IMGのキー、省略可 */ }
export const news = [];
export const newsCats = ['ALL', 'MENU', 'OPENING HOURS', 'BEER', 'EVENTS', 'OTHER'];

// ── Gallery（cat: SPACE / COFFEE / FOOD / BEER / VISIT）──
export const gallery = [
  { img: 'benedict', cat: 'FOOD', ar: '1 / 1', capJa: 'エッグベネディクト', capEn: 'Eggs Benedict' },
  { img: 'space', cat: 'SPACE', ar: '4 / 3', capJa: '2階の店内', capEn: 'The room upstairs' },
  { img: 'frenchtoast', cat: 'FOOD', ar: '4 / 5', capJa: 'フレンチトースト', capEn: 'French toast' },
  { img: 'counter', cat: 'COFFEE', ar: '3 / 4', capJa: '注文カウンターにて', capEn: 'At the counter' },
  { img: 'beer', cat: 'BEER', ar: '4 / 5', capJa: 'クラフトビールの棚', capEn: 'The beer shelf' },
  { img: 'light', cat: 'SPACE', ar: '1 / 1', capJa: '午後の光', capEn: 'Afternoon light' },
  { img: 'sandwich', cat: 'FOOD', ar: '1 / 1', capJa: 'サンドイッチ', capEn: 'Sandwich' },
  { img: 'order', cat: 'VISIT', ar: '1 / 1', capJa: 'How to Order のご案内', capEn: 'Our “How to Order” sign' },
  { img: 'bread', cat: 'FOOD', ar: '4 / 5', capJa: '焼き上がりを待つパン', capEn: 'Loaves waiting for the oven' },
  { ph: 'Building exterior photo', cat: 'VISIT', ar: '4 / 5', capJa: '建物外観（写真準備中）', capEn: 'Building exterior — photo coming soon' },
  { ph: 'Stairway photo', cat: 'VISIT', ar: '1 / 1', capJa: '2階への階段（写真準備中）', capEn: 'The stairway — photo coming soon' },
];
export const galleryCats = ['ALL', 'SPACE', 'COFFEE', 'FOOD', 'BEER', 'VISIT'];

// ── Visit：入口案内ステップ（外観・入口・階段の実写真が届いたら ph を差し替え）──
export const entranceSteps = [
  { n: 'STEP 01', t: 'FIND THE BUILDING', ja: '長野県松本市中央2丁目3-20の建物へ。', en: 'Head to 2-3-20 Chuo, Matsumoto.', ph: 'Building exterior photo' },
  { n: 'STEP 02', t: 'ENTER FROM THE STREET', ja: '通り沿いの入口から建物の中へ。', en: 'Step in through the street-level entrance.', ph: 'Street entrance photo' },
  { n: 'STEP 03', t: 'GO UPSTAIRS', ja: '階段を上がった2階が店舗です。', en: 'Up the stairs — we are on the second floor.', ph: 'Stairway photo' },
];

// ── Visit：How to Order（店内掲示より。★公開前に現在も同じ運用か店舗へ要確認）──
export const orderSteps = [
  { ja: 'ご入店後、先にカウンターでご注文ください', en: 'Please order at the counter first' },
  { ja: 'お会計はカウンターでお願いします', en: 'Please pay at the counter' },
  { ja: 'ご注文後にお席へお進みください', en: 'Take a seat after ordering' },
  { ja: 'お一人様ワンドリンクのご注文をお願いします', en: 'One drink per person, please' },
];

// ── Visit：FAQ ──
export const faq = [
  { qJa: '営業時間は？', qEn: 'What are your opening hours?', aJa: '毎日9:00から17:00まで営業しています。', aEn: 'We are open every day, 9:00–17:00.' },
  { qJa: 'モーニングの時間は？', qEn: 'When is the morning menu served?', aJa: '9:00から11:30 L.O.です。', aEn: 'From 9:00, last order at 11:30.' },
  { qJa: 'ランチの時間は？', qEn: 'When is the lunch menu served?', aJa: '11:30から16:30 L.O.です。', aEn: 'From 11:30, last order at 16:30.' },
  { qJa: '店舗は何階ですか？', qEn: 'Which floor are you on?', aJa: '建物の2階です。入口から階段をご利用ください。', aEn: 'The second floor — take the stairs from the street entrance.' },
  { qJa: 'テイクアウトできますか？', qEn: 'Do you do takeaway?', aJa: '一部メニューはテイクアウト可能です。対象商品は店頭でご確認ください。', aEn: 'Some items are available to go — please ask at the counter.' },
  { qJa: '予約できますか？', qEn: 'Can I make a reservation?', aJa: '予約については店舗へご確認ください。', aEn: 'Please check with the shop directly about reservations.' },
];

// ── SEO（タイトル・ディスクリプション）──
export const seo = {
  home: {
    tJa: 'Hangout coffee｜松本のモーニング・ランチ・コーヒー',
    tEn: 'Hangout coffee | Breakfast, Lunch and Coffee in Matsumoto',
    dJa: '長野県松本市中央、建物2階のカフェ。モーニング9:00–11:30 L.O.、ランチ11:30–16:30 L.O.。コーヒーとクラフトビール。毎日9:00–17:00営業。',
    dEn: 'A second-floor café in central Matsumoto. Breakfast 9:00–11:30, lunch 11:30–16:30, coffee and craft beer. Open every day 9:00–17:00.',
  },
  about: { tJa: 'About｜Hangout coffee 松本', tEn: 'About | Hangout coffee, Matsumoto', dJa: '「Hangout＝特別な理由がなくても、時間を過ごす場所」。松本の2階にあるカフェの考え方と過ごし方。', dEn: 'Hangout — a place to spend time together, without needing a reason. About our second-floor café in Matsumoto.' },
  menu: { tJa: 'Menu｜Hangout coffee 松本のモーニング・ランチ', tEn: 'Menu | Breakfast & Lunch at Hangout coffee', dJa: 'モーニング9:00–11:30 L.O.、ランチ11:30–16:30 L.O.。エッグベネディクト、フレンチトースト、サンドイッチ、ドリンク。', dEn: 'Morning 9:00–11:30 L.O., lunch 11:30–16:30 L.O. Eggs Benedict, French toast, sandwiches and drinks.' },
  coffee: { tJa: 'Coffee & Beer｜Hangout coffee 松本', tEn: 'Coffee & Beer | Hangout coffee, Matsumoto', dJa: 'ロングブラック、フラットホワイトなどのエスプレッソドリンクと、個性豊かなクラフトビール。', dEn: 'Espresso drinks from long blacks to flat whites — and a rotating line-up of craft beer.' },
  whatson: { tJa: 'What’s On｜Hangout coffee 松本', tEn: 'What’s On | Hangout coffee, Matsumoto', dJa: '新メニュー、営業情報、クラフトビール入荷、店内の小さな出来事のお知らせ。', dEn: 'New menu items, opening updates, craft-beer arrivals and small moments from the shop.' },
  gallery: { tJa: 'Gallery｜Hangout coffee 松本', tEn: 'Gallery | Hangout coffee, Matsumoto', dJa: 'コーヒー、食事、店内の空気。Hangout coffeeの日常を写真でご覧ください。', dEn: 'Coffee, food and everyday moments at Hangout coffee.' },
  visit: { tJa: 'Visit｜Hangout coffee 松本市中央2丁目・2F', tEn: 'Visit | Hangout coffee — 2F, Chuo, Matsumoto', dJa: '長野県松本市中央2丁目3-20 2F。毎日9:00–17:00営業。通り沿いの入口から階段を上がった2階です。', dEn: '2F, 2-3-20 Chuo, Matsumoto. Open every day 9:00–17:00 — up the stairs from the street entrance.' },
};
