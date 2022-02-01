import Entity from "./Entity"
import Metadata from "./Metadata"
import Module from "./Module"

export default class Playbook extends Entity {
  _metadata: Metadata

  constructor(
    public title: string = "Unbenanntes Playbook",
    public modules: Module[] = [],
    id?: string
  ) {
    super(id)
    this._metadata = { createdAt: new Date() }
  }

  get metadata(): Metadata {
    return Object.freeze(this._metadata)
  }

  updateMetadata(data: Partial<Metadata>): Playbook {
    this._metadata = { ...this._metadata, ...data }
    return this
  }

  addModules(...modules: Module[]): void {
    this.modules.push(...modules)
  }

  removeModule(module: Module): void {
    this.modules = this.modules.filter((item) => item !== module)
  }

  findModuleById(id: string): Module {
    const module = this.modules.find((module) => module.id === id)
    if (module === undefined) {
      throw new Error("Module not found")
    }
    return module
  }
}
