<template>
  <section class="self-stretch h-full w-full p-8 overflow-auto">
    <div
      v-for="(task, index) in tasks"
      :key="task.title"
      :id="`task-${index}`"
      class="grid grid-cols-8 place-items-center mb-4 w-full"
    >
      <button
        aria-label="check"
        class="justify-self-start w-5 h-5 rounded-full border-solid border-3 border-gray-300 hover:border-primary transition ease-in duration-300"
      ></button>
      <p class="col-span-6 font-semibold justify-self-start cursor-pointer">
        {{ task.title }}
      </p>
      <button
        class="justify-self-end w-4 h-4 opacity-30 hover:opacity-100 transition-opacity ease-in duration-200"
      >
        <img src="/assets/x.svg" alt="x" />
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ListTodo',
  data() {
    return {
      hoverButton: false,
      tasks: [
        { title: 'Lorem ipsum dolor sit amet' },
        { title: 'Consectetur adipiscing elit' },
        { title: 'Sed do eiusmod tempor incididunt' },
        { title: 'Irure dolor in reprehenderit' },
      ],
    }
  },
}
</script>
