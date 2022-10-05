// import { ObjectId } from 'mongodb';

import { Socket } from "socket.io-client";


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
  photos: {
             height: number;
             html_attributions: string[];
             imgsrc: string;
             photo_reference: string;
             width: number;
           }[];
  place_id: string;
  plus_code: {
    compound_code: string;
    global_code: string;
  };
  price_level?: number | undefined;
  rating: number;
  reference: string;
  types: string[];
  user_ratings_total: number
}

export type VoteType = {
  voteData?: any;
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

export const testContext = {
	page: '',
	setPage: ()=>null,
	formData: { name: '', postcode: '', movie: { adult: true,
		backdrop_path: '',
		id: null,
		title: '',
		original_language: '',
		original_title: '',
		overview: '',
		poster_path: '',
		media_type: '',
		genre_ids: [],
		popularity: 0,
		release_date: '',
		video: false,
		vote_average: 0,
		vote_count: 0
	},
	restaurant: {
		business_status: '',
		formatted_address: '',
		geometry: {
					 location: { lat: 0, lng: 0 },
					 viewport: {
					   northeast: { lat: 0, lng: 0 },
					   southwest: { lat: 0, lng: 0 },
					},
				 },
		icon: '',
		icon_background_color: '',
		icon_mask_base_uri: '',
		name: '',
		opening_hours: { open_now: true },
		photos: [{
				   height: 0,
				   html_attributions: [''],
				   imgsrc: '',
				   photo_reference: '',
				   width: 0
				 }],
		place_id: '',
		plus_code: {
		  compound_code: '',
		  global_code: '',
		},
		price_level: 0,
		rating: 0,
		reference: '',
		types: [''],
		user_ratings_total: 0
	}
    },
	setFormData: ()=>null
	}

  export interface Iprops  {
    socket: Socket
  }

