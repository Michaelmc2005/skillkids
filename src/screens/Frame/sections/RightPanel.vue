<template>
  <div class="right-panel">
    <div class="bottom-section">
      <div class="map">
        <div class="overlap-6">
          <img class="map-graphic" alt="Map graphic" src="https://c.animaapp.com/DNPXNzSQ/img/mapgraphic.png" />
          <img
            class="icon-location-pin"
            alt="Icon location pin"
            src="https://c.animaapp.com/DNPXNzSQ/img/---icon--location-pin--1@2x.png"
          />
          <div class="info-box">
            <div class="overlap-7">
              <div class="overlap-8">
                <div class="register-interest">
                  <div class="div-wrapper">
                    <div class="text-wrapper-8">Register Interest</div>
                  </div>
                </div>
                <p class="text-wrapper-9">
                  Options provide high-performance managed trading infrastructure and cloud-enabled managed services to
                  over 200 firms globally, providing an agile, scalable platform in an Investment Bank grade Cybersecurity
                  wrapper.
                </p>
                <div class="text-wrapper-10">Options IT</div>
              </div>
              <img class="collage" alt="Collage" src="https://c.animaapp.com/DNPXNzSQ/img/collage-1@2x.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="top-section">
      <div class="sentence-box">
        <div class="overlap-9">
          <div class="sentence-box-2" />
          <div class="date">
            <div class="overlap-group-3">
              <div class="date-box" />
              <div class="calendar-button">
                <img
                  class="icon-calendar"
                  alt="Icon calendar"
                  src="https://c.animaapp.com/DNPXNzSQ/img/---icon--calendar--1@2x.png"
                />
              </div>
              <div class="text-wrapper-11">April 30th 2024</div>
            </div>
          </div>
          <div class="text-wrapper-12">to</div>
          <div class="date-2">
            <div class="overlap-group-3">
              <div class="date-box-2" />
              <div class="icon-calendar-wrapper">
                <img
                  class="icon-calendar"
                  alt="Icon calendar"
                  src="https://c.animaapp.com/DNPXNzSQ/img/---icon--calendar--1@2x.png"
                />
              </div>
              <div class="text-wrapper-13">April 28th 2024</div>
            </div>
          </div>
          <div class="text-wrapper-14">from</div>
          <div class="sector-box">
            <div class="overlap-10">
              <div class="text-wrapper-15">Software</div>
            </div>
          </div>
          <div class="text-wrapper-16">working in</div>
          <div class="citybox">
            <div class="overlap-11">
              <!-- Bind the input field to searchCity -->
              <input type="text" v-model="searchCity" @input="filterCities" class="text-wrapper-17" placeholder="Type a city..." />
              
              <!-- Dropdown for city selection -->
              <div v-if="filteredCities.length" class="dropdown">
                <div v-for="city in filteredCities" :key="city.name" class="dropdown-item" @click="selectCity(city.name)">
                  {{ city.name }}
                </div>
              </div>
            </div>
          </div>
          <p class="text-wrapper-18">I want to find work experience in</p>
        </div>
      </div>
      <div class="search-button">
        <div class="overlap-12">
          <div class="text-wrapper-19">Search</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { db } from "./firebaseconfig";
import { collection, getDocs, query, where } from 'firebase/firestore';

export default {
  name: "RightPanel",
  data() {
    return {
      cities: [],
      searchCity: '',
      selectedCity: '',
      filteredCities: []
    };
  },
  created() {
    this.fetchCities();
  },
  methods: {
    async fetchCities() {
      try {
        const citiesRef = collection(db, 'Cities');
        const querySnapshot = await getDocs(citiesRef);
        this.cities = querySnapshot.docs.map(doc => doc.data());
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    },
    filterCities() {
      if (this.searchCity.length > 0) {
        this.filteredCities = this.cities.filter(city =>
          city.name.toLowerCase().startsWith(this.searchCity.toLowerCase())
        );
      } else {
        this.filteredCities = [];
      }
    },
    selectCity(cityName) {
      this.selectedCity = cityName; // Update the selected city
      this.searchCity = cityName; // Update the searchCity to reflect the selected city in the input field
      this.filteredCities = []; // Clear the dropdown
    }
  }
};
</script>
<style>
.right-panel {
  background-color: #101010b1;
  border: 3px solid;
  border-color: #ffffff;
  border-radius: 30px;
  height: 1165px;
  left: 1112px;
  position: absolute;
  top: 137px;
  width: 1399px;
}

.right-panel .bottom-section {
  height: 897px;
  left: 25px;
  position: absolute;
  top: 221px;
  width: 1343px;
}

.right-panel .map {
  background-color: #d9d9d9;
  height: 897px;
}

.right-panel .overlap-6 {
  height: 895px;
  left: 1px;
  position: relative;
  top: 2px;
  width: 1346px;
}

.city-input {
  /* Add gradient styling similar to .text-wrapper-17 */
  background: linear-gradient(180deg, rgb(29, 0, 146) 0%, rgb(25, 236, 239) 100%);
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  padding: 10px;
  font-size: 20px;
}


.dropdown {
  position: absolute;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 100%;
  z-index: 100;
}

.dropdown-item {
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.dropdown-item:hover {
  background-color: #f0f0f0;
}

.right-panel .map-graphic {
  height: 895px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 1340px;
}

.right-panel .icon-location-pin {
  height: 120px;
  left: 638px;
  position: absolute;
  top: 328px;
  width: 90px;
}

.right-panel .info-box {
  height: 288px;
  left: 0;
  position: absolute;
  top: 607px;
  width: 1346px;
}

.right-panel .overlap-7 {
  background-color: #161616;
  height: 288px;
  position: relative;
  width: 1342px;
}

.right-panel .overlap-8 {
  height: 249px;
  left: 523px;
  position: absolute;
  top: 16px;
  width: 788px;
}

.right-panel .register-interest {
  height: 61px;
  left: 555px;
  position: absolute;
  top: 188px;
  width: 233px;
}

.right-panel .div-wrapper {
  background-color: #2d3030;
  border-radius: 20px;
   
  height: 61px;
  position: relative;
  width: 231px;
}

.right-panel .text-wrapper-8 {
  color: #ffffff;
  font-family: "Inter", Helvetica;
  font-size: 25px;
  font-weight: 600;
  height: 61px;
  left: 9px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 15px;
  width: 213px;
}

.right-panel .text-wrapper-9 {
  color: #ffffff;
  font-family: "Inter", Helvetica;
  font-size: 18px;
  font-weight: 600;
  height: 141px;
  left: 29px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 53px;
  width: 651px;
}

.right-panel .text-wrapper-10 {
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent;
  background: linear-gradient(180deg, rgb(29.28, 0, 146.39) 0%, rgb(25, 236, 239) 100%);
  background-clip: text;
  color: transparent;
  font-family: "Inter", Helvetica;
  font-size: 40px;
  font-weight: 600;
  height: 76px;
  left: 0;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  text-fill-color: transparent;
  top: 0;
  width: 211px;
}

.right-panel .collage {
  height: 244px;
  left: 38px;
  object-fit: cover;
  position: absolute;
  top: 21px;
  width: 458px;
}

.right-panel .top-section {
  height: 168px;
  left: 28px;
  position: absolute;
  top: 27px;
  width: 1340px;
}

.right-panel .sentence-box {
  height: 168px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1102px;
}

.right-panel .overlap-9 {
  height: 168px;
  position: relative;
  width: 1096px;
}

.right-panel .sentence-box-2 {
  background-color: #161616;
  border-radius: 20px;
   
  height: 168px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1094px;
}

.right-panel .date {
  height: 76px;
  left: 494px;
  position: absolute;
  top: 79px;
  width: 305px;
}

.right-panel .overlap-group-3 {
  height: 76px;
  position: relative;
  width: 303px;
}

.right-panel .date-box {
  background-color: #ffffffe6;
  border-radius: 20px;
   
  height: 61px;
  left: 0;
  position: absolute;
  top: 8px;
  width: 303px;
}

.right-panel .calendar-button {
  background: linear-gradient(180deg, rgba(29, 0, 146, 0.9) 0%, rgba(25, 236, 239, 0.9) 100%);
  border-radius: 20px;
   
  height: 61px;
  left: 230px;
  position: absolute;
  top: 8px;
  width: 73px;
}

.right-panel .icon-calendar {
  height: 40px;
  left: 15px;
  position: absolute;
  top: 11px;
  width: 44px;
}

.right-panel .text-wrapper-11 {
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent;
  background: linear-gradient(180deg, rgb(29.28, 0, 146.39) 0%, rgb(25, 236, 239) 100%);
  background-clip: text;
  color: transparent;
  font-family: "Inter", Helvetica;
  font-size: 25px;
  font-weight: 600;
  height: 76px;
  left: 6px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  text-fill-color: transparent;
  top: 21px;
  width: 211px;
}

.right-panel .text-wrapper-12 {
  color: #ffffff;
  font-family: "Inter", Helvetica;
  font-size: 25px;
  font-weight: 400;
  left: 414px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 102px;
  white-space: nowrap;
  width: 80px;
}

.right-panel .date-2 {
  height: 76px;
  left: 111px;
  position: absolute;
  top: 79px;
  width: 305px;
}

.right-panel .date-box-2 {
  background-color: #ffffffe6;
  border-radius: 20px;
   
  height: 61px;
  left: 0;
  position: absolute;
  top: 7px;
  width: 303px;
}

.right-panel .icon-calendar-wrapper {
  background: linear-gradient(180deg, rgba(29, 0, 146, 0.9) 0%, rgba(25, 236, 239, 0.9) 100%);
  border-radius: 20px;
   
  height: 61px;
  left: 231px;
  position: absolute;
  top: 7px;
  width: 73px;
}

.right-panel .text-wrapper-13 {
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent;
  background: linear-gradient(180deg, rgb(29.28, 0, 146.39) 0%, rgb(25, 236, 239) 100%);
  background-clip: text;
  color: transparent;
  font-family: "Inter", Helvetica;
  font-size: 25px;
  font-weight: 600;
  height: 76px;
  left: 7px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  text-fill-color: transparent;
  top: 20px;
  width: 211px;
}

.right-panel .text-wrapper-14 {
  color: #ffffff;
  font-family: "Inter", Helvetica;
  font-size: 25px;
  font-weight: 400;
  left: 32px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 102px;
  white-space: nowrap;
  width: 117px;
}

.right-panel .sector-box {
  height: 61px;
  left: 881px;
  position: absolute;
  top: 7px;
  width: 215px;
}

.right-panel .overlap-10 {
  background-color: #ffffffe6;
  border-radius: 20px;
   
  height: 61px;
  position: relative;
  width: 213px;
}

.right-panel .text-wrapper-15 {
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent;
  background: linear-gradient(180deg, rgb(29.28, 0, 146.39) 0%, rgb(25, 236, 239) 100%);
  background-clip: text;
  color: transparent;
  font-family: "Inter", Helvetica;
  font-size: 30px;
  font-weight: 600;
  height: 61px;
  left: 0;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  text-fill-color: transparent;
  top: 12px;
  width: 213px;
}

.right-panel .text-wrapper-16 {
  color: #ffffff;
  font-family: "Inter", Helvetica;
  font-size: 25px;
  font-weight: 400;
  left: 747px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 23px;
  white-space: nowrap;
  width: 134px;
}

.right-panel .citybox {
    height: 68px;
    left: 476px;
    position: absolute;
    top: -7px;
    width: 293px;
}

.right-panel .overlap-11 {
  height: 68px;
  position: relative;
  width: 291px;
}

.right-panel .city-box {
  background-color: #ffffffe6;
  border-radius: 20px;
   
  height: 61px;
  left: 0;
  position: absolute;
  top: 5px;
  width: 291px;
}

.right-panel .current-location {
  background: linear-gradient(180deg, rgba(29, 0, 146, 0.9) 0%, rgba(25, 236, 239, 0.9) 100%);
  border-radius: 20px;
   
  height: 61px;
  left: 218px;
  position: absolute;
  top: 5px;
  width: 73px;
}

.right-panel .img {
  height: 42px;
  left: 19px;
  position: absolute;
  top: 9px;
  width: 33px;
}

.right-panel .text-wrapper-17 {
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent;
  background: linear-gradient(180deg, rgb(29.28, 0, 146.39) 0%, rgb(25, 236, 239) 100%);
  background-clip: text;
  color: transparent;
  font-family: "Inter", Helvetica;
  font-size: 30px;
  font-weight: 600;
  height: 68px;
  left: 0;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  text-fill-color: transparent;
  top: 16px;
  width: 207px;
  border-color: white;
  border-radius: 30px;
}

.right-panel .text-wrapper-18 {
  color: #ffffff;
  font-family: "Inter", Helvetica;
  font-size: 25px;
  font-weight: 400;
  left: 32px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 23px;
  white-space: nowrap;
  width: 394px;
}

.right-panel .search-button {
  height: 168px;
  left: 1109px;
  position: absolute;
  top: 0;
  width: 233px;
}

.right-panel .overlap-12 {
  background-color: #2d3030;
  border-radius: 20px;
   
  height: 168px;
  position: relative;
  width: 231px;
}

.right-panel .text-wrapper-19 {
  color: #ffffff;
  font-family: "Inter", Helvetica;
  font-size: 30px;
  font-weight: 600;
  height: 61px;
  left: 9px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 107px;
  width: 213px;
}
</style>
