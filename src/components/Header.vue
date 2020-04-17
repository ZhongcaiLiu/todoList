<template>
  <div id="header">
    <input type="text" placeholder="请输入今天的任务清单，按回车键确认" v-model="title" @keyup.enter="addItem" />
  </div>
</template>

<script>
export default {
  props: {
    addTodo: Function
  },
  data() {
    return {
      title: ""
    };
  },
  methods: {
    addItem() {
      //判断是否为空
      const title = this.title.trim();
      if (!title) {
        alert("输入的任务不能为空！");
        return;
      }
      //生成一个todo对象
      let todo = { title, finished: false };
      //调用父组件的方法
      this.addTodo(todo);
      //清空输入框
      this.title = "";
    }
  }
};
</script>

<style scoped>
#header input {
  width: 450px;
  height: 30px;
  border-radius: 8px;
  border: 1px solid #ddd;
  margin: 10px 0;
}
</style>