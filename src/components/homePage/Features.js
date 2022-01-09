
const Features = () => {
  return(
    <div className="mb-12">
      <h2 id='features'>Features</h2>
      <h3>Code</h3>
      <ul>
        <li>
          Server side rendered (SSR) using Next.js
        </li>
        <li>Styling using TailwindCSS</li>
        <li>API integration using axios</li>
        <li>Integration with ESLint and Prettier with pre-commit formatting enabled via husky and lint-staged</li>
        <li>Scalable architecture</li>
        <li>Unit Tests added using react-testing-library and Jest</li>
      </ul>
      <h3>UI</h3>
      <ul>
        <li>
          SVG Bubbles with decorated axes
        </li>
        <li>
          Bubbles resize and fit automatically based on the input data size
        </li>
        <li>
          Human friendly Colors
        </li>
        <li>
          Resizable Text
        </li>
        <li>
          Tool tip on Hover
        </li>
        <li>Direct share to Twitter CTA</li>
        <li>Bubbles are stacked such that no bubble will get hiddden</li>
      </ul>
    </div>
  )
}

export default Features;
