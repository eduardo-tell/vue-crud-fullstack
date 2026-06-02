<template>
  <div class="input-wrapper">
    <label>{{ label }}</label>

    <input
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="base-input"
      type="text"
    />
  </div>
</template>

<script setup>
defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
})

defineEmits(['update:modelValue'])
</script>

<style scoped>
.input-wrapper {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.base-input {
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #d1d5db;
}
</style>