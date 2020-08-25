# Spek Objects

The current Designspek intent is to take in a specification (configuration) object, run calculations and optimizations on it, and internally store a new theme object while returning a function that processes CSS objects against that theme.

The intent is to declare a set of design specifications that create and assert consistency while maintaining enough flexibility to customize design as needed. This differs from other web design tool solutions, such as:

- **CSS-in-JS libraries**: CSS-in-JS solutions are most similar to Designspek in that they focus on enabling modular style while removing challenges caused by the nature of CSS such as inheritance and specificity. Solutions, such as [Styled Components](https://github.com/styled-components/styled-components),
- **JS Component libraries**:
- **CSS frameworks**:
