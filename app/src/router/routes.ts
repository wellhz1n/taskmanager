import { RouteRecordRaw, createMemoryHistory, createRouter } from "vue-router"
import HomePage from '../pages/home/HomePage.vue';
import TasksPage from '../pages/tasks/TasksPage.vue';

const routes = [
    { path: '/', component: HomePage },
    { path: '/tasks', component: TasksPage },

] as RouteRecordRaw[]


const router = createRouter({
    history: createMemoryHistory(),
    routes
})
export default router;