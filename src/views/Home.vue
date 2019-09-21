<template>
  <div>
    <div class="mb-2 flex justify-between">
      <h2 class="text-2xl font-bold text-gray-600">Your orders</h2>
      <router-link to="/place" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        + Place new order
      </router-link>
    </div>
    <div class="flex flex-wrap">
      <div class="p-3 w-1/3" v-for="order in orders" :key="order.id">
        <router-link :to="'orders/' + order.id">
          <div class="bg-gray-200 shadow p-3" :class="{'bg-orange-200': !order.delivered_at}">
            <p class="text-5xl font-bold text-gray-400" :class="{'text-orange-400': !order.delivered_at}">#{{ order.id }}</p>
            <p class="text-gray-600 truncate" :class="{'text-orange-600': !order.delivered_at}">For: {{ order.client }}</p>
            <p class="text-gray-500" :class="{'text-orange-400': !order.delivered_at}" v-text="order.ordered_at"></p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'home',
  data(){
    return {
      orders: [
        {
          id: 3,
          client: "Kouceyla Hadji",
          ordered_at: "21 Sept 2019 at 10:28",
          delivered_at: null
        },
        {
          id: 2,
          client: "Abdelmounaam BENHOURIA",
          ordered_at: "18 Sept 2019 at 11:28",
          delivered_at: "18 Sept 2019 at 11:46"
        },
        {
          id: 1,
          client: "Kouceyla Hadji",
          ordered_at: "18 Sept 2019 at 10:28",
          delivered_at: "18 Sept 2019 at 11:59"
        },
      ]
    }
  }
}
</script>
