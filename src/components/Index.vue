<template>
	<div>
		<div class="text-center">
			<q-page class="flex-center row">
				<div class="col-12">
					SISTEMA DE VISTORIA ESQUADRILON
				</div>
				<br><br>
				<div class="col-6">
					<q-btn :to="{ name: 'process' }" color="green-7" label="Nova vistoria" />
				</div>
				<br>
				<div class="col-6">
					<q-btn :to="{ name: 'search' }" color="green-7" label="Buscar Vistoria" />
				</div>
			</q-page>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {

		}
	}
}
</script>

<style>

</style>
