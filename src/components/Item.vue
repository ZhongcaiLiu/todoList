<template>
  <div id="item">
    <div>
      <input type="checkbox" v-model="todo.finished" />
      <span>{{todo.title}}</span>
    </div>
    <button @click="delItem">删除</button>
  </div>
</template>

<script>
export default {
  props: {
    todo: Object,
    delTodo: Function,
    index: Number
  },
  methods: {
    delItem() {
      if (window.confirm(`你确认删除${this.todo.title}任务吗？`)) {
        this.delTodo(this.index);
      }
    }
  }
};
</script>

<style scoped>
#item {
  width: 450px;
  height: 40px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  padding-left: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
button {
  border-radius: 5px;
  background-color: sandybrown;
  cursor: pointer;
  margin-right: 10px;
  color: #fff;
  padding: 4px;
  display: none;
}
#item:hover {
  background-color: #eee;
}
#item:hover button {
  display: block;
}
</style>