// Medium - https://bigfrontend.dev/problem/create-an-Event-Emitter
class EventEmitter {
  constructor() {
    this.events = {};
  }
  subscribe(eventName, callback) {
    if (!this.events[eventName]) this.events[eventName] = [];
    this.events[eventName].push(callback);
    return {
      release: () => {
        const callbacks = this.events[eventName];
        const index = callbacks.indexOf(callback);
        callbacks.splice(index, 1);
        if (!callbacks.length) delete this.events[eventName];
      },
    };
  }
  emit(eventName, ...args) {
    if (this.events[eventName]) {
      this.events[eventName].forEach((eventFn) => eventFn.call(null, ...args));
    }
  }
}
