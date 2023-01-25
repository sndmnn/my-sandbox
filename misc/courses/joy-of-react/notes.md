# Understanding JSX

In JSX any expression inside curly braces will be forwarded as a JavaScript expression to the `React.createELement` call, like so:

```
const list = ['mango', 'apple', 'banana'];

// a code that looks like this:

const element = (
    <p>You have {list.length} fruits in your list<p>
);

// will be translated to this:

const element = React.createElement(
    'p',
    {},
    'You have ',
    list.length,
    ' fruits in your list'
);
```

Therefore, we must only use valid JavaScript expressions (anything that's accepted on the right side of an assignment statement) inside the curly braces.

Curly braces are also valid as an attribute value, for instance:

```
const classNameValue = 'my-dynamic-class';

const element = (
    <p className={classNameValue}>This paragraph has an attribute 'className' with the value of {classNameValue}!<p>
);

// will be transpiled to

const element = React.createElement(
    'p',
    {
        className: classNameValue
    },
    "This paragraph has an attribute 'className' with the value of ",
    classNameValue
);
```

It's also important to note that we can't use any JavaScript reserved words in our JSX (because JSX is always transpiled to JavaScript at some point). That's why JSX syntax is mostly equal to HTML, but has a few adaptations (`for` is replaced with `htmlFor`, `class` with `className` and so on).

## JSX vs. Template Languages

Template languages turn markup into HTML, whereas JSX turns markup into JavaScript. 

That's amazing because template languages tend to be pretty narrow in their scope, being limited to a few helpers. But with JSX you have (almost) the full power of a fully fledged general purpose programming language in your markdown.
