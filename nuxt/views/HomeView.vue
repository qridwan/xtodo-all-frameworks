<script setup lang="ts">

import TodoIntro from '../components/TodoIntro.vue'
import ListTodo from '../components/ListTodo.vue'
import AddTodo from '../components/AddTodo.vue'
import FooterView from '../components/FooterView.vue'
</script>

<template>
  <main>
	<TodoIntro />
	<AddTodo/>
	<ListTodo />
	<FooterView />
	
  </main>
</template>
