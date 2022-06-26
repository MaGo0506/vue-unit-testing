import {mount} from '@vue/test-utils'
import {nextTick, ref} from "vue";
import App from "./App.vue";
import {createStore} from "vuex";

const createVuexStore = () => {
    return createStore({
        state() {
            return {
                count: 0
            }
        },
        mutations: {
            increment(state) {
                state.count += 1;
            }
        }
    })
}

function factory() {
    // createLocalVue
    const store = createVuexStore();
    return mount(App, {
        global: {
            plugins: [store]
        }
    })
}

describe('App', () => {
    it('render count when odd', async () => {
        const wrapper = factory()
        await wrapper.find('button').trigger('click')
        expect(wrapper.html()).toContain('Count: 1. Count is odd')
    })

    it('render count when even', async () => {
        const wrapper = factory()
        await wrapper.find('button').trigger('click')
        await wrapper.find('button').trigger('click')
        expect(wrapper.html()).toContain('Count: 2. Count is even')
    })
});