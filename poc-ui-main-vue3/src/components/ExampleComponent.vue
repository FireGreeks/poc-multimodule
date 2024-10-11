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
import apiHelper from 'src/plugins/api-helper';

const inputValue = ref('')

const getHelloWorld = async () => {
  const response = await apiHelper.get('hello-world', {
    responseType: 'PLAIN'
  })
  alert(response)
}

const postCapitalize = async () => {
  const response = await apiHelper.post('capitalize', inputValue.value, {
    bodyContentType: 'PLAIN',
    responseType: 'PLAIN'
  })
  alert(response)
}
</script>
