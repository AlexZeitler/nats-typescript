import * as NATS from 'nats';
import CustomerUpdatedEvent from './CustomerUpdatedEvent';

const nats = NATS.connect('nats://nats:4222');

// Simple Publisher

setTimeout(() => {
  nats.publish('customer.updated', new CustomerUpdatedEvent('PDMLab').toString());
}, 10000);

// Simple Subscriber
nats.subscribe('customer.updated', msg => {
  const customerUpdatedEvent = CustomerUpdatedEvent.fromJSON(msg);

  console.log('Received a message: ' + customerUpdatedEvent.name);
});