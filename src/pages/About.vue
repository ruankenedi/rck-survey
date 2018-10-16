<template>
	<div class="layout-padding">
		<div class="flex items-start no-wrap text-left">
      <div class="full-width">
        <!-- <h5 class="light-paragraph no-margin">Sobre</h5> -->
        <p style="margin-top: 12px;">Dados</p>
      </div>
      <q-icon
        name="info"
        size="2.2rem"
        color="grey-9"
        style="margin: 0 0 1px 0;"
      />
    </div>
		<q-card>
			<!-- <div class="row">
				<div class="col-3"></div>
				<img
					class="col-6"
					src="../assets/logo.svg"
					style="max-width: 80%; padding: 20px;"
				>
				<div class="col-3"></div>
			</div> -->

			<q-card-main class="text-left">
				<div class="flex items-start">
          <q-icon
            name="smartphone"
            size="1.2rem"
            color="grey-6"
            style="margin-right: 16px;"
          />
          <div>
            <h6 class="no-margin letter-size">Plataforma</h6>
            <p class="text-faded text-bold letter-size-95">
              {{ $q.platform.is.platform.toUpperCase() }}
            </p>
          </div>
        </div>
        <div class="flex items-start">
          <q-icon
            name="language"
            size="1.2rem"
            color="grey-6"
            style="margin-right: 16px;"
          />
          <div>
            <h6 class="no-margin letter-size">Navegador</h6>
            <p class="text-faded text-bold letter-size-95">
              {{ $q.platform.is.name.toUpperCase() }} {{ $q.platform.is.version }}
            </p>
          </div>
        </div>
        <div class="flex items-start">
          <q-icon
            name="system_update"
            size="1.2rem"
            color="grey-6"
            style="margin-right: 16px;"
          />
          <div>
            <h6 class="no-margin letter-size">Versão do Sistema</h6>
            <p class="text-faded text-bold letter-size-95">{{ version }}</p>
          </div>
        </div>
			</q-card-main>
		</q-card>
	</div>
</template>

<script>
import { version } from '../../package.json';
export default {
	name: 'About',
	data () {
		return {
			version
		}
	}
}
</script>

<style>
.letter-size-100 {
	font-size: 100%;
}

.letter-size-95 {
	font-size: 95%;
}
</style>
