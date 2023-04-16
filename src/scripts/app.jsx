import { StateComponent } from '../../../Amber';
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
        <button onClick={() => this.setState({ count: this.state.count.val + 1 })}>Count is: {this.state.count}</button>
      </div >
    );
  }
};

export default App;
