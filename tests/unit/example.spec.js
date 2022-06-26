import {mount} from '@vue/test-utils'
import {nextTick, ref} from "vue";

const App = {
    setup() {
        const count = ref(0)

        const increment = () => {
            count.value += 1;
        }

        return {
            count,
            increment
        }
    },
    template: `
      <button @click="increment">Increment</button>
      <div v-if="count % 2 === 0">
      Count: {{ count }}. Count is even.
      </div>

      <div v-if="count % 2 !== 0">
      Count: {{ count }}. Count is odd.
      </div>
    `
}

function factory({data} = {data: {}}) {
    return mount(App, {
        data() {
            return data;
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