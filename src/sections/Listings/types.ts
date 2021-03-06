export interface Listing {
  id: string;
  title: string;
  image: string;
  address: string;
  price: number;
  numOfGuests: number;
  numOfBeds: number;
  rating: number;
  numOfBaths?: number;
}

export interface ListingsData {
  listings: Listing[];
}