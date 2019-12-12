<template>
  <div class="container">
    <h1 class="text-center">Tactical Experience</h1>
    <br />

    <p>
      Our tactical experiences are backgrounders, fact sheets, media advisories,
      press releases, research papers, and case studies that embody PR Evolve
      ideas about public relations for our client. Although these are samples,
      they can easily be reformatted and reworded in order to be used for Campus
      Ministries.
    </p>

    <v-row align="center">
      <v-col class="text-center" cols="12" sm="12">
        <div class>
          <a
            href="https://pdfhost.io/v/WBcOus@i_Microsoft_Word_Corrected_Press_Release_1docx.pdf"
            target="_blank"
          >
            <v-btn large color="primary">Sample Press Release</v-btn>
          </a>
        </div>
        <br />
        <div class>
          <a
            href="https://pdfhost.io/v/3k4SmEF4_Microsoft_Word_FINAL_EXAMdocx.pdf"
            target="_blank"
          >
            <v-btn large color="green">Research Paper 1</v-btn>
          </a>
        </div>
        <br />
        <div class>
          <a
            href="https://pdfhost.io/v/fA5gex@D_Microsoft_Word_Final_Exam_Advance_PRdocx.pdf"
            target="_blank"
          >
            <v-btn large color="green">Research Paper 2</v-btn>
          </a>
        </div>
        <br />
        <div class>
          <a
            href="https://wizardly-hoover-2e567c.netlify.com"
            target="_blank"
            download
          >
            <v-btn large color="green">Research Paper 3</v-btn>
          </a>
        </div>
        <br />
        <div class>
          <v-btn
            @click="download('https://i.imgur.com/eCgZJdM.png')"
            large
            color="purple"
            >Fact Sheet</v-btn
          >
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      url: ''
    }
  },
  methods: {
    forceFileDownload(response) {
      var headers = response.headers
      // var extension = this.url.substring(this.url.lastIndexOf('.') + 1)
      var blob = new Blob([response.data], {type: headers['content-type']})
      var link = document.createElement('a')
      link.href = window.URL.createObjectURL(blob)
      link.download = this.url
      link.click()
      link.remove()
    },
    download(url) {
      this.url = url
      axios({
        method: 'get',
        url: this.url,
        responseType: 'blob'
      })
        .then(response => {
          this.forceFileDownload(response)
        })
        .catch(() => console.log('error occured'))
    }
  }
}
</script>

<style></style>
