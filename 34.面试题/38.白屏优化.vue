<!--
 * @des: ''
 * @author: fengbin.chen
-->
<template>
  <div class="container">
    <div v-for="n in 10000">
      <hellow v-if="defer(n)">111111111111111111111111111111111111</hellow>
    </div>
  </div>
</template>
<script setup>
  import Hellow from './hellow';
  import { useDeferred } from './useDefer'
</script>
<style>
.container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1em;
}
</style>

!
