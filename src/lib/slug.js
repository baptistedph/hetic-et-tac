export const slug = link => {
  return link.replaceAll(' ', '-').replaceAll('é', 'e').toLowerCase()
}
