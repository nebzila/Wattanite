import { Vote, IVote } from "../models/schema"
import { Request, Response } from 'express';
import mongoose, { HydratedDocument } from "mongoose";

export const createVote = async (req: Request, res: Response) => {
  try {
    console.log('createVote running');
    const vote = new Vote(req.body);
    const savedVote = await vote.save()
    console.log('savedVote ', savedVote);
    res.send(req.body)
    res.status(201);
  } catch (err) {
    console.log('ERROR @createVote ', err);
    res.status(400);
  }
}

  export const getVote = async (req: Request, res: Response) => {
    try {
      console.log('getVote running');
      const name = req.params.name
      const voteFound = await Vote.findOne({name});
      if(voteFound)  res.status(200).send(voteFound)
      else res.status(404).json({message: 'Not found'})
    } catch (err) {
      console.log('ERROR @getVote ', err);
      res.status(500);
    }
  };