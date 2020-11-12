export const hasNextRange = (offset = 0, currentPage = 0, totalPages = 0) =>
  currentPage + offset <= totalPages

export const hasPreviousRange = (offset = 0, currentPage = 0) =>
  currentPage - offset > 0

export const getTotalPages = (perPage: number, totalItems: number) =>
  Math.ceil(totalItems / perPage)

export const getRangeOffsets = (currentPage = 0) => [
  currentPage - 1,
  currentPage + 2
]

export const getRangeIndexes = (currentPage: number, totalPages: number) => {
  const [startOfRange, endOfRange] = getRangeOffsets(currentPage)

  if (startOfRange < 0) return [0, endOfRange]

  if (endOfRange > totalPages) return [startOfRange, totalPages]

  return [startOfRange, endOfRange]
}
