<template>
  <div class="ma-3">
    <div class="d-flex flex-column align-start">
      <v-spacer></v-spacer>

      <div>
        <v-btn
          small
          @click="run"
          class="me-2 orange lighten-1 white--text"
          >Done</v-btn
        >
        <v-btn small @click="clear" class="orange lighten-2 white--text"
          >Clear</v-btn
        >
      </div>
    </div>
  </div>
</template>

<script>
import Tesseract from 'tesseract.js';

export default {
  name: 'Pen',

  data() {
    return {
      canvas: null,
      enabled: false,

      result: '',
    };
  },
  props: {
    id: {
      type: String,
    },
  },

  mounted() {
    this.canvas = this.$refs['canvas'];
    this.canvas.width = window.innerWidth - 50;
    this.context = this.canvas.getContext('2d');

    this.context.fillStyle = '#FFFFFF';
  },
  methods: {
    paint(e) {
      if (this.enabled) {
        const rect = this.canvas.getBoundingClientRect();
        const x = ((e.clientX - rect.left) * this.canvas.width) / rect.width;
        const y = ((e.clientY - rect.top) * this.canvas.height) / rect.height;

        this.context.lineTo(x, y);
        this.context.stroke();
      }
    },

    penDOWN(e) {
      this.enabled = true;
      const rect = this.canvas.getBoundingClientRect();
      this.context.moveTo(e.clientX - rect.left, e.clientY - rect.top);
    },
    penUP() {
      this.enabled = false;
    },

    async run() {
      const out = await Tesseract.recognize(this.canvas, 'eng');

      this.result = out.data.text;
    },

    clear() {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.context.beginPath();
    },
  },
};
</script>

<style scoped></style>
