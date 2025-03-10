<script setup lang="ts">
  import Button from "primevue/button"
  import { computed, ref } from "vue"
  import { Answer } from "../../domain/Answer"
  import Contract from "../../domain/Contract"
  import { Step } from "../../domain/Step"
  import { useSession } from "../../session"
  import { stepAnswerEditComponent } from "./ComponentByStepType"

  const props = defineProps<{ contract: Contract }>()

  const session = useSession()

  const currentStep = ref(session.lastEditedStep(props.contract.id))

  const hasPreviousStep = computed(
    () =>
      props.contract.previousStepInPathAt(currentStep.value as Step<Answer>) !==
      undefined
  )

  const hasNextStep = computed(
    () =>
      props.contract.nextStepInPathAt(currentStep.value as Step<Answer>) !==
      undefined
  )

  const currentModule = computed(() => {
    return props.contract.getModuleFor(currentStep.value as Step<Answer>)
  })

  const previous = () => {
    const step = props.contract.previousStepInPathAt(
      currentStep.value as Step<Answer>
    )
    if (step) {
      currentStep.value = step
      session.rememberContract(props.contract, step)
    }
  }

  const next = () => {
    const step = props.contract.nextStepInPathAt(
      currentStep.value as Step<Answer>
    )
    if (step) {
      currentStep.value = step
      session.rememberContract(props.contract, step)
    }
  }
</script>

<template>
  <section :key="currentStep?.id">
    <h3 class="font-bold">
      {{ currentModule?.title }}
    </h3>
    <div class="mb-4">
      {{ currentStep?.prompt }}
    </div>
    <div v-if="currentStep?.description" class="mb-4">
      {{ currentStep.description }}
    </div>
    <component
      :is="stepAnswerEditComponent(currentStep as Step<Answer>)"
      :step="currentStep"
    />
    <div class="grid grid-cols-3 col-span-full">
      <Button
        v-if="hasPreviousStep"
        label="Zurück"
        class="p-button-outlined col-start-1"
        @click="previous"
      />
      <Button
        v-if="hasNextStep"
        label="Weiter"
        class="p-button-outlined col-start-3"
        @click="next"
      />
    </div>
  </section>
</template>

<style scoped>
  .p-button {
    min-width: 8vw;
  }
</style>
