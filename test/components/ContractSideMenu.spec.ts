import { fireEvent, render, screen } from "@testing-library/vue"
import { createRouter, createWebHistory } from "vue-router"
import ContractSideMenu from "../../src/components/ContractSideMenu.vue"
import Module from "../../src/domain/Module"

const module1: Module = new Module(1, "Rubrum")
module1.addSteps(
  { id: 1, text: "Schritt 1.1" },
  { id: 2, text: "Schritt 1.2" },
  { id: 3, text: "Schritt 1.3" }
)
const module2: Module = new Module(
  2,
  "Gegenstand und Bestandteile des Vertrags"
)
module2.addSteps(
  { id: 1, text: "Schritt 2.1" },
  { id: 2, text: "Schritt 2.2" },
  { id: 3, text: "Schritt 2.3" }
)

const testModules: Module[] = [module1, module2]

describe("ContractSideMenu", () => {
  const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: "/mitra-frontend/",
        name: "mitra-frontend",
        component: {
          template: "<div></div>",
        },
      },
      {
        path: "/mitra-frontend/contract",
        name: "mitra-frontend-contract",
        component: {
          template: "<div></div>",
        },
      },
    ],
  })

  beforeAll(async () => {
    router.push("/mitra-frontend/contract")
    await router.isReady()
  })

  it("should render all fixed menu items", async () => {
    render(ContractSideMenu, {
      props: {
        modules: testModules,
      },
      global: {
        plugins: [router],
      },
    })
    expect(screen.getByText("Startseite")).toBeVisible()
    expect(screen.getByText("Module")).toBeVisible()
    expect(screen.getByText("Fragenübersicht")).toBeVisible()
    expect(screen.getByText("TO-DOs")).toBeVisible()
    expect(screen.getByText("Notizen")).toBeVisible()
  })

  it("should render all modules", async () => {
    render(ContractSideMenu, {
      props: {
        modules: testModules,
      },
      global: {
        plugins: [router],
      },
    })
    await fireEvent.click(screen.getByText("Module"))
    expect(screen.getByText("1. Rubrum")).toBeVisible()
    expect(
      screen.getByText("2. Gegenstand und Bestandteile des Vertrags")
    ).toBeVisible()
  })
})
