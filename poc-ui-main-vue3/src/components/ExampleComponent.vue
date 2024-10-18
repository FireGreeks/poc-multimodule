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
import api from 'src/plugins/api-helper';

const inputValue = ref('')

const getHelloWorld = async () => {
  const res = await api.get('hello-world', api.filters.TEXT, {
    updateInterval: 1000,
    callbacks: {
      onstart: () => alert('Started!'),
      onerror: (r, e) => alert('Error: ' + e),
      onfilterstep: (r, i, filterCount) => alert('Filtering: ' + i + '/' + filterCount),
      onstatechange: (r, state) => alert('State changed to ' + state),
      onupdate: (r, elapsedTime) => alert('Elapsed time: ' + elapsedTime)
    }
  })
  alert(res)
}

const postCapitalize = async () => {
  const response = await api.post('capitalize', inputValue.value, api.filters.JSON)
  alert(response)
}
</script>
