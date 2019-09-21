<template>
    <div>
        <div class="mb-2 flex justify-between">
            <h2 class="text-2xl font-bold text-gray-600">
                <router-link class="text-blue-500" to="/">Your orders</router-link> / Place new order
            </h2>
        </div>

        <div>
            <div class="w-1/2 flex flex-col">
                <p class="text-2xl text-gray-600">Client</p>
                <input v-model="temp_client" class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" type="text" placeholder="Client name...">
            </div>

            <div class="mt-4 flex">
                <div class="w-1/2 pt-4 pr-2">
                    <p class="text-2xl text-gray-600">Burgers</p>

                    <div class="flex text-gray-500">
                        <div class="w-2/3">Burger name</div>
                        <div class="w-1/3">Quantity</div>
                    </div>
                    <div v-for="(entry, index) in orderEntries" class="flex text-gray-600 p-2 border-b" :class="{'bg-gray-200':index%2}">
                        <div class="w-2/3 flex">
                            <div class="pr-2 text-red-500" @click="removeEntry(index)">x</div>
                            {{ burgers.find(el => el.id === entry.burger_id).name }}
                        </div>
                        <div class="w-1/3" v-text="entry.quantity"></div>
                    </div>
                </div>
                <div class="w-1/2">
                    <div class="ml-2 p-4 bg-gray-200 rounded">
                        <p class="text-2xl text-gray-600">Add burger</p>
                        <select v-model="temp_burger_id" class="mt-4 block bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal">
                            <option value="">Select one</option>
                            <option v-for="burger in burgers" :key="burger.id" :value="burger.id">
                                {{ burger.name }} ({{ burger.price }}DA)
                            </option>
                        </select>

                        <input v-model="temp_quantity" class="mt-4 block bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-1/2 appearance-none leading-normal" type="number">

                        <button @click="addEntry" class="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Add
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Place",
        data(){
            return {
                burgers: [
                    {
                        id: 1,
                        name: 'Supreme',
                        price: 250
                    }
                ],
                orderEntries: [],

                temp_client: null,
                temp_burger_id: null,
                temp_quantity: null,
            }
        },

        methods: {
            addEntry(){
                this.orderEntries.push({
                    burger_id: this.temp_burger_id,
                    quantity: this.temp_quantity
                });
                this.temp_burger_id = null;
                this.temp_quantity = null;
            },

            removeEntry(entryIndex)
            {
                this.orderEntries = this.orderEntries.filter((el, index) => index !== entryIndex)
            }
        }
    }
</script>

<style scoped>

</style>