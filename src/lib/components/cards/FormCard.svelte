<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import type { FormCard, FormField } from '../../types/CardTypes';
  import CardWrapper from '../CardWrapper.svelte';
  import CardCta from '../cta/CardCta.svelte';

  export let card: FormCard;
  export let onNext: () => void;
  export let isLastCard = false;

  const dispatch = createEventDispatcher();
  let formData = new FormData();
  let errors: { [key: string]: string } = {};
  let passwordValue = '';

  function validateField(field: FormField, value: string): string | null {
    if (field.required && !value) {
      return field.validation.message;
    }

    if (field.validation.pattern && !new RegExp(field.validation.pattern).test(value)) {
      return field.validation.message;
    }

    if (field.validation.minLength && value.length < field.validation.minLength) {
      return field.validation.message;
    }

    if (field.validation.maxLength && value.length > field.validation.maxLength) {
      return field.validation.message;
    }

    if (field.validation.matchField && field.validation.matchField === 'password') {
      if (value !== passwordValue) {
        return field.validation.message;
      }
    }

    return null;
  }

  function handleInput(event: Event, field: FormField) {
    const input = event.target as HTMLInputElement;
    const error = validateField(field, input.value);

    if (field.type === 'password' && field.name === 'password') {
      passwordValue = input.value;
    }

    if (error) {
      errors[field.name] = error;
    } else {
      delete errors[field.name];
    }
  }

  function handleSubmit(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    formData = new FormData(form);

    // Validate all fields
    errors = {};
    card.fields.forEach((field) => {
      const value = formData.get(field.name) as string;
      const error = validateField(field, value);
      if (error) {
        errors[field.name] = error;
      }
    });

    if (Object.keys(errors).length === 0) {
      dispatch('submit', Object.fromEntries(formData));
      onNext();
    }
  }
</script>

<CardWrapper>
  <div class="flex flex-col h-full bg-gray-50">
    <div class="flex-1 p-6 overflow-y-auto">
      <h2 class="mb-2 text-2xl font-semibold">{card.title}</h2>
      <p class="mb-6 text-gray-600">{card.description}</p>

      <form on:submit={handleSubmit} class="space-y-4">
        {#each card.fields as field}
          <div class="space-y-1">
            <label class="block text-sm font-medium text-gray-700" for={field.name}>
              {field.label}
              {#if field.required}<span class="text-red-500">*</span>{/if}
            </label>

            {#if field.type === 'dropdown'}
              <select name={field.name} class="w-full px-3 py-2 border rounded-md" required={field.required} on:input={(e) => handleInput(e, field)}>
                <option value="">Select an option</option>
                {#each field.options as option}
                  <option value={typeof option === 'string' ? option : option.value}>
                    {typeof option === 'string' ? option : option.label}
                  </option>
                {/each}
              </select>
            {:else if field.type === 'radio'}
              <div class="space-y-2">
                {#each field.options as option}
                  <label class="flex items-center space-x-2">
                    <input type="radio" name={field.name} value={option.value} required={field.required} on:input={(e) => handleInput(e, field)} />
                    <span>{option.label}</span>
                  </label>
                {/each}
              </div>
            {:else if field.type === 'checkbox'}
              <div class="space-y-2">
                {#each field.options as option}
                  <label class="flex items-center space-x-2">
                    <input type="checkbox" name={field.name} value={option.value} on:input={(e) => handleInput(e, field)} />
                    <span>{option.label}</span>
                  </label>
                {/each}
              </div>
            {:else if field.type === 'file'}
              <input type="file" name={field.name} accept={field.acceptedFileTypes?.join(',')} required={field.required} class="w-full" on:input={(e) => handleInput(e, field)} />
            {:else}
              <input type={field.type} name={field.name} placeholder={field.placeholder} required={field.required} class="w-full px-3 py-2 border rounded-md" on:input={(e) => handleInput(e, field)} />
            {/if}

            {#if errors[field.name]}
              <p class="text-sm text-red-500">{errors[field.name]}</p>
            {/if}
          </div>
        {/each}
      </form>
    </div>
    <CardCta {onNext} {isLastCard} labelNext={card.cta.labelNext} labelFinish={card.cta.labelFinish} subText={card.cta.subText} />
  </div>
</CardWrapper>
