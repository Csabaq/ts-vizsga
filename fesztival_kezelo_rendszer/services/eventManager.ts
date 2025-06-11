import { IEvent } from "../models/interfaces";

class EventManager {
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
}