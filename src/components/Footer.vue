<template>
  <div id="footer">
    <input type="checkbox" v-model="isCheck" />
    <span>已完成{{finishedItem}}件/总计{{itemLength}}件</span>
    <button @click="delFinished">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  props: {
    sumFinished: Function,
    todosLength: Function,
    selecterAll: Function,
    delFinished: Function
  },
  computed: {
    finishedItem() {
      return this.sumFinished();
    },
    itemLength() {
      return this.todosLength();
    },
    isCheck: {
      get() {
        return this.finishedItem == this.itemLength && this.itemLength > 0;
      },
      set(isCheck) {
        this.selecterAll(isCheck);
      }
    }
  }
};
</script>

<style scoped>
#footer {
  width: 450px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 6px;
  box-sizing: border-box;
}
span {
  margin-left: -135px;
}
button {
  background-color: sandybrown;
  border-radius: 5px;
  border: 1px solid sandybrown;
  padding: 4px;
  color: #fff;
  cursor: pointer;
}
</style>