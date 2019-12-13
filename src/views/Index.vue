<template lang="pug">

.main
	fullHeader

</template>

<script>
// @ is an alias to /src
import register from "@/components/register.vue";
import fullHeader from "@/components/fullHeader";

export default {
  name: "index",
  components: {
    register,
    fullHeader
  }
};
</script>
