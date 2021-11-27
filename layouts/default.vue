<template>
<div>
     <Top-header/>
     <fotter/>
     <nuxt/>
</div>
   
</template>


<script>
import TopHeader from '~/components/Topheader.vue'
import fotter from '~/components/fotter.vue'

export default {
     nema: 'default',
  components: {
    TopHeader,
    fotter
  }
}

</script>
