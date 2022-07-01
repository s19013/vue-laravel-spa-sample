<template>
    <div class="container-fluid bg-dark mb-3">
        <div class="container">
            <nav class="navbar navbar-dark">
                <span class="navbar-brand mb-0 h1">Vue Laravel SPA</span>
                <div>
                    <button class="btn btn-success mx-1 px-3">List</button>
                        <router-link :to="{name:'task.list'}">
                            <button class="btn btn-success mx-1 px-3">List</button>
                        </router-link>
                    <button class="btn btn-success mx-1 px-3">ADD</button>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>
    export default {}
</script>
