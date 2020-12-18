<template>
<div class="container x-mt-2">
<h1>Contacto</h1>
<br>
<div class="container">
  <form action="https://docs.google.com/forms/d/e/1FAIpQLSdQQKFDuMa9B3HnAkDG5rYzxDn1pUEuXHlIycvPiKSEl7AduA/formResponse"
      target="_blank"
      method="POST">
    <label for="">Direccion de Correo Electronico:</label>
    <input class="main-form___input" id="emailAddress" type="email" name="emailAddress" placeholder="Correo Electronico..." required>

    <label for="2079083816">Nombres:</label>
    <input class="main-form___input" id="1238020912" type="text" name="entry.1238020912" placeholder="Nombre..." required>

    <label for="1153505261">Apellidos:</label>
    <input class="main-form___input" id="1966654690" type="text" name="entry.1966654690" placeholder="Apellidos..." required>

    <label for="1262015554">Mensaje:</label>
    <textarea  class="main-form___input" id="864963901" name="entry.864963901" placeholder="Escriba su mensaje..." style="height:200px" required></textarea>
    <input type="hidden" name="fvv" value="1">
    <input type="hidden" name="fbzx" value="3736463559634868106">
    <input type="hidden" name="pageHistory" value="0">

    <input class="main-form__submit" type="submit" value="Enviar">
  </form>
</div>
</div>
</template>
<script>
export default {
    name: 'Contacto',
    data(){
    return{
      site: {
          titulo: "Contacto - Xpend Music",
          img: "https://xpendmusic.com/assets/img/og-image.png",
          descripcion: "Ponte en contacto con nosotros."
        }
    }
  },
  head () {
    return {
      title: this.site.titulo,
      meta: [
        { hid: 'description', name: 'description', content: this.site.descripcion},
        {property: 'og:title', content: this.site.titulo},
        {property: 'og:image', content: this.site.img},
        {property: 'og:description', content: this.site.descripcion},
        {name: 'twitter:card', content: 'summary'},
        {name: 'twitter:title', content: this.site.titulo},
        {name: 'twitter:site', content: '@xpendmusic'},
        {name: 'twitter:description', content: this.site.descripcion},
        {name: 'twitter:image', content: this.site.img}
      ]
    }
  }
}
</script>
<style scoped>
.main-form___input{
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
  font-family: inherit;
}

.main-form__submit {
  background-color: var(--xpend-primary);
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.main-form__submit:hover {
  background-color: var(--xpend-bg-2);
}
input:focus, textarea:focus, select:focus{
        outline: none;
    }
</style>