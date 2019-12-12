<template>
  <transition name="fade" appear>
    <div class="container">
      <h1 class="text-center">Schedule And Budget</h1>
      <br />

      <v-row align="center">
        <v-col class="text-center" cols="12" sm="12">
          <div class>
            <v-btn
              @click="download('https://i.imgur.com/GhP2dIY.png')"
              large
              color="primary"
              >Download Calendar 1</v-btn
            >
          </div>
          <br />
          <div class>
            <v-btn
              @click="download('https://i.imgur.com/gzD8igU.png')"
              large
              color="primary"
              >Download Calendar 2</v-btn
            >
          </div>
          <br />
          <div class>
            <v-btn
              @click="download('https://i.imgur.com/MhJkeWd.png')"
              large
              color="primary"
              >Download Calendar 3</v-btn
            >
          </div>
          <br />
          <div class>
            <v-btn
              @click="download('https://i.imgur.com/U65uSWC.png')"
              large
              color="primary"
              >Download Calendar 4</v-btn
            >
          </div>
          <br />
          <div class>
            <!-- <a href="./Budget.pdf" download> -->
            <v-btn
              @click="download('https://i.imgur.com/D5V3Ocm.png')"
              large
              color="green"
              >Download Budget</v-btn
            >
            <!-- </a> -->
          </div>
        </v-col>
      </v-row>

      <br />

      <p>
        The budget has three main aspects. The first focuses on the campus
        ambassador program and allocates money for the purchase and shipment of
        swag packages to the ambassadors. The second aspect of the budget
        focuses on online resources such as Facebook ads and a website. The
        Facebook ads budget can be increased or decreased based on the
        aggressiveness of the campaign you want to run. We recommend $10 a week
        which gives you a sizeable and prominent amount of ads online. We left a
        lot of room in the budget for website redevelopment as good web
        developers are often costly. Finally, we recommend hiring an intern,
        which can be a paid position based on our conservation of finances. The
        intern can guide the smooth implementation of the campaign with social
        media management, campus ambassador organization and other related
        tasks.
      </p>

      <p>
        Most of our budget would be allocated towards the development of a
        campus ministries app and the hiring of a Communication Specialist.
      </p>

      <p>
        Although app development and a new employee would be costly, we believe
        the benefit of having a campus ministries focused app will pay dividends
        for years to come towards connecting people both on and off Hope’s
        campus to the work of Campus Ministries.
      </p>

      <p>
        The Communication Specialist would be there to guide and oversee the
        content being curated on the campus ministries app as well as a direct
        Liaison between Campus Ministries and Public Affairs Marketing.
      </p>
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
        .catch(() => 'error')
    }
  }
}
</script>

<style></style>
