<template>
  <div
    class="modal"
    @click="$emit('close')"
    @keydown="escapeKeyDown"
    tabindex="0"
    :class="isVisible && 'modal--visible'"
  >
    <div
      @click.stop
      class="modal__card relative flex flex-col items-center rounded-md border bg-white shadow-md"
    >
      <slot />
      <button
        class="modal-close m-auto flex h-8 w-8 items-center justify-center rounded-full font-bold hover:bg-red-400"
        @click="$emit('close')"
      >
        <img src="/assets/close.svg" alt="close" class="h-5 w-5" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoModal',
  data() {
    return {
      isVisible: false
    }
  },
  mounted() {
    setTimeout(() => {
      this.isVisible = true
    }, 100)
  },
  methods: {
    close() {
      this.isVisible = false
    }
  }
}
</script>

<style>
.modal {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: fixed;
  inset: 0;
  z-index: 10;
  opacity: 0;
  pointer-events: none;
  background: rgba(0, 0, 0, 0.42);
  color: rgba(17, 24, 39, 1);
  transition: opacity 0.4s;
}
.modal--visible {
  display: flex;
  opacity: 1;
  pointer-events: auto;
}

.modal--invisible {
  display: flex;
  opacity: 0;
  pointer-events: auto;
}

.modal__card {
  width: 91%;
  max-width: 592px;
  border-radius: 16px;
}

.modal-close {
  position: absolute;
  top: 16px;
  right: 16px;
  color: rgb(255, 255, 255);
  background-color: rgba(220, 108, 81, 1);
  transition: background-color 0.3s;
}
</style>
