<template>
  <div id="list">
    <item v-for="(todo, index) in todos" :key="index" :todo="todo" :delTodo='delTodo' :index='index'></item>
  </div>
</template>

<script>
import Item from "@/components/Item";
export default {
  props: {
    todos: Array,
    delTodo: Function
  },
  components: {
    Item
  }
};
</script>

<style>
</style>