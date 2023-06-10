import Database from '.'
import projects, { Project } from '../config/projects.config'
import PostUtil from '../utils/PostUtil'

class ProjectDatabase extends Database<Project & { order: number }> {
  constructor() {
    super(projects.filter((project) => project.published).map((post, index) => ({ ...post, order: index })))
    this.sort((projectA, projectB) => {
      if (projectA.publishedAt > projectB.publishedAt) return -1
      if (projectA.publishedAt < projectB.publishedAt) return 1
      return projectB.order - projectA.order
    })
  }

  findByTitle(title: string) {
    return this.dataset.find((proj) => PostUtil.normalizeTitle(proj.title) === title || proj.title === title)
  }

  count() {
    return this.dataset.length
  }

  query(condition: string, limit?: number, skip: number = 0) {
    const normalizedConditions = condition.split(/\s/).map((cond) => cond.toLowerCase())

    const foundProjects = this.dataset.filter(({ title, description, category: project }) =>
      normalizedConditions.some((cond) => title.indexOf(cond) >= 0 || description.indexOf(cond) >= 0 || project.indexOf(cond) >= 0)
    )

    if (limit !== undefined) return foundProjects.slice(skip, skip + limit)
    return foundProjects
  }

  findByCategory(category: string, limit?: number, skip: number = 0) {
    const foundProjects = this.dataset.filter((project) => project.category === category)

    if (limit !== undefined) return foundProjects.slice(skip, skip + limit)
    return foundProjects
  }

  findByNormalizedTitle(normalizedTitle: string) {
    return this.dataset.find((project) => {
      return PostUtil.normalizeTitle(project.title) === normalizedTitle
    })
  }
}

const projectDatabase = new ProjectDatabase()

export default projectDatabase
