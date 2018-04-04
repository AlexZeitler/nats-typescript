import * as NATS from 'nats';
import CustomerUpdatedEvent from './CustomerUpdatedEvent';

const nats = NATS.connect('nats://nats:4222');

// Simple Publisher
nats.publish('customer.updated', new CustomerUpdatedEvent('PDMLab').toString());

// Simple Subscriber
nats.subscribe('customer.updated', msg => {
  const customerUpdatedEvent = CustomerUpdatedEvent.fromJSON(msg);

  console.log('Received a message: ' + customerUpdatedEvent.name);
});