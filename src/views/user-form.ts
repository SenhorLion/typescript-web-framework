export class UserForm {
  constructor(public parent: HTMLElement) {}

  eventsMap(): { [key: string]: () => void } {
    return {
      'click:button': this.onButtonClick,
      'mouseenter:h1': this.onHeaderHover,
    };
  }

  onButtonClick(): void {
    console.log('Yo, wha you want?!');
  }

  onHeaderHover(): void {
    console.log('Yo, you hovering bro!');
  }

  template(): string {
    return `
      <div>
        <h1>User Form</h1>
        <input />
        <button>Click me</button>
      </div>`;
  }

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();

    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(':');

      console.log('@EVENT_KEY', eventKey, '@EVENT_NAME', eventName, '@SELCTOR', selector);

      fragment.querySelectorAll(selector).forEach((element) => {
        element.addEventListener(eventName, eventsMap[eventKey]);
      });
    }
  }

  render(): void {
    const templateElement = document.createElement('template');

    templateElement.innerHTML = this.template();

    this.bindEvents(templateElement.content);

    this.parent.append(templateElement.content);
  }
}
