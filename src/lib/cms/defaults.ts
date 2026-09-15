import type { ContentModule } from "./types";

export const DEFAULT_SETTINGS = {
  phone: "+989129564648",
  instagram: "fingerfood.nazli",
  ordersClosed: false,
  ordersClosedUntil: null as string | null,
  ordersClosedMessage:
    "سفارش‌ها تا تاریخ مشخص‌شده بسته است. برای هماهنگی بعدی با ما در واتساپ در تماس باشید.",
};

export const DEFAULT_CONTENT: { key: string; value: string; kind: "text" | "longtext" | "image" }[] =
  [
    { key: "brand.name", value: "نازلی", kind: "text" },
    { key: "brand.tagline", value: "فینگر فود", kind: "text" },
    { key: "brand.logo", value: "", kind: "image" },
    { key: "nav.menu", value: "منو", kind: "text" },
    { key: "nav.about", value: "قصهٔ ما", kind: "text" },
    { key: "nav.contact", value: "تماس", kind: "text" },
    { key: "nav.order", value: "سفارش", kind: "text" },
    { key: "hero.kicker", value: "مهمونی‌ش با شما", kind: "text" },
    { key: "hero.title", value: "خوشمزه‌هاش با ما", kind: "text" },
    {
      key: "hero.subtitle",
      value:
        "سینی مزه، فینگرفود و پک تولد برای مهمانی‌های تهران. تازه همان‌روز، مرتب روی سینی، رأس ساعت روی میز شما.",
      kind: "longtext",
    },
    { key: "hero.cta", value: "ثبت سفارش در واتساپ", kind: "text" },
    { key: "hero.cta2", value: "دیدن منو", kind: "text" },
    { key: "hero.image", value: "/food/hero.jpg", kind: "image" },
    { key: "hero.badge", value: "ارسال در تهران", kind: "text" },
    {
      key: "marquee.text",
      value:
        "مینی برگر · مینی پیتزا · بورک · سمبوسه · رول یوفکا · ناگت · الویه · کشک بادمجان · سینی میوه · پک تولد",
      kind: "text",
    },
    { key: "feature.1.title", value: "پخت همان روز", kind: "text" },
    {
      key: "feature.1.body",
      value: "مواد را صبح می‌خریم و ظهر می‌پزیم؛ فینگرفود یخ‌زده به خانهٔ شما نمی‌رسد.",
      kind: "longtext",
    },
    { key: "feature.2.title", value: "رأس ساعت روی میز", kind: "text" },
    {
      key: "feature.2.body",
      value: "ساعت تحویل را با هم قفل می‌کنیم. سینی‌ها گرم، مرتب و بدون شلوغی لحظهٔ آخر.",
      kind: "longtext",
    },
    { key: "feature.3.title", value: "از ۱۰ نفر تا ۶۰ نفر", kind: "text" },
    {
      key: "feature.3.body",
      value: "پک کوچک دورهمی یا سینی کامل تولد؛ تعداد را بگویید، چینش را ما درمی‌آوریم.",
      kind: "longtext",
    },
    { key: "menu.kicker", value: "منوی امروز", kind: "text" },
    { key: "menu.title", value: "از لقمه‌های کوچک تا سینی کامل", kind: "text" },
    {
      key: "menu.subtitle",
      value: "قیمت‌ها برای سفارش از ۴۸ ساعت قبل است. برای تعداد سفارشی در واتساپ قیمت دقیق می‌دهیم.",
      kind: "longtext",
    },
    { key: "about.kicker", value: "قصهٔ آشپزخانه", kind: "text" },
    { key: "about.title", value: "یک آشپزخانهٔ خانگی، سینی‌های مهمانی", kind: "text" },
    {
      key: "about.body",
      value:
        "نازلی فینگر فود برای تولد، دورهمی و میز مزه در تهران کار می‌کند. مینی‌برگر، بورک، سمبوسه، الویه و سینی میوه را همان روز می‌پزیم و روی سینی چوبی یا ظرف مزه می‌چینیم. سفارش از ۴۸ ساعت قبل؛ جزئیات را در واتساپ یا با یک تماس هماهنگ می‌کنیم.",
      kind: "longtext",
    },
    { key: "about.image", value: "/food/about.jpg", kind: "image" },
    { key: "order.kicker", value: "سه قدم", kind: "text" },
    { key: "order.title", value: "چطور سفارش بدم؟", kind: "text" },
    { key: "order.1.title", value: "منو را ببینید", kind: "text" },
    {
      key: "order.1.body",
      value: "دسته و تعداد نفرات را مشخص کنید. اگر مردد هستید، پک‌های آماده را پیشنهاد می‌کنیم.",
      kind: "longtext",
    },
    { key: "order.2.title", value: "در واتساپ هماهنگ کنید", kind: "text" },
    {
      key: "order.2.body",
      value: "ساعت، آدرس و حساسیت غذایی را بگویید. پیش‌فاکتور همان‌جا برایتان می‌آید.",
      kind: "longtext",
    },
    { key: "order.3.title", value: "تحویل رأس ساعت", kind: "text" },
    {
      key: "order.3.body",
      value: "سینی را گرم و چیده تحویل می‌گیرید. ظروف یک‌بارمصرف بهداشتی همراه سفارش است.",
      kind: "longtext",
    },
    { key: "contact.title", value: "یک پیام، میز آماده", kind: "text" },
    {
      key: "contact.body",
      value: "برای ثبت سفارش و استعلام موجودی، واتساپ سریع‌ترین راه است. تماس تلفنی هم پاسخ داده می‌شود.",
      kind: "longtext",
    },
    { key: "contact.hours", value: "پاسخگویی هر روز از ۱۰ صبح تا ۱۰ شب", kind: "text" },
    { key: "contact.city", value: "ارسال در تهران", kind: "text" },
    {
      key: "footer.note",
      value: "فینگرفود خانگی برای مهمانی‌های تهران · سفارش از ۴۸ ساعت قبل",
      kind: "text",
    },
    { key: "popup.title", value: "سفارش‌ها فعلاً بسته است", kind: "text" },
    {
      key: "wa.prefill",
      value: "سلام، برای مهمانی می‌خواهم از نازلی فینگر فود سفارش بدهم.",
      kind: "longtext",
    },
  ];

export const CONTENT_MODULES: ContentModule[] = [
  {
    id: "brand",
    title: "برند و هدر",
    hint: "نام، شعار و لوگو در بالای همهٔ صفحات.",
    fields: [
      { key: "brand.name", label: "نام برند", kind: "text" },
      { key: "brand.tagline", label: "شعار کنار نام", kind: "text" },
      { key: "brand.logo", label: "لوگو (خالی = نوشتهٔ گرافیکی)", kind: "image" },
      { key: "nav.menu", label: "لینک منو", kind: "text" },
      { key: "nav.about", label: "لینک قصه", kind: "text" },
      { key: "nav.contact", label: "لینک تماس", kind: "text" },
      { key: "nav.order", label: "دکمهٔ سفارش", kind: "text" },
    ],
  },
  {
    id: "hero",
    title: "بخش اصلی",
    hint: "اولین تصویری که مهمان می‌بیند.",
    fields: [
      { key: "hero.kicker", label: "خط کوچک بالا", kind: "text" },
      { key: "hero.title", label: "عنوان بزرگ", kind: "text" },
      { key: "hero.subtitle", label: "توضیح", kind: "longtext" },
      { key: "hero.cta", label: "دکمهٔ اصلی", kind: "text" },
      { key: "hero.cta2", label: "دکمهٔ دوم", kind: "text" },
      { key: "hero.badge", label: "برچسب روی عکس", kind: "text" },
      { key: "hero.image", label: "تصویر اصلی", kind: "image" },
      { key: "marquee.text", label: "نوار متحرک غذاها", kind: "text" },
    ],
  },
  {
    id: "features",
    title: "سه ویژگی",
    hint: "سه کارت زیر بخش اصلی.",
    fields: [
      { key: "feature.1.title", label: "عنوان ۱", kind: "text" },
      { key: "feature.1.body", label: "متن ۱", kind: "longtext" },
      { key: "feature.2.title", label: "عنوان ۲", kind: "text" },
      { key: "feature.2.body", label: "متن ۲", kind: "longtext" },
      { key: "feature.3.title", label: "عنوان ۳", kind: "text" },
      { key: "feature.3.body", label: "متن ۳", kind: "longtext" },
    ],
  },
  {
    id: "menu",
    title: "منو",
    hint: "عنوان بخش محصولات. خود محصولات از تب محصولات ویرایش می‌شوند.",
    fields: [
      { key: "menu.kicker", label: "خط کوچک", kind: "text" },
      { key: "menu.title", label: "عنوان", kind: "text" },
      { key: "menu.subtitle", label: "توضیح", kind: "longtext" },
    ],
  },
  {
    id: "about",
    title: "قصهٔ ما",
    hint: "متن و عکس معرفی.",
    fields: [
      { key: "about.kicker", label: "خط کوچک", kind: "text" },
      { key: "about.title", label: "عنوان", kind: "text" },
      { key: "about.body", label: "متن", kind: "longtext" },
      { key: "about.image", label: "تصویر", kind: "image" },
    ],
  },
  {
    id: "order",
    title: "روش سفارش",
    hint: "سه قدم سفارش.",
    fields: [
      { key: "order.kicker", label: "خط کوچک", kind: "text" },
      { key: "order.title", label: "عنوان", kind: "text" },
      { key: "order.1.title", label: "قدم ۱ — عنوان", kind: "text" },
      { key: "order.1.body", label: "قدم ۱ — متن", kind: "longtext" },
      { key: "order.2.title", label: "قدم ۲ — عنوان", kind: "text" },
      { key: "order.2.body", label: "قدم ۲ — متن", kind: "longtext" },
      { key: "order.3.title", label: "قدم ۳ — عنوان", kind: "text" },
      { key: "order.3.body", label: "قدم ۳ — متن", kind: "longtext" },
    ],
  },
  {
    id: "contact",
    title: "تماس و پاورقی",
    hint: "شماره و اینستاگرام را از تب تماس عوض کنید؛ اینجا فقط متن‌هاست.",
    fields: [
      { key: "contact.title", label: "عنوان تماس", kind: "text" },
      { key: "contact.body", label: "متن تماس", kind: "longtext" },
      { key: "contact.hours", label: "ساعات پاسخگویی", kind: "text" },
      { key: "contact.city", label: "محدودهٔ ارسال", kind: "text" },
      { key: "footer.note", label: "توضیح پاورقی", kind: "text" },
      { key: "popup.title", label: "عنوان پاپ‌آپ تعطیلی", kind: "text" },
      { key: "wa.prefill", label: "متن پیش‌فرض واتساپ", kind: "longtext" },
    ],
  },
];

export const DEFAULT_CATEGORIES: {
  name: string;
  slug: string;
  description: string;
  image: string;
  sortOrder: number;
}[] = [
  {
    name: "فینگرفود",
    slug: "fingerfood",
    description: "لقمه‌های سوخاری و تنوری، مناسب سینی مزه و پذیرایی ایستاده.",
    image: "/food/mini-burger.jpg",
    sortOrder: 1,
  },
  {
    name: "سینی و پک مهمانی",
    slug: "packs",
    description: "پک‌های آماده بر اساس تعداد نفرات؛ ترکیب را می‌توانید عوض کنید.",
    image: "/food/party-pack.jpg",
    sortOrder: 2,
  },
  {
    name: "سالاد و غذای کیلویی",
    slug: "kilo",
    description: "الویه، کشک بادمجان و سالادها به صورت کیلویی.",
    image: "/food/olivieh.jpg",
    sortOrder: 3,
  },
  {
    name: "مزه و پیش‌غذا",
    slug: "mezze",
    description: "سینی میوه، کیک مرغ و مزه‌های مکمل فینگرفود.",
    image: "/food/kashk.jpg",
    sortOrder: 4,
  },
];

export const DEFAULT_PRODUCTS: {
  categorySlug: string;
  name: string;
  description: string;
  price: number;
  unit: string;
  image: string;
  badge: string;
  sortOrder: number;
}[] = [
  {
    categorySlug: "fingerfood",
    name: "مینی برگر",
    description: "نان نرم، گوشت آبدار و پنیر. پرطرفدارترین لقمهٔ سینی تولد.",
    price: 890000,
    unit: "۱۰ عدد",
    image: "/food/mini-burger.jpg",
    badge: "پرفروش",
    sortOrder: 1,
  },
  {
    categorySlug: "fingerfood",
    name: "مینی پیتزا",
    description: "خمیر نازک، سس خانگی و پنیر کش‌دار. مناسب مهمانی کودک و بزرگسال.",
    price: 920000,
    unit: "۱۰ عدد",
    image: "/food/mini-pizza.jpg",
    badge: "",
    sortOrder: 2,
  },
  {
    categorySlug: "fingerfood",
    name: "بورک گوشت",
    description: "خمیر یوفکای طلایی با فیلینگ گوشت و پیاز داغ.",
    price: 780000,
    unit: "۱۰ عدد",
    image: "/food/borek.jpg",
    badge: "",
    sortOrder: 3,
  },
  {
    categorySlug: "fingerfood",
    name: "سمبوسه",
    description: "جیب طلایی ادویه‌دار؛ ترد، سبک و مناسب سینی مزه.",
    price: 720000,
    unit: "۱۰ عدد",
    image: "/food/sambouseh.jpg",
    badge: "",
    sortOrder: 4,
  },
  {
    categorySlug: "fingerfood",
    name: "رول تست سوخاری",
    description: "نان تست رول‌شده با مرغ و پنیر، سوخاری تا طلایی شود.",
    price: 840000,
    unit: "۱۰ عدد",
    image: "/food/fried-roll.jpg",
    badge: "",
    sortOrder: 5,
  },
  {
    categorySlug: "fingerfood",
    name: "رول یوفکا",
    description: "لایهٔ نازک یوفکا، فیلینگ مرغ یا گوشت، برشته از فر.",
    price: 800000,
    unit: "۱۰ عدد",
    image: "/food/fried-roll.jpg",
    badge: "",
    sortOrder: 6,
  },
  {
    categorySlug: "fingerfood",
    name: "ناگت مرغ",
    description: "مرغ خردشده با آرد سوخاری خانگی؛ ساده و سیرکننده.",
    price: 690000,
    unit: "۱۰ عدد",
    image: "/food/fried-roll.jpg",
    badge: "",
    sortOrder: 7,
  },
  {
    categorySlug: "fingerfood",
    name: "پیراشکی گوشت",
    description: "خمیر نرم تنوری با گوشت، مناسب کنار بورک روی سینی.",
    price: 760000,
    unit: "۱۰ عدد",
    image: "/food/sambouseh.jpg",
    badge: "",
    sortOrder: 8,
  },
  {
    categorySlug: "packs",
    name: "پک ۱۶ نفره",
    description:
      "مینی برگر، رول یوفکا، مینی پیتزا، توپک، پیراشکی، راتا، رز پپرونی و بورک. سیرکننده برای دورهمی.",
    price: 10300000,
    unit: "یک پک",
    image: "/food/party-pack.jpg",
    badge: "پیشنهاد میزبان",
    sortOrder: 1,
  },
  {
    categorySlug: "packs",
    name: "پک ۲۰ نفره با سینی چوبی",
    description: "فینگرفود روی سینی چوبی به‌علاوهٔ سینی میوه. مناسب تولد خانگی.",
    price: 7090000,
    unit: "یک پک",
    image: "/food/hero.jpg",
    badge: "",
    sortOrder: 2,
  },
  {
    categorySlug: "packs",
    name: "پک ۳۵ نفره",
    description:
      "رول تست، بورک گوشت، فیله سوخاری، مینی هات‌داگ، مینی برگر، مینی ژامبون و کیک مرغ. مناسب وعدهٔ اصلی.",
    price: 13500000,
    unit: "یک پک",
    image: "/food/party-pack.jpg",
    badge: "",
    sortOrder: 3,
  },
  {
    categorySlug: "kilo",
    name: "الویه",
    description: "الویه خامه‌ای با مرغ، سیب‌زمینی و نخودفرنگی. تزئین با انار.",
    price: 480000,
    unit: "یک کیلو",
    image: "/food/olivieh.jpg",
    badge: "همیشه موجود",
    sortOrder: 1,
  },
  {
    categorySlug: "kilo",
    name: "کشک بادمجان",
    description: "بادمجان سرخ‌شده، کشک و نعنا داغ. گرم، روی سینی مزه.",
    price: 420000,
    unit: "یک کیلو",
    image: "/food/kashk.jpg",
    badge: "",
    sortOrder: 2,
  },
  {
    categorySlug: "kilo",
    name: "سالاد ماکارونی",
    description: "سالاد خنک با سبزی و سس خانگی؛ همراه همیشگی الویه.",
    price: 340000,
    unit: "یک کیلو",
    image: "/food/olivieh.jpg",
    badge: "",
    sortOrder: 3,
  },
  {
    categorySlug: "kilo",
    name: "بندری",
    description: "مخلوط تند و معطر؛ مناسب کنار فینگرفود برای میزبان‌های جسور.",
    price: 390000,
    unit: "یک کیلو",
    image: "/food/kashk.jpg",
    badge: "",
    sortOrder: 4,
  },
  {
    categorySlug: "mezze",
    name: "سینی میوه",
    description: "چینش رنگی کیوی، توت‌فرنگی، انار و طالبی روی سینی چوبی.",
    price: 2650000,
    unit: "یک سینی",
    image: "/food/hero.jpg",
    badge: "",
    sortOrder: 1,
  },
  {
    categorySlug: "mezze",
    name: "کیک مرغ",
    description: "کیک شور لایه‌لایه با مرغ، تزئین زیتون و هویج. ستارهٔ میز مزه.",
    price: 1850000,
    unit: "یک کیک",
    image: "/food/olivieh.jpg",
    badge: "",
    sortOrder: 2,
  },
  {
    categorySlug: "mezze",
    name: "تارت کشک بادمجان",
    description: "تارت‌های کوچک با فیلینگ کشک بادمجان؛ لقمهٔ مرتب برای سینی.",
    price: 640000,
    unit: "۱۰ عدد",
    image: "/food/kashk.jpg",
    badge: "",
    sortOrder: 3,
  },
];
