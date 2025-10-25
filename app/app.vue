<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>


<style>

@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css");
*
{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Open Sans", sans-serif;
}

body
{
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

#__nuxt
{
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #1E1E1F;
  color: #fff;
}

@media(min-width: 500px)
{
  #__nuxt
  {
    max-width: 600px;
  }
}

@media(min-width: 425px)
{
    .popgoogle
    {
        max-width: 350px;
    }

}

</style>
