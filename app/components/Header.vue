<template>
    <div class="header">
        <div class="left">
            <i class="bi bi-filetype-mp4"></i>
            <span class="nama">Virall JEJE Slebew.mp4</span>
        </div>
        <div class="right">
            <i class="bi bi-folder2"></i>
            <i class="bi bi-download"></i>
            <i class="bi bi-three-dots-vertical"></i>
            <div class="imgprofile">
                <img src="https://i.sstatic.net/34AD2.jpg" alt="" srcset="">
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
#__nuxt .header
{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

/* .header i
{
    color: #5F6368;
} */

.header .left
{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
}

.header .right
{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
}

.right .imgprofile
{
    width: 25px;
    height: 25px;
    border-radius: 100%;
    overflow: hidden;
}

.imgprofile img
{
    max-width: 100%;
}

.left span
{
    font-size: 14px;
}
</style>