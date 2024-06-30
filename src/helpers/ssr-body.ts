export function getServerSideRenderedBody() {
  const element = document.querySelector('#ssr-body')

  if (!element) throw new Error('Could not locate server side rendered html.')

  const markup = element.innerHTML

  element.remove()

  return markup
}