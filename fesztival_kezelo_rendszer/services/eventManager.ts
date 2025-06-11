import { IEvent } from "../models/interfaces";
import { Event } from "../models/events";
import { IParticipants } from "../models/interfaces";

export class EventManager {
    private events: Map<string, IEvent> = new Map();

    addEvent(event: IEvent): void {
    this.events.set(event.id, event);
  }

   deleteEvent(id: string): void {
    this.events.delete(id);
  }
    
   eventsByCategory(category: string): IEvent[] {
    return Array.from(this.events.values()).filter((event) => event.category === category);

}
    getEvent(id: string): IEvent | undefined {
        return this.events.get(id);
  }
    listEvents():IEvent[]{
         return Array.from(this.events.values());
  }
    
    updateEvent(id : string, updatedEvent: IEvent): void{
        if ( this.events.has(id)){
            this.events.set(id, new Event(
                updatedEvent.id,
                updatedEvent.name,
                updatedEvent.category,
                updatedEvent.date,
                updatedEvent.location,
                updatedEvent.participants
            ));
        }
    }
}

