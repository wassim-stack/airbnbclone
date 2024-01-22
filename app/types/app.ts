export type ExploreItem = {
  img: string;
  location: string;
  distance: string;
};

export type LiveItem = {
  img: string;
  title: string;
};
export type ListingCardItem = {
  img: string;
  title: string;
  location: string;
  description: string;
  star: string;
  price: string;
  total: string;
  long: number;
  lat: number;
};

export type ExploreData = ExploreItem[];
export type liveData = LiveItem[];
export type SearchResultData = ListingCardItem[];
