<script setup lang="ts">
  import Card from "primevue/card"
  import { useSession } from "../session"
  import CreateContractPanel from "./CreateContractPanel.vue"

  const session = useSession()
  session.rememberEntryPoint("creator")
</script>

<template>
  <main id="index" class="grid grid-rows-2 justify-center">
    <section>
      <h2 class="font-black mt-8 mb-2">Playbook erstellen</h2>
      <div class="flex flex-row">
        <Card>
          <template #content>
            <router-link to="/mitra-frontend/playbook/new" class="block">
              <span
                class="material-icons-outlined hover:bg-gray-50"
                aria-hidden="true"
                >add</span
              >
              Neues Playbook erstellen
            </router-link>
          </template>
        </Card>
        <Card>
          <template #content>
            <router-link to="/mitra-frontend/playbook/open" class="block">
              <span
                class="material-icons-outlined hover:bg-gray-50"
                aria-hidden="true"
                >edit</span
              >
              Bestehendes Playbook weiter bearbeiten
            </router-link>
          </template>
        </Card>
      </div>
    </section>
    <CreateContractPanel />
  </main>
</template>

<style>
  #index .p-card,
  #index .p-card-body,
  #index .p-card-content {
    /* Reset some out-of-the-box styling for Card component... */
    padding: 0;
    border: 0;
    box-shadow: none;
  }
  #index .p-card {
    @apply flex flex-col w-48 mr-2;
  }
  #index .p-card .material-icons-outlined {
    @apply flex flex-col items-center justify-center h-48 border border-slate-200 mb-2 text-6xl;
  }
</style>
