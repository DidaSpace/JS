<template>
  <div class="div">
    <section  class="bedroom center">
        <div v-for="(project,index) in projects" :key="index" class="bedroom__project">
          <img :src="project.img" alt="" class="bedroom__image" />
          <div class="bedroom__content">
            <div class="bedroom__info">
              <h2 class="bedroom__title">{{project.title}}</h2>
              <p class="bedroom__subtitle">{{project.subtitle}}</p>
            </div>
            <button class="bedroom__btn">
              <img :src="project.imgVector" alt="" class="bedroom__vector" />
            </button>
          </div>
        </div>
      </section>
      <img src="../assets/img/Vector11.png" alt="">
  </div>
</template>

<script>
export default {
  name: 'BedroomProjects',
  data: function () {
    return {
      projects: [
        {
          img: require('../assets/img/spalna1.png'),
          title: 'Минималистичная спальня',
          subtitle: 'Декор / Планировка',
          imgVector: require('../assets/img/Vector11.png')
        },
        {
          img: require('../assets/img/spalna2.png'),
          title: 'Минималистичная спальня',
          subtitle: 'Декор / Планировка',
          imgVector: require('../assets/img/Vector11.png')
        },
        {
          img: require('../assets/img/spalna3.png'),
          title: 'Минималистичная спальня',
          subtitle: 'Декор / Планировка',
          imgVector: require('../assets/img/Vector11.png')
        },
        {
          img: require('../assets/img/spalna4.png'),
          title: 'Минималистичная спальня',
          subtitle: 'Декор / Планировка',
          imgVector: require('../assets/img/Vector11.png')
        },
        {
          img: require('../assets/img/spalna5.png'),
          title: 'Минималистичная спальня',
          subtitle: 'Декор / Планировка',
          imgVector: require('../assets/img/Vector11.png')
        },
        {
          img: require('../assets/img/spalna6.png'),
          title: 'Минималистичная спальня',
          subtitle: 'Декор / Планировка',
          imgVector: require('../assets/img/Vector11.png')
        },
        {
          img: require('../assets/img/spalna7.png'),
          title: 'Минималистичная спальня',
          subtitle: 'Декор / Планировка',
          imgVector: require('../assets/img/Vector11.png')
        },
        {
          img: require('../assets/img/spalna8.png'),
          title: 'Минималистичная спальня',
          subtitle: 'Декор / Планировка',
          imgVector: require('../assets/img/Vector11.png')
        }
      ]
    }
  }
}
</script>

<style>
.center{
  padding-left: calc(50% - 600px);
  padding-right: calc(50% - 600px);
}
.bedroom{
  margin-top: 50px;
  display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 20px;
}
.bedroom__image {
  width: 100%;
  height: auto; /* Картинка будет адаптироваться по ширине */
}
</style>
