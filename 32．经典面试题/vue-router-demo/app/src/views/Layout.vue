<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <CommonAside />
      </el-aside>
      <el-container>
        <el-header>
           <CommonHeader />
        </el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import CommonAside from './components/CommonAside'
import CommonHeader from './components/CommonHeader'

</script>

<style lang="scss" scoped>

</style>