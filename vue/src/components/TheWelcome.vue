<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useTodoStore } from '../stores/todo';

const todoStore = useTodoStore();

const {todoList, addTodo} = (todoStore);

// console.log('todoList: ', {todoList: todoList});
</script>

<template>
  <div>
	
<!-- l -->
  </div>
  
</template>
