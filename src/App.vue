<template>
  <div id="app">
    <Header :addTodo="addTodo"></Header>
    <list :todos="todos" :delTodo="delTodo"></list>
    <Footer
      :sumFinished="sumFinished"
      :todosLength="todosLength"
      :selecterAll="selecterAll"
      :delFinished="delFinished"
    ></Footer>
  </div>
</template>

<script>
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
import localStorageUtil from "@/utils/localStorageUtil";

export default {
  data() {
    return {
      todos: localStorageUtil.readTodo()
    };
  },
  components: {
    Header,
    List,
    Footer
  },
  methods: {
    //添加任务
    addTodo(todo) {
      this.todos.unshift(todo);
    },
    //删除任务
    delTodo(index) {
      this.todos.splice(index, 1);
    },
    sumFinished() {
      let sum = this.todos.filter(t => t.finished == true);
      return sum.length;
    },
    todosLength() {
      return this.todos.length;
    },
    selecterAll(isCheck) {
      this.todos.forEach(t => (t.finished = isCheck));
    },
    delFinished() {
      this.todos = this.todos.filter(t => t.finished == false);
    }
  },
  watch: {
    todos: {
      handler: localStorageUtil.saveTodo,
      deep: true
      // immediate: true 为true就是一来就执行handler，为false就是当todos发生变化才执行handler
    }
  }
};
</script>

<style>
#app {
  width: 500px;
  border: 1px solid #ddd;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
}
button,
input {
  outline: none;
  border: none;
}
</style>
