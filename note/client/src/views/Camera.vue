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
    <input
      ref="upload"
      class="d-none"
      type="file"
      accept=".jpg,.png"
      @change="picked"
    />
  </main>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Camera',

  data() {
    return {
      video: null,
      media: null,

      select: false,
      file: null,

      field: null,
    };
  },
  props: {
    serverAddress: { type: String },
    id: {
      type: Number,
    },
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

      const { data } = await axios({
        url: `${this.serverAddress}/fields`,
        method: 'GET',
      });
      const id = this.id;
      this.field = data.find((el) => el.id == Number(id));
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

      this.canvas.toBlob(async (blob) => {
        let reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = async () => {
          const base64 = reader.result;

          await axios({
            url: `${this.serverAddress}/fields/${this.field.id}`,
            method: 'PATCH',
            data: {
              name: this.field.name,
              content: this.field.content,
              attachment: base64,
            },
          });

          this.$router.back();
        };
      });
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

    async picked(e) {
      const fileToBase64 = (file) =>
        new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => resolve(reader.result);
          reader.onerror = (error) => reject(error);
        });

      this.file = e.target.files[0];
      const data = await fileToBase64(this.file);

      await axios({
        url: `${this.serverAddress}/fields/${this.field.id}`,
        method: 'PATCH',
        data: {
          name: this.field.name,
          content: this.field.content,
          attachment: data,
        },
      });

      this.$router.back();
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
