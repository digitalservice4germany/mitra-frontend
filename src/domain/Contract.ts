import Entity from "./Entity"
import Playbook from "./Playbook"
import Module from "./Module"
import { Answer, Step } from "./Step"

export default class Contract extends Entity {
  constructor(
    public title: string,
    public readonly modules: Module[],
    id?: string
  ) {
    super(id)
  }

  static fromPlaybook(playbook?: Playbook): Contract | undefined {
    if (!playbook) {
      return
    }
    const modules: Module[] = playbook.modules.map((module) => module.clone())
    return new Contract("", modules)
  }

  getSteps(): Step<Answer>[] {
    return this.modules.flatMap((module) => module.steps)
  }

  getNextStepFor(step: Step<Answer>): Step<Answer> | undefined {
    return this.getSteps()[this.#findStepIndex(step) + 1]
  }

  getPreviousStepFor(step: Step<Answer>): Step<Answer> | undefined {
    return this.getSteps()[this.#findStepIndex(step) - 1]
  }

  getModuleFor(step: Step<Answer>): Module | undefined {
    return this.modules.find((module) =>
      module.steps.find((x) => x.equals(step))
    )
  }

  #findStepIndex(step: Step<Answer>): number {
    return this.getSteps().findIndex((x) => x.equals(step))
  }
}
