import { StateComponent } from 'amber';
import '../styles/index.sass';

const App = class extends StateComponent {
  constructor() {
    super();
    this.makeStates({
      count: 0
    });
  }

  render() {
    return (
      <div className="app">
        <h1>Welcome to AmberJs</h1>
        <p>SPA web JavaScript framework with JSX and state to helpful make easly interface.</p>
      </div >
    );
  }
};

export default App;
