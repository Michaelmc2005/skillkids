<template>
  <div class="frame">
    <div class="div-2">
      <Profile />
      <RightPanel />
      <img
        class="skill-kids-logo"
        alt="Skill kids logo"
        src="https://c.animaapp.com/DNPXNzSQ/img/skillkidslogo@2x.png"
      />
    </div>
  </div>
</template>

<script>
import Profile from "./Frame/sections/Profile.vue";
import RightPanel from "./Frame/sections/RightPanel.vue";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMyTUTICWgHAFYLeTD9Chsn5HaTulkMCk",
  authDomain: "skillkids-8a974.firebaseapp.com",
  projectId: "skillkids-8a974",
  storageBucket: "skillkids-8a974.appspot.com",
  messagingSenderId: "625511086481",
  appId: "1:625511086481:web:170b37485a37e915af8230",
  measurementId: "G-HBHNKFSDKF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default {
  name: "Frame",
  components: {
    Profile,
    RightPanel,
  },
};
</script>

<style>
html{
  overflow: hidden;
  }
.frame {
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 160vw;
  transform: scale(0.7);
  transform-origin: top left;
  overflow: hidden;
}

.frame .div-2 {
  background: linear-gradient(180deg, rgb(4, 153, 255) 0%, rgb(25, 237, 238) 100%);
  background-color: rgba(255, 255, 255, 1);
  height: 1440px;
  position: relative;
  right: 3%;
  width: 2900px;
}

.frame .skill-kids-logo {
  height: 129px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 8px;
  width: 181px;
}
</style>