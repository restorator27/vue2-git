new Vue ({
    el: "#simplevue",
    data: {
        name: "Mark",
        job: "Painter"
    },
    methods: {
        greet: function(){ // создание метода
            return "Hello my name is" + this.name // обращение к data через this
        }
    }
})

{/* <template>
    <div></div>
</template> */}