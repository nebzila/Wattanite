export type MovieType = {
  adult: boolean;
  backdrop_path: string;     // ? jpg
  id: number;
  title: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;     // /62HCnUTziyWcpDaBO2i1DX17ljH.jpg
  media_type: string;
  genre_ids: number[];     // or Array<number>
  popularity: number;
  release_date: string;      // or string “2022-05-24”,
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
  icon: string;                   // “https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png”,
  icon_background_color: string;  // “#FF9E67",
  icon_mask_base_uri: string;     // “https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet”,
  name: string;
  opening_hours: { open_now: boolean; };
  photos: [{
             height: number;
             html_attributions: [string];
             photo_reference: string;
             imgsrc?: string;
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