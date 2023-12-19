<template>
  <div class="frame">
    <div class="div-2">
      <Profile class="profile" />
      <RightPanel class="rightPanel" />
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

export default {
  name: "Frame",
  components: {
    Profile,
    RightPanel,

  },
  data(){
    return{
      show: false,
    }
  },
  methods: {
    showProfile(){
      this.show = !this.show;
    }
  }
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
  background: linear-gradient(180deg, rgb(0, 61, 102) 0%, rgb(7, 62, 62) 100%);
  background-color: rgba(255, 255, 255, 1);
  height: 1440px;
  position: relative;
  right: 3%;
  width: 2900px;
}

.frame .skill-kids-logo {
    height: 129px;
    left: 83px;
    -o-object-fit: cover;
    object-fit: cover;
    position: absolute;
    top: 12px;
    width: 181px;
    transform: scale(0.8);
}
.frame .profile{
  position: relative;
  top: 10%;
}
.frame .rightPanel{
  position: absolute;
  top: 10%;
}
</style>