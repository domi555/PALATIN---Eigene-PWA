<template>
  <main class="d-flex flex-column align-center">
    <video ref="video" autoplay muted playsinline></video>

    <v-spacer></v-spacer>

    <div class="mb-4">
      <v-btn small @click="take" class="me-2 orange lighten-1 white--text"
        >Take</v-btn
      >
      <v-btn small @click="upload" class="orange lighten-1 white--text"
        >Select</v-btn
      >
    </div>

    <canvas ref="canvas" class="d-none"></canvas>
    <input ref="upload" class="d-none" type="file" @change="picked" />
  </main>
</template>

<script>
export default {
  name: 'Camera',

  data() {
    return {
      video: null,
      media: null,

      select: false,
      file: null,
    };
  },

  async mounted() {
    this.video = this.$refs['video'];
    this.canvas = this.$refs['canvas'];
    this.context = this.canvas.getContext('2d');

    try {
      this.media = await navigator.mediaDevices.getUserMedia({
        video: true,
        facingMode: { exact: 'environment' },
      });

      this.video.srcObject = this.media;
      this.video.play();
    } catch (e) {
      console.error(e);
    }
  },

  methods: {
    take() {
      const track = this.media.getTracks()[0];
      const setup = track.getSettings();

      this.canvas.width = setup.width;
      this.canvas.height = setup.height;

      this.context.drawImage(this.video, 0, 0, setup.width, setup.height);

      alert('Done');
    },
    upload() {
      this.select = true;

      window.addEventListener(
        'focus',
        () => {
          this.select = false;
        },
        { once: true },
      );

      this.$refs.upload.click();
    },
    picked(e) {
      this.file = e.target.files[0];

      alert('Done');
    },

    ready() {},
  },
};
</script>

<style scoped>
main {
  height: 100%;
}

video {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
