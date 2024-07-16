//* https://leetcode.com/problems/event-emitter/description/

class EventEmitter {

    constructor(){
        this.events = new Map()
    }
    
    subscribe(eventName, callback) {

        if(!this.events.has(eventName)){
            this.events.set(eventName, [])
        }

        const listeners = this.events.get(eventName)
        listeners.push(callback)
        
        return {
            unsubscribe: () => {

                const index = listeners.indexOf(callback)

                if(index !== -1){
                    listeners.splice(index, 1)
                }
                
            }
        };
    }
    
    emit(eventName, args = []) {

        if(!this.events.has(eventName)){
            return []
        }

        const listeners = this.events.get(eventName)
        const results = []

        for(const listener of listeners){
             results.push(listener(...args))
        }

        return results
        
    }
}