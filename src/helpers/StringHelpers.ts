export const truncateLongString = (text: string, truncAt = 100) => {
  if (text.length <= truncAt) return text

  return `${text.slice(0, truncAt)}…`
}
