class Database<T> {
  protected readonly dataset: T[]

  constructor(dataset: T[]) {
    this.dataset = dataset
  }

  find(limit?: number, skip: number = 0, fields?: [keyof T]): Partial<T>[] {
    let items: Partial<T>[]

    if (limit !== undefined) {
      items = this.dataset.slice(skip, skip + limit)
    } else {
      items = [...this.dataset]
    }

    if (fields?.length) {
      console.log('Field is exists')
      items = items.reduce((pickedItems: Partial<T>[], item) => {
        let pickedItem: Partial<T> = {}
        fields.forEach((field) => {
          pickedItem[field] = item[field]
        })

        pickedItems.push(pickedItem)
        return pickedItems
      }, [])
    }

    return items
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
