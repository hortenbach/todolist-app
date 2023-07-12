const Status = Object.freeze({
    Done: 'done',
    Pending: 'pending'
}) 

class Item {
    constructor(text) {
        this.text = text;
        this.status = Status.Pending;
        this.timestamp = Date.now();
    }

    get text() {
        return this.text;
    }

    get status() {
        return this.status;
    }

    get timestamp() {
        return this.timestamp();
    }

    done() {
        this.status = Status.Done;
    }
}