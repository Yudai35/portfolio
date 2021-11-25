<template>
<div>
     <Top-header/>
     <nuxt/>
</div>
   
</template>


<script>
import TopHeader from '~/components/Topheader.vue'

export default {
     nema: 'default',
  components: {
    TopHeader
  }
}

</script>
