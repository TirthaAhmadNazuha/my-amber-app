import { BaseComponent } from '../../../Amber/index';

const Greeter = class extends BaseComponent {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <header>
        <img src="./Amber.webp" width="240" />
        <span>With</span>
        <img src="./OpenJSX.webp" width="240" />
        <h1>Welcome To Amber</h1>
        <p>This count is {this.state.count}</p>
        <button>Increst count</button>
      </header>);
  }

  afterRender() {
    this.element.querySelector('button').addEventListener('click', () => {
      this.state = {
        count: this.state.count().val + 1,
      };
    });
  }
};
export default Greeter;
