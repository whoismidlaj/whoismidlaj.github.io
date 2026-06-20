<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../utils/supabase'

const comments = ref([])
const name = ref('')
const comment = ref('')
const website = ref('')

async function getComments() {
  const { data, error } = await supabase.from('comments').select()
  if (error) {
    console.error('Error fetching comments:', error)
  } else {
    comments.value = data
  }
}

async function addComment() {
  if (name.value && comment.value) {
    const { error } = await supabase
      .from('comments')
      .insert({ name: name.value, comment: comment.value, website: website.value })
    
    if (error) {
      console.error('Error adding comment:', error)
    } else {
      getComments()
      name.value = ''
      comment.value = ''
      website.value = ''
    }
  } else {
    alert('Please fill in both name and comment')
  }
}

onMounted(() => {
  getComments()
})
</script>

<template>
  <div class="container mx-auto pt-32 pb-32 px-5 min-h-screen flex flex-col justify-start items-start">
    <div class="w-full flex justify-start items-center mb-10">
      <h1 class="text-center">Guestbook</h1>
    </div>

    <div class="w-full space-y-12">

      <div class="md:w-1/2">
        <form class="space-y-4" @submit.prevent="addComment">
            <input type="text" placeholder="Name" v-model="name" id="name" required />
            <input type="text" placeholder="Website" v-model="website" id="website" />
            <textarea v-model="comment" placeholder="Comment" id="comment" required></textarea>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>

      <div class="w-full flex flex-col-reverse gap-4">
        <div v-for="comment in comments" :key="comment.id" class="comment">
          <div class="flex justify-between">
            <h3 class="font-base"><a :href="comment.website">{{ comment.name }}</a></h3>
            <span class="text-sm">{{ formatDate(comment.created_at) }}</span>
          </div>
          <p>{{ comment.comment }}</p>
        </div>
      </div>

    </div>
  </div>
</template>

<style>

input, textarea {
  @apply p-3 rounded-xl w-full font-normal text-base border cursor-pointer text-gray-900 bg-gray-300/10 border-gray-900/10 outline-none focus-visible:outline-none;
}

.dark input, .dark textarea {
  @apply text-gray-200 bg-gray-800/10 border-gray-300/10
}

.matrix input, .matrix textarea {
  @apply border-2 rounded-none text-[#00FF41] bg-black border-[#00FF41] placeholder:text-[#00FF41]
}

.matrix span {
  @apply text-[#00FF41]
}

textarea {
  @apply h-36
}

.comment {
      @apply space-y-2 p-5 border rounded-xl bg-gray-300/30 border-gray-900/10
    }

    .dark .comment {
      @apply bg-gray-800/50 border-gray-300/10
    }

    .matrix .comment {
      @apply bg-black border-[#00FF41] rounded-none border-2
    }
</style>
