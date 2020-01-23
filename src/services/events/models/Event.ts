export interface Event {
    id?: string;
    title: string;
    description: string;
    venue: string;
    date?: Date;
    booking: boolean;
    typeEvent?: string;
    state?: string;
    cancellationReason?: string;
    url?: string;
}