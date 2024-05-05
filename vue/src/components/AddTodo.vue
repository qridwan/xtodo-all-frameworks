<template>
   <div className="form">
      <h2>What's your plan for today</h2>
      <input
		v-model="content"
        value="content"
        name="content"
      />
      <button type="button" class="button" @click="add">
        Add
      </button>
	  
	  <div v-if="contentError" class="error">{{ contentError }}</div>
	  
    </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useTodoStore } from "../stores/todo";

export default defineComponent({
  name: "AddTodo",
  setup() {
    const store = useTodoStore();
    const content = ref("");
    const contentError = ref(null);

    const clearError = () => {
      contentError.value = null;
    };

    const add = () => {
      if (!content.value.trim()) {
        contentError.value = "You must write something!";
        return;
      }

      store.addTodo(content.value);
      content.value = "";
    };

    return {
      content,
      contentError,
      clearError,
      add,
    };
  },
});
</script>
