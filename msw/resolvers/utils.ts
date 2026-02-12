import type { PageInfo } from "~/shared/api"

export const createPageInfo = <T extends { id: string }>(
  items: T[],
  hasMore: boolean
): PageInfo => ({
  __typename: "PageInfo",
  hasNextPage: hasMore,
  hasPreviousPage: false,
  startCursor: items[0]?.id ?? null, // Explicit null
  endCursor: items[items.length - 1]?.id ?? null // Explicit null
})

export const paginate = <
  T extends { id: string },
  EdgeType extends { __typename: string; node: T; cursor: string }
>(
  items: T[],
  pagination: { limit?: number; offset?: number; after?: string } = {},
  edgeTypename: string // По умолчанию ProductEdge
): { edges: EdgeType[]; pageInfo: PageInfo } => {
  if (!Array.isArray(items)) {
    return {
      edges: [],
      pageInfo: {
        __typename: "PageInfo",
        hasNextPage: false,
        hasPreviousPage: false,
        startCursor: null,
        endCursor: null
      }
    }
  }

  let start = 0
  if (pagination.offset) start = pagination.offset
  if (pagination.after) {
    const afterIndex = items.findIndex((item) => item.id === pagination.after)
    start = afterIndex + 1
  }

  const limit = pagination.limit || 20
  const paginated = items.slice(start, start + limit)

  return {
    edges: paginated.map((node) => ({
      __typename: edgeTypename,
      node: node,
      cursor: node.id || `cursor-${Math.random()}`
    })) as EdgeType[],
    pageInfo: createPageInfo(paginated, start + limit < items.length)
  }
}
