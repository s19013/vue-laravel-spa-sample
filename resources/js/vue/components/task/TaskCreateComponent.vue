<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-sm-6">
                <!-- submitボタンを押すとsubmitメソッドが動くようにしている -->
                <form v-on:submit.prevent ="submit">
                    <div class="row">
                        <label for="title" class="col-sm-5 col-form-label">Title</label>
                        <input type="text" class="col-sm-9 form-control" id="title"  v-model="task.title">
                    </div>
                    <div class="row">
                        <label for="content" class="col-sm-5 col-form-label">Content</label>
                        <input type="text" class="col-sm-9 form-control" id="content"  v-model="task.content">
                    </div>
                    <div class="row">
                        <label for="person-in-charge" class="col-sm-5 col-form-label">Person In Charge</label>
                        <input type="text" class="col-sm-9 form-control" id="person-in-charge"  v-model="task.person_in_charge">
                    </div>
                    <button type="submit" class="btn btn-primary my-2">Submit</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                task:{}
            }
        },
        methods: {
            async submit(){
                // post通信で送る
                await axios.post('/api/tasks',this.task)
                .then((res) =>{
                    // jsから画面遷移
                    this.$router.push({name:'task.list'})
                });
            }
        },
    }
</script>
