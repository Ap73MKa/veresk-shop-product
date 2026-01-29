function byTypename<
  T extends { __typename: string },
  N extends T["__typename"]
>(typename: N) {
  return (item: T): item is Extract<T, { __typename: N }> =>
    item.__typename === typename
}

export { byTypename }
