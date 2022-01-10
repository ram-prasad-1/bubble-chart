# Awesome Bubble Chart &trade;

## Deployment URL
**[bubble-chart-amber.vercel.app](https://bubble-chart-amber.vercel.app/)**

## Instructions for running in local
Run `npm i` followed by `npm run startLocal`

## Features

### Code

- Server side rendered (SSR) using Next.js
- Styling using TailwindCSS
- API integration using axios
- Integration with ESLint and Prettier with pre-commit formatting enabled via husky and lint-staged
- Scalable architecture
- Unit Tests added using react-testing-library and Jest

### UI

- SVG Bubbles with decorated axes
- Bubbles resize and fit automatically based on the input data size
- Human friendly Colors
- Resizable Text
- Tool tip on Hover
- Bubbles are stacked such that no bubble will get hiddden
- Direct share to Twitter CTA

## Regarding Testing

As of now, only few tests are written. Rest assured, I understand the importance of testing and well written tests.
Just so you know, The principles I follow when writing tests are discussed in next section.


## Testing Best Practices

### Golden Rule: Design for lean testing [↗︎](https://github.com/goldbergyoni/javascript-testing-best-practices#section-0%EF%B8%8F%E2%83%A3-the-golden-rule)

Design it to be dead-simple, short, abstraction-free, flat, delightful to work with, lean. One should look at a test and get the intent instantly.

This can be achieved by selectively cherry-picking techniques, tools and test targets that are cost-effective and provide great ROI. Test only as much as needed, strive to keep it nimble, sometimes it's even worth dropping some tests and trade reliability for agility and simplicity.

### Stick to black-box testing: Test only public methods [↗︎](https://github.com/goldbergyoni/javascript-testing-best-practices#-%EF%B8%8F-14-stick-to-black-box-testing-test-only-public-methods)

Testing the internals brings huge overhead for almost nothing. If your code/API delivers the right results.

### Write tests. Not too many. Mostly integration. [↗︎](https://twitter.com/rauchg/status/807626710350839808)

## ToDo
- Refresh on click at client side
- Handle edge cases where bubble radius is really low

