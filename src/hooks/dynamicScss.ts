const SCSS = 1
function toScss(nameCss: string) {
  switch (nameCss) {
    case 'sAbout':
      if (SCSS === 1) {
        // import('@vi/sAbout/index.scss')
      }
      break

    case 'index':
      if (SCSS === 1) {
        // import('../views/sAbout/index.scss')
      }
      break
    default:
      /* code */
      break
  }
}
export default toScss
