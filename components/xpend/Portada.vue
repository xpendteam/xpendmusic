<template>
    <img class="portada_main" :src="xsrc" :alt="xalt" :title="xtitle">
</template>
<script>
export default {
    props: [
      "xtitle",
      "xalt",
      "xsrc",
    ],
}
</script>
<style scoped>
.portada_main{
    border-radius: 2%;
    width: 88%;
    height: 88%;
    margin-top: 20px;
    margin-bottom: 20px;
    -webkit-transition: 0.5s;
	transition: 0.5s
}
@media only screen and (min-width: 768px) {
	.portada_main:hover {
		-webkit-transform: scale(1.1);
		transform: scale(1.1)
	}
}
</style>