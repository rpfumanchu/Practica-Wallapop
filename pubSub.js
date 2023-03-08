class PubSub {

  TOPICS = {
    SHOW_NOTIFICATION: 'SHOW_NOTIFICATION'
  }

  constructor() {
    this.topics = {};
    this.hOP = this.topics.hasOwnProperty;
  }

  subscribe(topic, listener) {
    // Crear el objeto del tema si aún no se ha creado
    if (!this.hOP.call(this.topics, topic)) this.topics[topic] = [];

    // Agregar el oyente a la cola
    var index = this.topics[topic].push(listener) - 1;

    // Proporcionar identificador para eliminar el tema
    return {
      remove: function () {
        delete this.topics[topic][index];
      },
    };
  }

  publish(topic, info) {
    // Si el tema no existe o no hay oyentes en la cola, simplemente déjalo
    if (!this.hOP.call(this.topics, topic)) return;

    // Recorra la cola de temas
    this.topics[topic].forEach(function (item) {
      item(info != undefined ? info : {});
    });
  }
}

export const pubSub = new PubSub();
