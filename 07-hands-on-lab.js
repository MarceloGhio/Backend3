class TicketManager {
    #priceBaseGain = 0.15;
    constructor() {
        this.events = [];
    }

    addEvent(name, site, price, capacity = 50, date = new Date()) {
        const event = {
            id: this.#getMaxId() + 1,
            name,
            site,
            capacity,
            price: price + (price * this.#priceBaseGain),
            date,
            participants: []
        };
        this.events.push(event);
    }

    #getMaxId(){
        let maxId = 0;
        this.events.map((event) => {
            if(event.id > maxId) maxId = event.id;
        })
        return maxId;
    };

    getEvents(){
        return this.events;
    }

    getEvent(idEvent){
        return this.events.find((event) => event.id === idEvent)};
    }

    addUser(idEvent, idUser) {
        const event = this.getEvent(idEvent);
        if(event) {
            if(! event.participants.includes(idUser)) event.participants.push(idUser);
        } else return `this event not exists`
    }

    eventTour(idEvent, newSite, newDate)
        const event = this.getEvent(idEvent);
        if(event){
            const newEvent = {
                ...event,
                id: this.#getMaxId() + 1,
                site: newSite,
                date: newDate,
                participants: []
            };
            this.events.push(newEvent);
        } else return `this event not exists`
    
};

const TicketManager = new TicketManager();

TicketManager.addEvent(`Lolapalooza`, `Rio Negro`, 50000);
console.log(TicketManager.getEvents());