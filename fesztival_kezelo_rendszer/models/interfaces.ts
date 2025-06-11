export interface IEvent {
  id: string;
  name: string;
  date: Date;
  category: string;
  participants: Map<string, IParticipants>;
}

export interface IParticipants {
    id: string;
    name: string;
    email: string;
}