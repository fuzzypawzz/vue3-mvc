<template>
  <div class="switch">
    <label
      class="switch__label"
      :class="{ 'switch__label--cursor-not-allowed': disabled }"
      :for="uuid"
    >
      <slot />
    </label>

    <button
      :id="uuid"
      :aria-checked="isOn"
      :aria-readonly="disabled"
      class="switch__button knob-icon"
      :disabled="disabled"
      role="switch"
      @click="toggle()"
    >
      <span aria-hidden="true" />
      <span class="switch__knob" />
      <span aria-hidden="true" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { v4 as uuidv4 } from 'uuid'
import {onMounted, ref, watch} from 'vue'

type SwitchState = {
  value: string | boolean | object
  isOn: boolean
}

const props = defineProps({
  initiallyOn: {
    type: Boolean,
    default: false
  },

  disabled: {
    type: Boolean,
    default: false
  },

  value: {
    type: [String, Boolean, Object],
    default: ''
  },
})

const uuid = ref(`checkbox-${uuidv4()}`)
const isOn = ref(props.initiallyOn)

const emit = defineEmits<{
  (event: 'update:input', data: SwitchState): void
}>()

function toggle() {
  isOn.value = !isOn.value
}

function handleChange() {
  emit('update:input', {
    value: props.value,
    isOn: isOn.value
  })
}

watch(isOn, handleChange, { immediate: true })
</script>

<style lang="scss" scoped src="./switch-toggle.css"></style>

