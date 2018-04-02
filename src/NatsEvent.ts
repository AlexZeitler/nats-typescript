class NatsEvent {
  public toString = (): string => {

    return JSON.stringify(this);
  }
}

export default NatsEvent;
