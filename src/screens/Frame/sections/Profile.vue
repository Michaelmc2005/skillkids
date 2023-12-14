<template>
  <div class="profile">
    <div class="overlap">
      <div class="ribbon">
        <div class="skills">
          <div class="overlap-group">
            <div class="text-wrapper">Skills</div>
          </div>
        </div>
        <div class="projects">
          <div class="overlap-group">
            <div class="text-wrapper">Projects</div>
          </div>
        </div>
        <div class="work-experience">
          <div class="div">
            <div class="work-experience-2" />
            <div class="text-wrapper">Work Experience</div>
          </div>
        </div>
        <div class="personal-information">
          <div class="overlap-group">
            <div class="text-wrapper">Personal Information</div>
          </div>
        </div>
        <div class="overlap-2">
          <div class="background-rect" />
          <div class="background-circle" />
        </div>
        <div class="account">
          <div class="profile-pic-white-wrapper">
            <div class="profile-pic-white" />
          </div>
          <div class="text-wrapper-2">School</div>
          <div class="text-wrapper-3">Name</div>
        </div>
      </div>
      <div class="panel">
        <div class="overlap-3">
          <div class="panel-2" />
          <div class="upcoming-experience">
            <div class="calendar">
              <div class="overlap-group-2">
                <div class="redstrip" />
                <div class="element-APR">
                  10th <br />
                  APR
                </div>
              </div>
            </div>
            <div class="overlap-wrapper">
              <div class="overlap-group-2">
                <div class="redstrip" />
                <div class="element-FEB">
                  16th <br />
                  FEB
                </div>
              </div>
            </div>
            <div class="overlap-group-wrapper">
              <div class="overlap-group-2">
                <div class="redstrip" />
                <div class="element-NOV">
                  25th <br />
                  NOV
                </div>
              </div>
            </div>
            <div class="separator" />
            <div class="text-wrapper-4">Upcoming Experience</div>
          </div>
          <div class="skills-panel">
            <div class="overlap-4">
              <p class="p">Add a custom skill or search from a list of most common...</p>
              <div class="rectangle" />
              <div class="rectangle-2" />
              <img
                class="icon-search"
                alt="Icon search"
                src="https://c.animaapp.com/DNPXNzSQ/img/---icon--search-@2x.png"
              />
            </div>
            <div class="text-wrapper-5">Skills</div>
            <div class="separator-2" />
            <div class="skill" />
            <div class="skill-2" />
            <div class="skill-3" />
            <div class="skill-4" />
            <div class="skill-5" />
          </div>
          <div class="profile-completion">
            <div class="overlap-5">
              <div class="box">
                <div class="outline" />
              </div>
              <div class="text-wrapper-6">100%</div>
            </div>
            <div class="text-wrapper-7">Profile Completion</div>
            <div class="separator-3" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
};
</script>

<style>
.profile {
  background-color: #1c009033;
  border: 3px solid;
  border-color: #ffffff;
  border-radius: 30px;
  height: 1165px;
  left: 84px;
  position: absolute;
  top: 137px;
  width: 999px;
}

.profile .overlap {
  height: 1165px;
  position: relative;
  width: 968px;
}

.profile .ribbon {
  background-color: #183862;
  border-radius: 30px;
  height: 1165px;
  left: 0;
  position: absolute;
  top: 0;
  width: 494px;
}

.profile .skills {
  height: 69px;
  left: 60px;
  position: absolute;
  top: 981px;
  width: 380px;
}

.profile .overlap-group {
  background-color: #ffffff;
  border-radius: 30px;
  height: 69px;
  position: relative;
  width: 378px;
}

.profile .text-wrapper {
  color: #000000;
  font-family: "Inter", Helvetica;
  font-size: 25px;
  font-weight: 700;
  height: 69px;
  left: 0;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 20px;
  width: 378px;
}

.profile .projects {
  height: 69px;
  left: 60px;
  position: absolute;
  top: 888px;
  width: 380px;
}

.profile .work-experience {
  height: 69px;
  left: 58px;
  position: absolute;
  top: 795px;
  width: 382px;
}

.profile .div {
  height: 69px;
  position: relative;
  width: 380px;
}

.profile .work-experience-2 {
  background-color: #ffffff;
  border-radius: 30px;
  height: 69px;
  left: 2px;
  position: absolute;
  top: 0;
  width: 378px;
}

.profile .personal-information {
  height: 69px;
  left: 60px;
  position: absolute;
  top: 702px;
  width: 380px;
}

.profile .overlap-2 {
  height: 420px;
  left: 36px;
  position: absolute;
  top: 56px;
  width: 433px;
}

.profile .background-rect {
  background-color: #19ecef;
  border: 3px solid;
  border-color: #ddd5d5;
  border-radius: 10px;
  height: 214px;
  left: 0;
  position: absolute;
  top: 0;
  width: 433px;
}

.profile .background-circle {
  background-color: #19ecef;
  border: 10px solid;
  border-color: #ffffff;
  border-radius: 198.5px;
  height: 397px;
  left: 18px;
  position: absolute;
  top: 23px;
  width: 397px;
}

.profile .account {
  height: 83px;
  left: 60px;
  position: absolute;
  top: 576px;
  width: 236px;
}

.profile .profile-pic-white-wrapper {
  border: 3px solid;
  border-color: #ffffff;
  border-radius: 37px;
  height: 74px;
  left: 0;
  position: absolute;
  top: 0;
  width: 74px;
}

.profile .profile-pic-white {
  border: 3px solid;
  border-color: #000000;
  border-radius: 32px/33px;
  height: 66px;
  left: 2px;
  position: relative;
  top: 1px;
  width: 64px;
}

.profile .text-wrapper-2 {
  color: #ffffff;
  font-family: "Inter", Helvetica;
  font-size: 18px;
  font-weight: 400;
  left: 87px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 50px;
  width: 145px;
}

.profile .text-wrapper-3 {
  color: #ffffff;
  font-family: "Inter", Helvetica;
  font-size: 24px;
  font-weight: 400;
  left: 87px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 12px;
  width: 145px;
}

.profile .panel {
  height: 809px;
  left: 468px;
  position: absolute;
  top: 303px;
  width: 500px;
}

.profile .overlap-3 {
  height: 809px;
  position: relative;
  width: 504px;
}

.profile .panel-2 {
  background-color: #ffffffcc;
  border-radius: 5px;
  height: 809px;
  left: 1px;
  position: absolute;
  top: 0;
  width: 498px;
}

.profile .upcoming-experience {
  height: 200px;
  left: 1px;
  position: absolute;
  top: 595px;
  width: 501px;
}

.profile .calendar {
  height: 141px;
  left: 325px;
  position: absolute;
  top: 59px;
  width: 142px;
}

.profile .overlap-group-2 {
  background-color: #ffffff;
  border-radius: 5px;
  height: 141px;
  position: relative;
  width: 140px;
}

.profile .redstrip {
  background-color: #ff0000;
  border-radius: 5px;
  height: 24px;
  left: 0;
  position: absolute;
  top: 0;
  width: 140px;
}

.profile .element-APR {
  color: #000000;
  font-family: "Inter", Helvetica;
  font-size: 30px;
  font-weight: 700;
  height: 72px;
  left: 33px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 46px;
}

.profile .overlap-wrapper {
  height: 141px;
  left: 175px;
  position: absolute;
  top: 59px;
  width: 142px;
}

.profile .element-FEB {
  color: #000000;
  font-family: "Inter", Helvetica;
  font-size: 30px;
  font-weight: 700;
  height: 72px;
  left: 34px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 46px;
}

.profile .overlap-group-wrapper {
  height: 141px;
  left: 25px;
  position: absolute;
  top: 59px;
  width: 142px;
}

.profile .element-NOV {
  color: #000000;
  font-family: "Inter", Helvetica;
  font-size: 30px;
  font-weight: 700;
  height: 72px;
  left: 32px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 46px;
}

.profile .separator {
  background-color: #8b94a8;
  height: 3px;
  left: 0;
  position: absolute;
  top: 0;
  width: 499px;
}

.profile .text-wrapper-4 {
  color: #000000;
  font-family: "Inter", Helvetica;
  font-size: 35px;
  font-weight: 700;
  left: 25px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 7px;
  white-space: nowrap;
  width: 454px;
}

.profile .skills-panel {
  height: 327px;
  left: 1px;
  position: absolute;
  top: 203px;
  width: 503px;
}

.profile .overlap-4 {
  border-radius: 20px;
  height: 49px;
  left: 7px;
  position: absolute;
  top: 82px;
  width: 476px;
}

.profile .p {
  color: #000000;
  font-family: "Inter", Helvetica;
  font-size: 14px;
  font-weight: 400;
  left: 54px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 16px;
}

.profile .rectangle {
  border: 5px solid;
  border-color: #6300b1;
  border-radius: 20px;
  filter: blur(5px);
  height: 49px;
  left: 0;
  position: absolute;
  top: 0;
  width: 476px;
}

.profile .rectangle-2 {
  border: 3px solid;
  border-color: #ffffff;
  border-radius: 20px;
  height: 41px;
  left: 5px;
  position: absolute;
  top: 4px;
  width: 467px;
}

.profile .icon-search {
  height: 23px;
  left: 22px;
  position: absolute;
  top: 13px;
  width: 23px;
}

.profile .text-wrapper-5 {
  color: #000000;
  font-family: "Inter", Helvetica;
  font-size: 40px;
  font-weight: 700;
  left: 25px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 0;
  white-space: nowrap;
  width: 112px;
}

.profile .separator-2 {
  background-color: #8b94a8;
  height: 3px;
  left: 0;
  position: absolute;
  top: 64px;
  width: 499px;
}

.profile .skill {
  background-color: #6300b199;
  border: 5px solid;
  border-radius: 20px;
  filter: blur(5px);
  height: 49px;
  left: 7px;
  position: absolute;
  top: 278px;
  width: 235px;
}

.profile .skill-2 {
  background-color: #6300b199;
  border: 5px solid;
  border-radius: 20px;
  filter: blur(5px);
  height: 49px;
  left: 250px;
  position: absolute;
  top: 210px;
  width: 235px;
}

.profile .skill-3 {
  background-color: #6300b199;
  border: 5px solid;
  border-radius: 20px;
  filter: blur(5px);
  height: 49px;
  left: 7px;
  position: absolute;
  top: 210px;
  width: 235px;
}

.profile .skill-4 {
  background-color: #6300b199;
  border: 5px solid;
  border-radius: 20px;
  filter: blur(5px);
  height: 49px;
  left: 250px;
  position: absolute;
  top: 142px;
  width: 235px;
}

.profile .skill-5 {
  background-color: #6300b199;
  border: 5px solid;
  border-radius: 20px;
  filter: blur(5px);
  height: 49px;
  left: 7px;
  position: absolute;
  top: 142px;
  width: 235px;
}

.profile .profile-completion {
  height: 157px;
  left: 0;
  position: absolute;
  top: 17px;
  width: 503px;
}

.profile .overlap-5 {
  border-radius: 20px;
  height: 49px;
  left: 8px;
  position: absolute;
  top: 70px;
  width: 476px;
}

.profile .box {
  background-color: #00b151;
  border-radius: 20px;
  filter: blur(5px);
  height: 49px;
  left: 0;
  position: absolute;
  top: 0;
  width: 476px;
}

.profile .outline {
  border: 3px solid;
  border-color: #ffffff;
  border-radius: 20px;
  height: 41px;
  left: 5px;
  position: relative;
  top: 4px;
  width: 467px;
}

.profile .text-wrapper-6 {
  color: #ffecec;
  font-family: "Inter", Helvetica;
  font-size: 25px;
  font-weight: 700;
  height: 35px;
  left: 146px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 7px;
  width: 186px;
}

.profile .text-wrapper-7 {
  color: #000000;
  font-family: "Inter", Helvetica;
  font-size: 40px;
  font-weight: 700;
  left: 26px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 0;
  white-space: nowrap;
  width: 447px;
}

.profile .separator-3 {
  background-color: #8b94a8;
  height: 3px;
  left: 0;
  position: absolute;
  top: 154px;
  width: 499px;
}
</style>
