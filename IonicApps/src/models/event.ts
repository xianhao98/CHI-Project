export interface Event {

    id?: number,
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

    slotsTotal?: string,
    slotsTaken?: string,
    
}