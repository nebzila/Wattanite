import React, { useState, createContext, Dispatch, SetStateAction, useEffect } from 'react';
import './main-box.css';
import StartScreen from '../start-screen/start-screen';
import MoviePage from '../movie-page/movie-page';
import RestaurantPage from '../restaurant-page/restaurant-page';
import WinnerPage from '../winner-page/winner-page';
import { MovieType, RestaurantType, winners } from '../../allTypes';
// import { MovieType, RestaurantType } from '../../../../serverTS/src/models/types';
import { VoteType, Iprops } from '../../allTypes';
import VotePage from '../vote-page/vote-page';


interface IContext {
	winnersList: any;
	setWinnersList: Dispatch<SetStateAction<any>>
	end: boolean;
	setEnd: Dispatch<SetStateAction<boolean>>
	votes: VoteType[];
	setVotes: Dispatch<SetStateAction<VoteType[]>>
	page: string;
	setPage: Dispatch<SetStateAction<string>>;
	formData: VoteType;
	setFormData: Dispatch<SetStateAction<VoteType>>;
}
// export const mainContext = createContext<IContext | undefined>(undefined);

export const mainContext = createContext<IContext>({
	winnersList: {},
	setWinnersList: ()=>null,
	end: false,
	setEnd: ()=>null,
	votes: [],
	setVotes: ()=>null,
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
	});

const MainBox = (props: Iprops) => {
	const [winnersList, setWinnersList] = useState<any>({})
	const [end, setEnd] = useState<boolean>(false)
	const [votes, setVotes] = useState<VoteType[]>([])
	const [page, setPage] = useState('name');
	const [formData, setFormData] = useState({
		name: '',
		postcode: '',
		movie: {} as MovieType,
		restaurant: {} as RestaurantType,
	});

	// setVotes((prevState) => {
	// 	return [...prevState, data]
	// });
	useEffect(() => {
    props.socket.on('vote-update-broadcast', (data) => {
      console.log('vote-update-broadcast ');
      setVotes(data);
    })

		props.socket.on('end-all', (winners) => {
			console.log('end is being broadcast')
			setWinnersList(winners)
			setEnd(true);
			setPage('vote')
		})
  }, [])

	return (
		<mainContext.Provider value={{winnersList, setWinnersList, setEnd, end, votes, setVotes, page, setPage, formData, setFormData  }}>
			<div className='main-box'>
				<h1 className='wattanite'>Wattanite!</h1>
				{
					{
						name: <StartScreen />,
						movies: <MoviePage />,
						restaurant: <RestaurantPage socket={props.socket} />,
						vote: <VotePage socket={props.socket} />,
					}[page]
				}
			</div>
		</mainContext.Provider>
	);
};

export default MainBox;
