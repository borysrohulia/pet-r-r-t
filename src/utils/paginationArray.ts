export const paginationArray = (pagesCount: string, currentPage: string): string[] => {
  return Number(pagesCount) <= 8 ? simpleArray(pagesCount) : difArray(pagesCount, currentPage)
}

function simpleArray(pagesCount: string): string[] {
  return Array.from({length: Number(pagesCount)}, (_, i) => (i + 1).toString())
}

function difArray(pagesCount: string, currentPage: string): string[] {
  if (Number(currentPage) - 3 <= 1) {
    return [...Array.from({length: Number('6')}, (_, i) => (i + 1).toString()), '...', pagesCount]
  } else if (Number(currentPage) + 4 >= Number(pagesCount)) {
    return ['1', '...', ...Array.from([5, 4, 3, 2, 1, 0], x => (Number(pagesCount) - x).toString())]
  } else {
    return ['1', '...', ...Array.from([1, 0, -1, -2], x => (Number(currentPage) - x).toString()), '...', pagesCount]
  }
}

// 1, 2, 3, 4, 5, 6, ..., 950

// 1, ..., 4, 5, 6, 7, ..., 950

// 1, ..., 945, 946, 947, 948, 949, 950
