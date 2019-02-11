import { DateTime } from "ionic-angular";

export interface Event {

    eventType?: string,
    eventName?: string,
    eventDesc?: string,
    eventVenue?: string,

    eventDateStart?: string,
    eventDateEnd?: string,
    eventTimeStart?: string,
    eventTimeEnd?: string,
    eventDuration?: number,

    imgURL?: string,

    slotsTotal?: number,
    slotsTaken?: number,
    
}