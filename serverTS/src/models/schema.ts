import {RestaurantType, MovieType} from './types';
import { Schema, model, Types } from 'mongoose';
import mongoose from './index'

// Step 1: Create interface representing MongoDB document.
export interface IVote {
  name: string,
  postcode: string,
  movie: MovieType,
  restaurant: RestaurantType
  id: Types.ObjectId
}
//Step 2: Create schema corresponding to interface
const voteSchema: Schema = new mongoose.Schema<IVote>({
  name: {type: String, required : true},
  postcode: {type: String, required: true},
  movie: {type:Object, required:true},
  restaurant: {type:Object, required:true}
}, {versionKey:false})

//Step 3: create model based on interface
export const Vote = model<IVote>('Vote', voteSchema);


