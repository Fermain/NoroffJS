# NoroffJS: The Funniest Component Library You Should Never Use in Production

Welcome to **NoroffJS**, where we make web components fun, but definitely not production-grade. Ever wanted to use a library that was built for the laughs, not the loads? You've come to the right place!

## Why NoroffJS?

NoroffJS was born out of the desire to teach and have fun. In no way should it be considered a viable alternative to more serious, well-established frameworks or libraries. If you use it in production, well, we won't stop you, but remember - we warned you.

Here's a list of reasons why NoroffJS shouldn't be used in production:

1. It's performance-agnostic. We care more about making you smile than about shaving off those extra milliseconds.
2. It's bug-rich. Why have smooth, error-free code when you can have surprises that keep you on your toes?
3. No community, no support. Ask a question about NoroffJS on Stack Overflow and watch the tumbleweeds roll by.

## What does NoroffJS offer?

Despite its shortcomings, NoroffJS does have some fun features:

- A simple, yet quirky way to create custom HTML elements.
- Rudimentary lifecycle hooks like `onMount`, `onDestroy`, and `onUpdate`.
- A completely over-engineered event system for dispatching and listening to custom events.

## A quick example

```typescript
import NoroffJS from 'noroffjs';

class MyComponent extends NoroffJS.Component {
  static tagName = 'my-component';

  protected onMount() {
    console.log('Mounted! This is where the fun begins!');
  }

  render() {
    super.render();
    this.shadowRoot.innerHTML += `<h1>Welcome to NoroffJS, where the bugs are feature and performance is optional!</h1>`;
  }
}

MyComponent.register();
```

Add `<my-component/>` in your HTML file, and voila! You're now a NoroffJS developer!
