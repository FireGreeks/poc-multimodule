<template>
  <div class='column items-center' style='width:50%'>
    <q-btn class='full-width q-mb-md' @click='getHelloWorld'>
      Hello World!
    </q-btn>
    <q-input v-model='inputValue' class='q-mb-sm full-width'/>
    <q-btn class='full-width' @click="postCapitalize">
      Capitalize input...
    </q-btn>
  </div>
</template>

<script setup lang='ts'>
import {ref} from 'vue';
import api from 'simple-api-fetch'

const inputValue = ref('')

const getHelloWorld = async () => {
  const res = await api.get('hello-world', api.filters.TEXT)
  alert(res)
}

const postCapitalize = async () => {
  const response = await api.post('capitalize', inputValue.value, api.filters.JSON)
  alert(response)
}
</script>
