import { IEvent, IParticipants } from "../models/interfaces";


export class ParticipantsManager{
    private events: Map<string, IEvent> = new Map();

    addParticipant(eventId: string, participant: IParticipants): void {
        const event = this.events.get(eventId);
    if (event) {
      event.participants.set(participant.id, participant);
    }
  }

    removeParticipant(eventId: string, participantId: string): void {
        const event = this.events.get(eventId);
    if (event) {
      event.participants.delete(participantId);
    }
  }
}