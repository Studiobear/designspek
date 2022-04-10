import { SvelteComponentTyped } from "svelte";

export interface ButtonProps {
  text?: string;
  style?: any;
  theme?: any;
  critical?: boolean;
}

declare class Button extends SvelteComponentTyped<
  ButtonProps,
  { click: any },
  {}
> {
  /**
   * Basic Button component
   *
   * @remarks
   * This method is part of Designspek Primitives
   *
   * @param text - Button label text
   * @param style - JS style object
   * @param theme - App style theme
   * @returns Button
   */
}

export default Button;
