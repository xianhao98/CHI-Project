export interface Event {

    eventName: string,
    eventDesc: string,
    eventvenue: string,
    eventType: string,

    imgUrl?: string,

    eventDateStart?: string,
    eventDateEnd?: string,
    eventTimeStart?: string,
    eventTimeEnd?: string,
    eventDuration?: number,

    slotsTaken?: string,
    slotsTotal?: string,
}