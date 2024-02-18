<script setup>

</script>

<template>
  <div class="flex justify-center mt-10">
    <img class="w-[50px] diamond" src="./assets/logo.svg" alt="">
  </div>
  <div class="flex justify-center mt-36 levanvo">

    <div class="flex w-[700px] border border-white justify-center  space-x-5">
      <router-link class="hover:text-pink-400 active:scale-90" to="/">Home</router-link>
      <router-link class="hover:text-pink-400 active:scale-90" to="/About">About</router-link>
      <router-link class="hover:text-pink-400 active:scale-90" to="/Notfound">Not-Found</router-link>
    </div>
  </div>
  <br>
  <router-view class="text-center" />
</template>

<style>
.diamond {
  box-shadow: 0 0 100px 1px green;
  animation: 10s siuu infinite;
}

.levanvo {
  margin-top: 30px;
  width: 100vw;
  animation: 10s siu infinite;
}

@keyframes siu {
  65% {
    margin: 30px 0 100px 0;
  }

  88% {
    margin: 400px 0 0 0;
  }
}

@keyframes siuu {
  65% {
    filter: drop-shadow(0 0 10px green);
  }

  88% {
    filter: drop-shadow(0 0 10px green);
  }
}
</style>