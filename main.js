var app = new Vue({
    el: '#app',
    data () {
        return {
            tasks: null
        }
    },

    mounted () {
        axios
            .post('https://ncors.herokuapp.com/api/post', {
                tasks: ['first', 'second', 'third']
        })
            .then(response => (this.tasks = response.data.tasks))
    }

})