import { SvelteTypedComponent, SvelteAllProps } from 'svelte-typed-component';

declare module '@studiobear/designspek-components' {
  export class Box extends SvelteTypedComponent<DSComponentProps, DSComponentEvents, DSComponentSlots>{}

  export class Button extends SvelteTypedComponent<DSComponentProps, DSComponentEvents, DSComponentSlots>{}

  export class Counter extends SvelteTypedComponent<DSComponentProps, DSComponentEvents, DSComponentSlots>{}

  export class Flex extends SvelteTypedComponent<DSComponentProps, DSComponentEvents, DSComponentSlots>{}

  export class Grid extends SvelteTypedComponent<DSComponentProps, DSComponentEvents, DSComponentSlots>{}

  export class Heading extends SvelteTypedComponent<DSComponentProps, DSComponentEvents, DSComponentSlots>{}

  export class Icon extends SvelteTypedComponent<DSComponentProps, DSComponentEvents, DSComponentSlots>{}

  export class Link extends SvelteTypedComponent<DSComponentProps, DSComponentEvents, DSComponentSlots>{}

  export class Section extends SvelteTypedComponent<DSComponentProps, DSComponentEvents, DSComponentSlots>{}

  export class SVG extends SvelteTypedComponent<DSComponentProps, DSComponentEvents, DSComponentSlots>{}

  export class Text extends SvelteTypedComponent<DSComponentProps, DSComponentEvents, DSComponentSlots>{}
  
  export class Card extends SvelteTypedComponent<DSComponentProps, DSComponentEvents, DSComponentSlots>{}

  export class CardBody extends SvelteTypedComponent<DSComponentProps, DSComponentEvents, DSComponentSlots>{}

  export class CardHead extends SvelteTypedComponent<DSComponentProps, DSComponentEvents, DSComponentSlots>{}

  export class Form extends SvelteTypedComponent<DSComponentProps, DSComponentEvents, DSComponentSlots>{}

  export class Table extends SvelteTypedComponent<DSComponentProps, DSComponentEvents, DSComponentSlots>{}

  export class TBody extends SvelteTypedComponent<DSComponentProps, DSComponentEvents, DSComponentSlots>{}

  export class TD extends SvelteTypedComponent<DSComponentProps, DSComponentEvents, DSComponentSlots>{}

  export class THead extends SvelteTypedComponent<DSComponentProps, DSComponentEvents, DSComponentSlots>{}

  export class TR extends SvelteTypedComponent<DSComponentProps, DSComponentEvents, DSComponentSlots>{}

}

declare const _DSComponentProps: {
  style?: any
  theme?: any
  critical?: boolean
} & SvelteAllProps
declare const _DSComponentEvents: { '*': any }
declare const _DSComponentSlots: {}
export declare type DSComponentProps = typeof _DSComponentProps
export declare type DSComponentEvents = typeof _DSComponentEvents
export declare type DSComponentSlots = typeof _DSComponentSlots

export {}