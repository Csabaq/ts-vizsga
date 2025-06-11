import { IParticipants } from "./interfaces";

export class Event {
    constructor(
        public id: string,
        public name : string,  
        public category: string,
        public date : Date,
        public location : string,
        public participants: Map<string, IParticipants> = new Map()
    ){}
}