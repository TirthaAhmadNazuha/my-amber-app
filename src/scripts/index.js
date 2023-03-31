import '../styles/index.sass';
import Greeter from './greeter';

const greeter = new Greeter();

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');

  app.insertAdjacentElement('beforeend', greeter.create());
});
