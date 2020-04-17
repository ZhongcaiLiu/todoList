export default {
    readTodo() {
        return JSON.parse(localStorage.getItem('todolist')||'[]');
    },
    saveTodo(todos) {
        localStorage.setItem('todolist', JSON.stringify(todos));
    }
}