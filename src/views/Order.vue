<template>
    <div>
        <div class="mb-2 flex justify-between">
            <h2 class="text-2xl font-bold text-gray-600">
                <router-link class="text-blue-500" to="/">Your orders</router-link> / Order details
            </h2>
            <router-link to="/place" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                + Place new order
            </router-link>
        </div>

        <div v-if="!order.delivered_at" class="bg-orange-200 text-orange-600 p-2 rounded">
            Your burgers are still on their way...
        </div>

        <div class="mt-2 text-lg text-gray-700 flex justify-between">
            <div v-text="order.id"></div>
            <div v-text="order.client"></div>
            <div v-text="order.ordered_at"></div>
            <div v-text="order.delivered_at"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Order",
        data(){
            return {
                order: {
                    id: 3,
                    client: "Kouceyla Hadji",
                    ordered_at: "21 Sept 2019 at 10:28",
                    delivered_at: null
                }
            }
        }
    }
</script>

<style scoped>

</style>