<template>
  <div class=" md:block hidden w-1/3 h-full border-l border-lighter py-2 px-6 overflow-y-scroll relative ">
    <input class="pl-12 rounded-full w-full p-2 bg-lighter text-sm mb-4" placeholder="Search Twitter">
    <i class="fas fa-search absolute left-0 top-0 mt-4 ml-10 text-sm text-light "></i>
    <div class="w-full rounded-lg bg-lightest">
        <div class="flex items-center justify-between p-3">
            <p class="text-lg font-bold">Qué está pasando</p>
            <i class="fas fa-cog text-lg text-blue"></i>
        </div>
        <button v-for="trend in trending" :key="trend.id" class="w-full flex justify-between hover:bg-lighter p-3 border-t border-lighter">
            <div>
                <p class=" text-sm text-left leading-tight text-dark">{{trend.top}}</p>
                <p class="font-bold text-sm text-left leading-tight">{{trend.title}}</p>
                <p class=" text-left leading-tight text-dark">{{trend.bottom}}</p>
            </div>
            <i class=" fas fa-angle-down text-lg text-dark"></i>
        </button>
        <button class="p-3 w-full hover:bg-lighter text-left text-blue border-t border-lighter">
        Mostrar más
        </button>
    </div>
     <div class=" md:block hidden  w-full rounded-lg bg-lightest my-4">
        <div class=" p-3">
            <p class="text-lg font-bold">A Quién seguir</p>
            <i class="fas fa-cog text-lg text-blue"></i>
        </div>
        <button v-for="friend in friends" :key="friend.id"  class="w-full flex hover:bg-lighter p-3 border-t border-lighter">
            <img :src="`${friend.src}`" class="w-12 h-12 rounded-full border border-lighter"/>
            <div class="hidden lg:block ml-4 ">
                <p class="text-sm font-bold leading-tight"> {{ friend.name }} </p>
                <p class="text-sm leading-tight"> {{ friend.handle }} </p>
            </div>
            <button class="ml-auto text-sm text-blue py-1 px-3 rounded-full border-2 border-blue">
                Seguir
            </button>
        </button>
        <button class="p-3 w-full hover:bg-lighter text-left text-blue border-t border-lighter">
        Ver mas
        </button>
    </div>
  </div>
</template>

<script>
export default {
    name: 'trending-section',
    data (){ 
        return {
            trending: [
                {id: 1 ,top: 'Trending in TX', title: 'Gigi', bottom: 'Trending with: Rip Gigi'},
                {id: 2 ,top: 'Music', title: 'We Won', bottom: '135K Tweets'},
                {id: 3 ,top: 'Pop', title: 'Blue Ivy', bottom: '40k tweets'},
                {id: 4 ,top: 'Trending in US', title: 'Denim Day', bottom: '40k tweets'},
                {id: 5 ,top: 'Trending', title: 'When Beyonce', bottom: '25.4k tweets'},
            ],    
            friends: [
                {id: 1 ,src: 'elon.jpg',name: 'Elon Musk', handle: '@teslaBoy'},
                {id: 2 ,src: 'monk.jpg',name: 'Adrian Monk', handle: '@detective:)'},
                {id: 3 ,src: 'kevin.jpg',name: 'Kevin Hart', handle: '@miniRock'}
            ]
        }
    }

}
</script>
