class AlarmClock {
    constructor() {
       this.alarmCollection = [];
       this.timerId = null; 
    }

    addClock (time, callback, id) {
        if (!id) {
            throw new Error('параметр id не передан');
        }
        if (this.alarmCollection.some(alarm => alarm.id === id)) {
            return console.error();
        }
        return this.alarmCollection.push({id, time, callback});
    }

    removeClock(id) {
        let start = this.alarmCollection.length;
        this.alarmCollection = this.alarmCollection.filter(alarm => alarm.id !== id);
        let end = this.alarmCollection.length; 
        return start > end;   
    }

    getCurrentFormattedTime() {
        return new Date().toLocaleTimeString().slice(0,-3);
    }

    start() {
        let checkClock = () => {
            this.alarmCollection.forEach((clock) => {
                if(clock.time == this.getCurrentFormattedTime()){
                  clock.callback()
                }
            })
        }

        if (this.timerId === null) {
            this.timerId = setInterval(checkClock, 1000);
        } 
    }

    stop () {
        if (this.timerId !== null) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms() {
        this.alarmCollection.forEach(e => console.log(`id: ${e.id} time: ${e.time}`));
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}

function testCase () {
    let alarmExample = new AlarmClock();
    alarmExample.addClock('10:00', () => console.log('Пора вставать'), 1);
    alarmExample.addClock('10:01', () => console.log('Вставай уже'), 2);
    alarmExample.removeClock(2);
    alarmExample.addClock('10:03', () => console.log('Вставай, уже проспала'), 3);
    alarmExample.printAlarms();
    alarmExample.start();
    alarmExample.stop();
}

testCase();