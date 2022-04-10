import { render } from '@testing-library/svelte'
import Button from './Button.svelte'
import svelte from 'svelte-inline-compile'

beforeEach(() => {
  document.body.innerHTML = ''
})

test('Renders button', async () => {
  let { container, getByText } = render(svelte`
  <Button
  text="click me!"
/>
`)
  expect(container.firstChild?.firstChild).toMatchInlineSnapshot(`
  <button
    class="button"
  >
     
    click me!
  </button>
  `)
  expect(getByText('click me!')).toBeInTheDocument()
})
