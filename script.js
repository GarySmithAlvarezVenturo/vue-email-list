new Vue({
    el: '#app',
    data: {
        emails: []
    },
    mounted() {
        this.generateEmails();
    },
    methods: {
        generateEmails() {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then(response => {
                    this.emails.push(response.data.response);

                    if (this.emails.length < 10) {
                        this.generateEmails();
                    }
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }
});

