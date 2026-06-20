const eventBus = ref({});

function emit(event, data) {
  if (!eventBus.value[event]) {
    eventBus.value[event] = [];
  }
  eventBus.value[event].forEach(callback => callback(data));
}

function on(event, callback) {
  if (!eventBus.value[event]) {
    eventBus.value[event] = [];
  }
  eventBus.value[event].push(callback);
}

function off(event, callback) {
  if (eventBus.value[event]) {
    eventBus.value[event] = eventBus.value[event].filter(cb => cb !== callback);
  }
}

export { emit, on, off };