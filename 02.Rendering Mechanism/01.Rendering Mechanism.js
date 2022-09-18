import {
    h
} from 'vue';

const App = {
    render() {
        // v-if
        let nodeToReturn
        if (this.ok) {
            nodeToReturn
        } else {

        }
        return h(nodeToReturn)
        // v-for="item in list"
        return this.list.map(item => {
            return h('div', {
                key: item.id
            }, item.text)
        })

    }
}