import NatsEvent from './NatsEvent';

class CustomerUpdatedEvent extends NatsEvent {
  constructor(content?: String) {
    super();
    this.name = content;
  }

  public name: String;

  public static fromJSON(json: string) : CustomerUpdatedEvent {
    return JSON.parse(json);
  }
}

export default CustomerUpdatedEvent