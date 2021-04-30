import { User } from './../models/user';
import { View } from './view';
export class UserForm extends View {
  eventsMap(): { [key: string]: () => void } {
    return {
      'click:.set-age-action': this.onSetRandomAge,
      'click:.set-name-action': this.onSetName,
    };
  }

  onSetName = (): void => {
    console.log('onSetName');
    // this.model.setRandomAge();
    const input = this.parent.querySelector('input');

    if (input && input.value) {
      const name = input.value;

      this.model.set({ name });
    }

    // TODO: Add alert notification for no input value
  };

  onSetRandomAge = (): void => {
    console.log('onSetRandomAge');
    this.model.setRandomAge();
  };

  template(): string {
    return `
      <div>
        <h1>User Form</h1>
        <div>User Name: ${this.model.get('name')}</div>
        <div>User Age: ${this.model.get('age')}</div>
        <input />
        <button class="set-age-action">Set random age</button>
        <div><button class="set-name-action">Change name</button></div>
      </div>`;
  }
}
