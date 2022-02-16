class Database<T> {
  protected readonly dataset: T[]

  constructor(dataset: T[]) {
    this.dataset = dataset
  }

  find(limit?: number, skip: number = 0): T[] {
    if (limit !== undefined) {
      return this.dataset.slice(skip, skip + limit)
    } else {
      return [...this.dataset]
    }
  }
  
  count(key: keyof T, value: any) {
    return this.dataset.filter((data) => data[key] === value).length
  }

  sort(compareFn: (a: T, b: T) => number) {
    this.dataset.sort(compareFn)

    return this
  }
}

export default Database
