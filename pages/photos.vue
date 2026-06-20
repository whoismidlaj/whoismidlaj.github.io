<template>
  <div class="px-5 mx-auto pt-32 pb-32 min-h-screen">
      <div class="max-w-7xl mx-auto">
          <header class="mb-12 flex items-center justify-between">
              <div>
                  <h1 class="text-4xl font-bold mb-4 font-serif">Photos</h1>
                  <p class="text-gray-500 dark:text-gray-400">A collection of moments and shots.</p>
              </div>
          </header>

          <div v-if="photos" class="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            <div v-for="photo in photos" :key="photo.id"
                class="break-inside-avoid group relative cursor-pointer overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800"
                @click="selectPhoto(photo)">
                <img :src="photo.src" :alt="photo.alt"
                    class="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                <div
                    class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <p class="text-white font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        {{ photo.caption }}
                    </p>
                </div>
            </div>
        </div>

          <!-- Lightbox Modal -->
          <Transition enter-active-class="transition duration-300 ease-out"
              enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
              leave-active-class="transition duration-200 ease-in" leave-from-class="transform scale-100 opacity-100"
              leave-to-class="transform scale-95 opacity-0">
              <div v-if="selectedPhoto" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
                  @click.self="closeModal">
                  <button class="absolute top-6 right-6 text-white/70 hover:text-white p-2" @click="closeModal">
                      <Icon name="heroicons:x-mark" class="w-10 h-10" />
                  </button>
                  <div class="max-w-5xl w-full max-h-[90vh] flex flex-col items-center">
                      <img :src="selectedPhoto.src" :alt="selectedPhoto.alt"
                          class="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl" />
                      <p class="text-white/90 mt-6 text-lg font-medium tracking-wide">{{ selectedPhoto.caption }}</p>
                  </div>
              </div>
          </Transition>
      </div>
  </div>
</template>

<script setup lang="ts">
const { data: photos } = await useAsyncData('photos', () => queryContent('/photos').findOne().then(doc => doc.body || doc))

const selectedPhoto = ref(null);

const selectPhoto = (photo: any) => {
  selectedPhoto.value = photo;
  document.body.style.overflow = 'hidden';
};

const closeModal = () => {
  selectedPhoto.value = null;
  document.body.style.overflow = '';
};
</script>
