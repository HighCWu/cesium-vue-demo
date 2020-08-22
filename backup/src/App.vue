<template>
  <div>
    <CesiumViewer/>
  </div>
</template>

<script>
import CesiumViewer from "./components/CesiumViewer.vue";

export default {
  data() {
    return {
      isOpen: true
    };
  },
  components: {
    CesiumViewer
  }
};
</script>
