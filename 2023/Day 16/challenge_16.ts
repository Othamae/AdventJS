function transformTree(tree: number[]) {
    function createLeaf(tree: number[], index: number) {
        const value = tree[index]
        if (value != null) {
            const base = index * 2
            return {
                value: value,
                left: createLeaf(tree, base + 1),
                right: createLeaf(tree, base + 2)
            }
        }
        return null
    }

    const result = createLeaf(tree, 0)
    return result
}


console.log(transformTree([3, 1, 0, 8, 12, null, 1]))
/**
{
  value: 3,
  left: {
    value: 1,
    left: {
      value: 8,
      left: null,
      right: null
    },
    right: {
      value: 12,
      left: null,
      right: null
    }
  },
  right: {
    value: 0,
    left: null,
    right: {
      value: 1,
      left: null,
      right: null
    }
  }
}
 */