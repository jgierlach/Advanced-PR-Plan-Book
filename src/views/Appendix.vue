<template>
  <transition name="fade" appear>
    <div class="container">
      <h1 class="text-center">Appendix</h1>
      <br />

      <h3>Final Summary:</h3>

      <p>
        From extensive research done on Campus Ministries, our PR team has
        engaged in quantitative and qualitative data collection. This extensive
        research was conducted through a survey made on Qualtrics software
        platform as well as secondary research done on surrounding schools and
        their ministries programs. An in-depth analysis of Hope College Campus
        Ministries social media platforms was also done. Myself engaged in
        Chapel and Gathering services that Campus Ministries offers on Hope
        College’s Campus. Through online surveys and personal research, we are
        educated enough to inform Campus Ministries of the most effective
        communication campaign to conduct.
      </p>

      <h3>Some key takeaways from the Qualtrics survey were:</h3>

      <ul>
        <li>
          Almost 50% of our respondents attend a Chapel service 1 to 3 times per
          week.
        </li>
        <li>
          The strongest two social media platforms were Instagram and Apple
          Music.
        </li>
        <li>
          Lack of knowledge is the main cause of lack of social media followers.
        </li>
        <li>
          Over half of our respondent answered probably yes or definitely yes to
          wanting to use Campus Ministries resources in the future.
        </li>
      </ul>

      <br />

      <p>
        Campus Ministries was founded on providing a community when community
        was lacking on campus. Though numbers seem to be consistent with Chapel,
        I saw a lack of student attendance at the Gathering service. Through
        personal attendance and secondary research, I can conclude that there
        is:
      </p>

      <br />

      <ol>
        <li>
          Lack of knowledge of The Gathering thus resulting in low attendance
          numbers
        </li>
        <li>Lack of marketing or outside influence to draw students in</li>
      </ol>

      <br />

      <v-row align="center">
        <v-col class="text-center" cols="12" sm="12">
          <div class>
            <v-btn
              @click="download('https://i.imgur.com/O2Ou3rB.png')"
              large
              color="primary"
              >Download Instagram Grid 1.</v-btn
            >
          </div>
          <br />
          <div class>
            <v-btn
              @click="download('https://i.imgur.com/X8TROFT.png')"
              large
              color="green"
              >Download Instagram Grid 2.</v-btn
            >
          </div>
        </v-col>
      </v-row>
    </div>
  </transition>
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
