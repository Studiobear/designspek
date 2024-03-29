<p align="left"><img src="https://raw.githubusercontent.com/Studiobear/designspek/master/static/ds-horiz.png" width="440" height="80" /></p>

#### { to shape, to observe }: Reactive Design System

_Specifications for intelligent design_

---

#### **Designspek** is a multi-disciplinary approach to managing the complexity of design in interactive environments. Embracing the domains of _brand cultivation_ to _graphic and user experience design_ to _frontend engineering_. Elevating the common purpose of creators regardless of team size, skill sets and choice of implementation.

> e.g. GraphQL is an API query language implemented through the definition of a schema that acts as a "contract" between frontend and backend systems. In the same way, design specifications or "themes" may act as _contracts_ between abstracted design requirements and the interfaces implementing those requirements.

---

**TL;DR** - Jump to the implementations:

- [designspek](https://github.com/Studiobear/designspek/tree/master/libs/core) - a CSS-in-JSS theme-implementation library for SvelteJS
- [designspek-components](https://github.com/Studiobear/designspek/tree/master/libs/components) - primitive Svelte components to kickstart your reactive design lifestyle

**_Notice: Unstable API and under heavy development_**

---

## A Living Experiment

#### _Current iteration (2022 - present):_ All we needed was some Vanilla-Extract

For the past year this project has been dormant, yet in the blink of that passing time, tools have evolved or emerged opneing new opportunities for this system to "try again." A critical underlying pattern to Designspek is the reconciliation of those illusory seperation-of-concerns between HTML, CSS and JS. In the front-end world, main stream adoption of component architecture and markup, such as JSX, marry HTML and JS. However, CSS and pre-processors still have a distinct separation. Alternatives such as utility CSS frameworks or CSS-in-JS bring a tighter DX, but their integration still feels like second-class citizen.

Designspek's custom impelementation of pre-calculated atomic CSS is no longer needed as we now have [vanilla-extract](https://vanilla-extract.style/). Designspek shall hence forth move forward on its journey as an opinionated design system. 

#### _Past iteration 1 (2019 - 2020):_ Svelte meets System-UI

- [Svelte](https://svelte.dev/) is a UI development framework for creating boilerplate-free components that compile down to fast, virtual-DOM-free vanilla JS that is truly reactive.

- [System UI](https://system-ui.com/) is an evolving standard for creating consistent, interoperable UIs. It is the underlying foundation to many UI-themeing libraries such as Styled System, Rebass, ThemeUI, and more.

Design is the balance of form and function. The form of a design can be categorically reduced into space, color, typography, layout, position, etc., and thus can be specified within a theme object such as the standard being develop in System UI. The function of a design is determined by implementation on a spectrum from the static nature of an image to translatable elements of HTML to the perception of reactivity caused by mutation of underlying variables. Mutation in this instance is managed by Svelte DOM manipulation through javascript. Svelte also provides succinct clarity in its functional expression.

Such statements connote a sense of masterful control and surgical precision, but should be noted as mere generalizations. The reality of the complexity of design lies in the details and nuances of implementation and perception and as such, there is a limited usefulness to the generation of specifications. Added depth results in added complexity and so, as always, care and consideration is required.

Considerations within this iteration:

- **Scope of specifications**: What is the scope of the role and responsibility given to a design specification? At this stage, the specification provides visual constraints at the global level and the atomic component level. Are there use cases for specifying constraints in the middle layers from layouts to higher-order components, etc? Beyond visual constraints such as haptic or audible responses?
- **Nomenclature**: Clarify language used within context of Designspek. e.g., in regards to main style object, use of _specification_, _theme_, _schema_, etc.
- **Measurable value**: What value does Designspek create. Assuming Designspek creates value, is such value quantifiable/measurable?
