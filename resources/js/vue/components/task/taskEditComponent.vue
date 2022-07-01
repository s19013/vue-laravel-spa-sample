<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-sm-6">
                <form>
                    <div class="row">
                        <label for="id" class="col-sm-5 col-form-label">ID</label>
                        <input type="text" class="col-sm-9 form-control-plaintext" readonly id="id" v-bind:value="taskId">
                    </div>
                    <div class="row">
                        <label for="title" class="col-sm-5 col-form-label">Title</label>
                        <input type="text" class="col-sm-9 form-control" id="title">
                    </div>
                    <div class="row">
                        <label for="content" class="col-sm-5 col-form-label">Content</label>
                        <input type="text" class="col-sm-9 form-control" id="content">
                    </div>
                    <div class="row">
                        <label for="person-in-charge" class="col-sm-5 col-form-label">Person In Charge</label>
                        <input type="text" class="col-sm-9 form-control" id="person-in-charge">
                    </div>
                    <button type="submit" class="btn btn-primary my-2">Submit</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            taskId: String
        }
    }
</script>
