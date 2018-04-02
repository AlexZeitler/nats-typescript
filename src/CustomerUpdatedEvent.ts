import NatsEvent from './NatsEvent';

class CustomerUpdatedEvent extends NatsEvent {
  constructor(name: String) {
    super();
    this.name = name;
  }

  public name: String;

  public static fromJSON(json: string) : CustomerUpdatedEvent {
    return JSON.parse(json);
  }
}

export default CustomerUpdatedEvent