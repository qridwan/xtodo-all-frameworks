import { defineStore } from 'pinia'
import { ref } from 'vue'

type todoType = {
  id: number
  content: string
}

export const useTodoStore = defineStore('todo', {
  state: () => {
    const todoList = ref([
      { id: 1, content: 'Hit the gym' },
      { id: 2, content: 'Meet George' }
    ])

    return { todoList }
  },
  actions: {
    addTodo(content: string) {
      console.log('addTodo')
      this.todoList.unshift({ id: Math.ceil(Math.random() * 100), content: content })
    },
    deleteToDo(id: number) {
      console.log('deleteToDo: ', id, this.todoList)
      this.todoList = this.todoList.filter((item) => item.id !== id)
      console.log('this.todoList : ', this.todoList)
    },
    editTodo(id: number, todo: todoType) {
      console.log('editTodo: ')
      this.todoList = this.todoList.map((item) => (item.id == id ? todo : item))
    }
  }
})
