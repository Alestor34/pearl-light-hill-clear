export type ContentKind = "text" | "longtext" | "image";

export type Settings = {
  phone: string;
  instagram: string;
  ordersClosed: boolean;
  ordersClosedUntil: string | null;
  ordersClosedMessage: string;
};

export type Category = {
  id: number;
  name: string;
  slug: string;
  description: string;
  image: string;
  visible: boolean;
  sortOrder: number;
};

export type Product = {
  id: number;
  categoryId: number;
  name: string;
  description: string;
  price: number;
  unit: string;
  image: string;
  badge: string;
  visible: boolean;
  sortOrder: number;
};

export type SiteData = {
  settings: Settings;
  content: Record<string, string>;
  categories: Category[];
  products: Product[];
};

export type ContentField = {
  key: string;
  label: string;
  kind: ContentKind;
};

export type ContentModule = {
  id: string;
  title: string;
  hint: string;
  fields: ContentField[];
};
