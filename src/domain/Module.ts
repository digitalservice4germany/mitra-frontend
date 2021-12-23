import Entity from "./Entity"
import { Answer, Step } from "./Step"

export default class Module extends Entity {
  constructor(
    public readonly text: string,
    public readonly steps: Step<Answer>[] = [],
    id?: string
  ) {
    super(id)
  }

  clone(): Module {
    return new Module(
      this.text,
      this.steps.map((step) => step.clone())
    )
  }
}
