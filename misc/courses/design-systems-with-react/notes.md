The design system created for this course can be found [on this figma file](https://www.figma.com/file/jAZRIBiThidlADZWJgaWHL/design-systems-with-react-and-storybook).

# Notes

## What's a Design System?
---

- There's no industry-wide definition for what is a Design System. If we're talking to a designer about it, we're generally discussing it as a group of foundational design elements such as the UI Kit, color palettes, typography, grid, iconography etc. But for an engineer, the design system might be used to refer to the component library and style guide used in the application they're building;

- The division between the roles of a UI designer and a front-end engineer is becoming more and more blurred, converging towards an area that could be called "User Experience Engineering". That's why thinking about a Design System as both elements of the UI design and the technical aspects of it's implementation could be more accurate;

## Why a Design System Matters?
---

- To design an application is to put together components that convey meaning. We can use a lot of things to convey certain meanings, like graying out a button to say that it is innactive, or scaling an object when the use hovers over it to signify that it is clickable. A Design System is a way to enforce consistency of not just the looks of your components, but of how they behave when interacted with;

- The most obvious benefit of a Design System is keeping consistency accross your components, assuring not only that different sections of an application feel like they're part of the same product, but also that all of your products feel like they're part of the same brand identity;

- By enforcing consistency accross your components, you can also assure accessibility by enforcing, for instance, the use of an accessible color palette and type-scaling;

- As a company it's also advantageous to maintain consistency accross the components that make your products because when you need to reassign people from one team to another (that's potentially working on a different product), it takes way less time for them to get up and going, because they're already familiar with your components environment;

- Also, once you have an initial release of a product it's easier to add new features, beacause you have a foundation of components that can be easily reused or adapted to fit new purposes;

## Drawbacks of Design Systems
---

- Design Systems are difficult to build from scratch because they take a lot of work to get structured initially and be maintained in the future;

- They don't have a finite release state either. They're built to be used by many products with varying life-cycles, and even products that are still to be developed;

## The Three Pillars of Design Systems
---

- **Design Language:** It's the personality of a company, the brand identity, put into design assets. These design refer to foundational elements (such as color and typography) and the UI Kit
(a collection of components, such as buttons, text fiels etc.);

- **Component Library:** It's the implementation of the UI Kits we designed using the Design Language. They can be built with many different frameworks (like React and Vue) and other technologies (CSS pre-processors, CSS-in-JS libraries, animation libraries etc.);

- **Style Guide:** It's the documentation for the design language, UI Kit and component library;

## Building a Design System
---

1. Define your Design Principles
2. UI Audit
3. Create your checklists
4. Define your workflows

#### Defining Your Design Principles
---

- Design principles are the grounding values that drive the creation of your products. They try to answer the question "how do you want the user to feel when they're using your product?", which essentially drives the creation of your components;

- If an idea doesn't convey the emotions and meaning you're trying to express through your interface, they should not make it into your design system. Let's say you're building a website for a pet daycare and you have "joyful" as a design principle for your UI. Creating a design that makes use of very dark or really unsaturated colors, according to color theory, you're going against your design priciple because those don't really convey joyful emotions;

#### UI Audit
---

- Most of the time you're going to be working on applications that have already been built and are now being maintained, which means you probably have an UI that is comprised of a lot of combinations of components. In such cases, a necessary step is to UI audit;

- You need to go through your UI, register every component on every state they exist (if it's a button, those could be the hover state, active state, disabled state etc.) and throw them in a common place (a Figma file or a Sketch file for example). You're going to be grouping theses components by functionality, and not the appearance 

#### Prioritizing Components After Audit
---

- Once you've audited your UI, you must prioritize which components you should be working on first;

- You're going to want to focus on the things that have the highest impact and can be easily achiavable;

- It's also important to understand that integrating a new component to your system, impacts both your design and engineering team. That said, it's important to always consult with them before making decisions;

- Some of the questions you might ask to help you create a priority list are:
    1. Does this request embody your design principles?

    2. Does this request require a lot of design/development effort?

    3. Does this come with a high risk to the success of the product (can this potentially break things)?

    4. Does this request coincide with the product roadmap (can you fit it in your current workflow)?

    5. Does this product improve the UX of the product (will this be relevant to the user)?

    6. Is this request technically feasible?

- Once you answer these questions, you're going to want to turn them into impact statements and evaluate them on two metrics:
    1. **Adoption Metrics:** Metrics that indicate that a component should have a high priority. You're going to evaluate these metrics in terms of impact, identity and confidence;

    2. **Opposition Metrics:** Metrics that indicate that a component should have a lower priority. You're going to evaluate these metrics in terms of mainenance, risk and effort;

#### Design Checklist
---

- After you prioritize your components, you should be following a checklist to design them. This checklist may consist of things like:
    - **Accessibility:** can all users, regardless of circumstance, use this component?
    
    - **Interaction:** how should a component respond when it's interacted with?

    - **Context:** how and where should this component be used? 

    - **Completion:** are all states, including neutral, hover, focus and disabled, defined?

    - **Content:** does this component rely on any content?

    - **Customization:** are there any aspects of this component that can be customized? If so, how? (what colors and font sizes can it use, for instance);

    - **Screen Resolution:** how does this component look on varying screen resolutions?

#### Development Checklist
---

- Once you design your components, it's time to implement them. To do so, you can follow a checklist that contain things like:

    - **Acessibility:** can all users, regardless of circumstance, use this component?

    - **Responsiveness:** your components must respond to browser window resizing and varying screen resolutions;

    - **Completion:** does this component account for all aspects of the design?

    - **Customization:** have we implemented all of the customizable aspects of this component?

    - **Error Handling/Prop Validation:** are we validating the data that is passed to our components? And how do our components respond when something breaks?

    - **Browser Compatibility:** do the technologies we use work across all supported browsers or must we include polyfills?

#### Common Mistakes
---

- Starting for scale can overwelm your team very quickly, so only scale when needed. Remember: unless you're trying to build a generic component library to be used by third parties, your components should only work for your particular use cases;

- If you're going to be collaborating on a design system, it's important to come to an agreement on how to handle new requests and implement new stuff;

- Not documenting decisions may cause you to have to answer stakeholders frequently about why you're doing things the way you are. But if you have a document with every decision justified, they can just refer to that instead of asking you. Also, you can have a place to *remember* why you did things the way you did later on;

## Color Terminology
---

- **Shade:** a shade of a color is created by incorporating black to the base hue of that color, which darkens it;

- **Tint:** a tint is created by adding white to a base hue, which lightens the color;

- **Tone:** a tone is created by combining black and white (or gray) values with a base hue. Tones are subtle variations of the original color and can be used to create hover and active states;

## Typography
---

- Generally speaking you don't want to have more than three typefaces on your application (two is sort of the standard, one for paragraph text and the other for headers; and using only one can be great if you have to design something quickly and don't want the additional complexity of having multiple typefaces);

- It's also sort of standard, if you're going with two typefaces, to use one of them for body text (paragraphs, helpers etc.) and the other for headers (H1 through H5, for instance).

## Buttons
---

- Your buttons should look and function like they're buttons;

- There are a few main types of buttons:

    1. **Solid Buttons**: they're buttons with a solid background fill. They're easily recognizable and a great choice for primary buttons;

    2. **Ghost Buttons**: they're buttons without a background fill, having only an outline. They're generally a great choice for secondary buttons;

    3. **Icon Buttons**: they're buttons with no label, only having an icon. They're considered bad for accessibility, which means you'll have to supplement the lack of a label with aria attributes. You should use a label if you can, but specially on handheld devices icon buttons can come in handy to optmize screen space.

- Buttons can have drop shadows, which convey elevation and can be used to differentiate hover, focus and active states;

- Button labels should always be readable. You must make sure the contrast between your font color and the button background color makes the label readable. Uppercase text, font spacing and letter spacing can also affect label redability;

- Buttons should always be large enough to be clickable, even on mobile devices;

- When sizing buttons you can use the eight points rule, or increments of four depending on the font-size of the label and the button itself;

## Micro-interactions
---

- Micro-interactions are small animations whose purpose is to delight the user by providing feedback in regards to a task or inform the user about the status of a process or task;

- These small animations can help with a few things:

    1. **Perceived Performance:** animations can alter a user's perceived sense of time (distracting them from the fact that a task is taking time to be executed). Users are willing to wait longer for a task to be executed if they have a sense that something's happening;

    2. **Task Status:** we can use animations to inform the user about the status of a certain task. If, for instance, the user is waiting on a transaction to be completed we can show them animations that represent the current status of that transaction (requested, processing, completed successfully or unsuccessfully);

    3. **State Change:** if a user is filling out a form and enters information that is incorrect, we can use micro-interactions to draw their attention to the fact that a certain field's information needs to be corrected prior to submission;

    4. **Draw Attention:** we can use micro-interaction to draw the user's attention to something that's happening at the moment, like an animation idicating that someone is typing in a chat application;

    5. **Create Habits:** animations can also help forming habits in our users by showing a delightful animation when they perform an action that we want to be repeated;

    6. **Delight Users:** micro-interactions can also help retaining users during a boring task, such as setting up an account or filling a long form.

- Though micro-interactions are great and can serve many purposes, it's easy to overuse them, polluting our UI with excessive stimuli, that is, creating noise and causing the user to lose focus on what matters at that time;

- As a rule of thumb, animations should be accessible, intentional (you should animate things with purpose), relatable (they must feel like they're part of the real world) and they must not impact user's ability to go abot their business;
