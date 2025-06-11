import { IEvent, IParticipants } from "./interfaces";

export class Event implements IEvent{
    constructor(
        public id: string,
        public name : string,  
        public category: string,
        public date : Date,
        public location : string,
        public participants: Map<string, IParticipants> = new Map()
    ){}
}