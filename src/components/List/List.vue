<template>
  <section class="h-full w-full self-stretch overflow-auto p-8">
    <div
      v-for="(task, index) in tasks"
      :key="task.title"
      :id="`task-${index}`"
      class="mb-4 grid w-full grid-cols-8 place-items-center"
    >
      <button
        aria-label="check"
        class="h-5 w-5 justify-self-start rounded-full border-3 border-solid border-gray-300 transition duration-300 ease-in hover:border-primary"
      ></button>
      <p class="col-span-6 cursor-pointer justify-self-start font-semibold">
        {{ task.title }}
      </p>
      <button
        class="h-4 w-4 justify-self-end opacity-30 transition-opacity duration-200 ease-in hover:opacity-100"
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
