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

           </span>
        </li>
      </ul>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useTodoStore } from '../stores/todo';

    const store = useTodoStore();
    const todoList = ref(store.todoList);
    const isEditing = ref(false);
    const content = ref("");
    const contentError = ref("");
    const todoId = ref(0);

	watch(
      () => store.todoList,
      (newTodoList) => {
        todoList.value = newTodoList;
      }
    );

    const clearError = () => {
      contentError.value = '';
    };

    const onEditToggle = (id: number, todoContent: string) => {
		// console.log('id, content: ', id, todoContent);
      isEditing.value = true;
      todoId.value = id;
      content.value = todoContent;
    };

    // const handleChange = (e) => {
    //   content.value = e.target.value;
    //   contentError.value = null;
    // };

    const edit = () => {
      if (!content.value.trim()) {
        contentError.value = "You must write something!";
        return;
      }
	  store.editTodo(todoId.value,{ content: content.value, id: todoId.value })
      isEditing.value = false;
    };

    const deleteItem = (id:number) => {
		store.deleteToDo(id)
    };

  
</script>