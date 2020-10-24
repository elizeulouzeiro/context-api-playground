export const truncateLongString = (text: string, truncAt = 100) => {
  if (text.length <= truncAt) return text

  return `${text.slice(0, truncAt)}…`
}

export const getFirstWordOfString = (text: string) => {
  const [word] = text.split(' ')

  return word
}
