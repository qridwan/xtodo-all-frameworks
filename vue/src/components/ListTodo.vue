<template>
   <div>
    <template v-if="isEditing">
      <div class="form">
        <h2>Update your plan for today</h2>
        <input type="text" v-model="content" @input="clearError"/>
        <button type="button" class="button" @click="edit">Edit</button>
        <div v-if="contentError" class="error">{{ contentError }}</div>
      </div>
    </template>
    <template v-else>
      <ul class="todos">
        <li class="grid" v-for="todo in todoList" :key="todo.id">
          <span class="content">{{ todo.content }}</span>
          <span class="todo-action">
			<button class="close" @click="deleteItem(todo.id)">
				❌	
			</button>
			<button class="edit" @click="onEditToggle(todo.id, todo.content)">
				🖋️ 
			</button>

            <!-- <AiOutlineCloseCircle class="close" @click="deleteItem(todo.id)" /> -->
            <!-- <AiFillEdit class="edit" @click="onEditToggle(todo.id, todo.content)" /> -->
          </span>
        </li>
      </ul>
    </template>
  </div>
</template>

<script>
import { ref, watch } from 'vue';
import { useTodoStore } from '../stores/todo';
export default {
	name: "ListTodo",
  
  setup() {
    const store = useTodoStore();
    const todoList = ref(store.todoList);
    const isEditing = ref(false);
    const content = ref("");
    const contentError = ref(null);
    const todoId = ref("");

	watch(
      () => store.todoList,
      (newTodoList) => {
        todoList.value = newTodoList;
      }
    );

    const clearError = () => {
      contentError.value = null;
    };

    const onEditToggle = (id, todoContent) => {
		console.log('id, content: ', id, todoContent);
      isEditing.value = true;
      todoId.value = id;
      content.value = todoContent;
    };

    const handleChange = (e) => {
      content.value = e.target.value;
      contentError.value = null;
    };

    const edit = () => {
      if (!content.value.trim()) {
        contentError.value = "You must write something!";
        return;
      }
	  store.editTodo(todoId.value,{ content: content.value, id: todoId.value })
      isEditing.value = false;
    };

    const deleteItem = (id) => {
		store.deleteToDo(id)
    };

    return {
      todoList,
      isEditing,
      content,
      contentError,
      clearError,
      onEditToggle,
      handleChange,
      edit,
      deleteItem,
    };
  },
}
</script>