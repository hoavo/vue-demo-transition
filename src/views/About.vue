<template>
  <div class="about">
    <h1 class="title" tx="title">About this site</h1>
    <p>This is the About page.</p>
  </div>
</template>
<script>
// export default {
//   mounted() {
//     document.documentTransition
//       .prepare({
//         rootTransition: "reveal-left",
//       })
//       .then(() => {
//         document.documentTransition.start();
//       });
//   },
// };
</script>
<style scoped>
.about {
  padding: 56px 20px;
  min-height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
h1 {
  height: 35px;
  width: 7em;
  font-size: 30px;
  margin-left: 0;
}
</style>