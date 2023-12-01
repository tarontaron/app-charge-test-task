export type TBundlePrice = {
  amount: number;
  currencySymbol: string;
};

export type TBundleProduct = {
  productImage: string,
  amount: string;
  productTextColor: string;
};

export type TBundle = {
  bgImage: string;
  timeLeftMs: number;
  available: number;
  maxAvailable: number;
  price: TBundlePrice;
  products: TBundleProduct[];
};
