import { ObjectId } from 'mongodb';

export type MovieType = {
  adult: boolean;
  backdrop_path: string;
  id: number | null;
  title: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: string;
  genre_ids: number[];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export type RestaurantType = {
  business_status: string;
  formatted_address: string;
  geometry: {
               location: { lat: number; lng: number; };
               viewport: {
                 northeast: { lat: number; lng: number; };
                 southwest: { lat: number; lng: number; };
              };
           };
  icon: string;
  icon_background_color: string;
  icon_mask_base_uri: string;
  name: string;
  opening_hours: { open_now: boolean; };
  photos: [{
             height: number;
             html_attributions: [string];
             imgsrc: string;
             photo_reference: string;
             width: number;
           }];
  place_id: string;
  plus_code: {
    compound_code: string;
    global_code: string;
  };
  price_level: number;
  rating: string;
  reference: string;
  types: [string];
  user_ratings_total: number
}

export type VoteType = {
  name: string;
  postcode: string;
  movie: MovieType;
  restaurant: RestaurantType;
}

export type WinnerType = {
  _id: string;
  name: string;
  postcode: string;
  movie: MovieType;
  restaurant: RestaurantType;
}

