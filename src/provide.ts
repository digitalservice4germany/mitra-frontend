import PlaybookRepository from "./domain/PlaybookRepository"
import playbookRepository from "./infra/InMemoryPlaybookRepository"
import ContractRepository from "./domain/ContractRepository"
import contractRepository from "./infra/FileSystemContractRepository"
import PlaybookLoader from "./usecases/LoadPlaybook"
import filePlaybookLoader from "./infra/FileSystemPlaybookLoader"
import store, { ContractStore } from "./infra/ContractStore"

export const makePlaybookRepository: () => PlaybookRepository = () => {
  return playbookRepository
}

export const makeContractRepository: () => ContractRepository = () => {
  return contractRepository
}

export const makeFileSystemPlaybookLoader: () => PlaybookLoader<File> = () => {
  return filePlaybookLoader
}

export const makeContractStore: () => ContractStore = () => {
  return store
}
