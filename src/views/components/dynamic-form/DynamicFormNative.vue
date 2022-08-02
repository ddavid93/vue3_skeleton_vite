<template>

  <Form
    class="form"
    @submit="$emit('submitForm')"
    :validation-schema="schema.validation">
    <div class="row">
      <template v-for="{ as, name, label, ...attrs } in schema.fields" :key="name">
        <div class="mb-5" :class="attrs.classDiv">
          <label :class="{'required':isRequired(name)}" :for="name" class="d-flex align-items-center fs-6 fw-bold form-label mb-2">
            {{ label || getLabel(name) }}
          </label>
          <div :class="{'position-relative d-flex flex-column':attrs.icon}">
            <Field class="form-control form-control-solid"
                   :as="as"
                   :id="name"
                   :v-model="name"
                   :name="name"
                   :v-bind="attrs"/>

            <div class="position-absolute translate-middle-y top-50 end-0 me-2" v-if="attrs.icon">
              <span class="svg-icon svg-icon-2x">
                <inline-svg :src="attrs.icon"/>
              </span>
            </div>
            <div class="fv-plugins-message-container">
              <ErrorMessage class="fv-help-block" :name="name"/>
            </div>
          </div>
        </div>
      </template>
    </div>
  </Form>

</template>
<script setup lang="ts">
import {ErrorMessage, Field, Form} from 'vee-validate';
import {IDefault} from "@/_core/interfaces/i-utils";
import {IDynamicFormConfig} from "@/_core/interfaces/i-dinamic-form-config";

const props = defineProps({
  schema: {
    type: Object as () => IDynamicFormConfig<IDefault>,
    required: true,
  },
})

const getLabel = (name: string) => name.charAt(0).toUpperCase() + name.slice(1)
const isRequired = (name) => props.schema.validation.fields[name]?.spec.presence === 'required'

</script>