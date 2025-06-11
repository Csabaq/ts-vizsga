import { EventManager } from "./fesztival_kezelo_rendszer/services/eventManager";
import { Event } from "./fesztival_kezelo_rendszer/models/events";
import { ParticipantsManager } from "./fesztival_kezelo_rendszer/services/participantsManager";

const evManager = new EventManager();
const parManager = new ParticipantsManager();

const event = new Event(
  "1",
  "Tiesto",
  "Electronic",
  new Date("2025-07-01"),
  "Budapest"
);

evManager.addEvent(event);
evManager.deleteEvent(event.id);

parManager.addParticipant("1", {
  id: "1",
  name: "John Doe",
  email: "johndoe@example.com"
});