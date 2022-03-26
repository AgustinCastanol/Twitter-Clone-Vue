<template>
  <nav class="lg:w-1/5 border-r border-lighter px-2 lg:px-6 py-2 flex flex-col justify-between">
        <div>
            <button
            class="h-12 w-12 hover:bg-lightblue text-3xl rounded-full text-blue"
            >
                <i class="fab fa-twitter"></i>
            </button>
            <div>
                <router-link
                v-for="tab in tabs"
                @click="id = tab.id"
                :key="tab.id"
                :to="`${tab.id}`"
                :class="`
                focus:outline-none hover:text-blue flex items-center py-2 px-4 hover:bg-lightblue rounded-full mr-auto mb-3 
                ${id == tab.id ? 'text-blue' : ''
                }`"
                >
                    <i
                    :class="`${tab.icon} 
                    text-2xl mr-4 text-left`"
                    ></i>
                    <p class="text-lg font-semibold text-left hidden lg:block">{{ tab.title }}</p>
                </router-link>
            </div>
            <button class="text-white bg-blue rounded-full font-semibold focus:outline-none w-12 lg:h-auto lg:w-full p-3 hover:ng-darkblue">
            <p class="hidden lg:block">Tweet</p>
            <i class=" fas fa-plus lg:hidden"></i>
            </button>
        </div>

        <div class="w-full relative">
    
            <button @click="dropdown === true?dropdown = false:dropdown = true" 
            class="flex items-center w-full hover:bg-lightblue rounded-full p-3focus:outline-none">
                <img src="profile.png" class="w-10 h-10 rounded-full border border-lighter"/>
                <div class="hidden lg:block ml-4 ">
                    <p class="text-sm font-bold leading-tight">Agustin Castanol</p>
                    <p class="text-sm leading-tight">@agustinCas</p>
                </div>
                <i class=" fas fa-angle-down ml-auto text-lg hidden lg:block"></i>
            </button>
            <div v-if="dropdown === true" 
            class="absolute bottom-0 left-0 w-64 rounded-lg shadow-md border-lightest bg-white mb-16">
                <button @click="dropdown = false"
                 class=" p-3 flex items-center w-full hover:bg-lightest focus:outline-none">
                    <img src="profile.png" class="w-10 h-10 rounded-full border border-lighter"/>
                    <div class="ml-4 ">
                        <p class="text-sm font-bold leading-tight">Agustin Castanol</p>
                        <p class="text-sm leading-tight">@agustinCas</p>
                    </div>
                    <i class=" fas fa-check ml-auto text-blue"></i>
                </button>
                <button @click="dropdown = false"
                 class="w-full text-left hover:bg:ligtest border-t border-lighter p-3 test-sm ">
                    Agregar usuario existente
                </button>
                <button  @click="dropdown = false"
                class="w-full text-left hover:bg:ligtest border-t border-lighter p-3 test-sm ">
                    Cerrar sesión @agustinCas
                </button>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'nav-bar-view',
    data (){
        return{
          tabs: [
        { icon: "fas fa-home", title: "Inicio", id: "home" },
        { icon: "fas fa-hashtag", title: "Explorar", id: "explore" },
        { icon: "far fa-bell", title: "Notificaciones", id: "notifications" },
        { icon: "far fa-envelope", title: "Mensajes", id: "messages" },
        { icon: "far fa-bookmark", title: "Guardados", id: "bookmarks" },
        { icon: "fas fa-clipboard-list", title: "Listas", id: "lists" },
        { icon: "far fa-user", title: "Perfiles", id: "profile" },
        { icon: "fas fa-ellipsis-h", title: "Más opciones", id: "more" },
      ],
      id: "home",
      dropdown: false
    }
    }
}
</script>
