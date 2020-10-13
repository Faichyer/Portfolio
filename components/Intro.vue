<template>
  <div class="container flex flex-col mt-32">
    <div class="loader">
      <div class="ringOne ring">
        <img src="~assets/images/ring.png" alt="">
      </div>
      <div class="ringTwo ring">
        <img src="~assets/images/ring.png" alt="">
      </div>
    </div>
    <div>
      <img src="~assets/images/Photo_miki_3.jpg" class="rounded-full w-24 xl:w-32">
    </div>
    <div class="xl:text-3xl lg:text-3xl md:text-2xl text-xl text-white font-medium mt-4">
      Miki Namsrai
    </div>
    <div class=" lg:text-6xl md:text-4xl text-3xl text-white font-title mt-10 font-hairline leading-none" >
      Web & Mobile
    </div>
    <div class="xl:text-8xl lg:text-6xl md:text-4xl text-3xl text-white font-title font-hairline leading-none" >
      Solution Architect
    </div>

    <!-- Introduction --->
    <div class="text-white font-normal text-2xl mt-12">
      Freelancer
    </div>
    <div class="text-white font-normal text-2xl">
      SAP MII Consultant at Movilitas
    </div>
    <div class="flex flex-row mt-12 text-white text-xl leading-8">
      <span class="click-see-profile cursor-pointer hover:text-purple-700 transition duration-500">See my profile</span><span class="ml-1"> or scroll down to see my work</span>
    </div>
  </div>
</template>

<style scoped>
.click-see-profile{
  border-bottom: 1px solid #fff;
  padding-bottom: 3px
}

.click-see-profile:hover{
  border:none ;
}

.ring{
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%
}

.ringOne img {
  animation: rotateRing 2s linear infinite
}

.ringTwo img {
  animation: rotateRing 8s linear infinite
}

@keyframes rotateRing {
  from{
    transform : rotate(0deg);
  }
  to {
    transform: rotate(360deg)
  }
}
</style>
