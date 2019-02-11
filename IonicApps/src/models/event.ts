import { DateTime } from "ionic-angular";

export interface Event {

    id?: number,
    eventType?: string,
    eventName?: string,
    eventDesc?: string,
    eventVenue?: string,

    eventDateStart?: DateTime,
    eventDateEnd?: DateTime,
    eventTimeStart?: DateTime,
    eventTimeEnd?: DateTime,
    eventDuration?: number,

    imgURL?: string,

    slotsTotal?: number,
    slotsTaken?: number,
    
}