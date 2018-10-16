<template>
	<div>
		<div>
			<q-stepper ref="stepper2" color="green-7" v-model="step2" :alternative-labels="alt" vertical>
        <q-step default name="campaign" title="Identificação">
					<div>
						<q-field label="Prédio">
							<q-select
								filter
								v-model="building"
								:options="optionsBuilding"
							/>
						</q-field>
						<q-field label="Apartamento">
							<q-select
								filter
								v-model="apartment"
								:options="optionsApartment"
							/>
						</q-field>
					</div>

          <q-stepper-navigation v-if="!globalNavigation">
            <q-btn class="q-ml-sm" color="green-7" @click="$refs.stepper2.next()">Avançar</q-btn>
          </q-stepper-navigation>
        </q-step>

        <q-step name="ad_group" title="Tipologia e Perfil">
					<!-- :error="stepError" -->
					<div>
						<q-field label="Tipologia">
							<q-select
								filter
								v-model="typology"
								:options="optionsTypology"
							/>
						</q-field>

						<q-field label="Perfil">
							<q-select
								filter
								v-model="profile"
								:options="optionsProfile"
							/>
						</q-field>
					</div>

          <q-stepper-navigation v-if="!globalNavigation">
            <q-btn color="green-7" @click="$refs.stepper2.next()">Avançar</q-btn>
            <q-btn class="q-ml-sm" color="green-7" flat @click="$refs.stepper2.previous()">Voltar</q-btn>
          </q-stepper-navigation>
        </q-step>

        <q-step name="create_ad" title="Questionário">
          <p>
            Questions
          </p>

          <q-stepper-navigation v-if="!globalNavigation">
						<!-- @click="$refs.stepper2.goToStep('campaign')" -->
            <q-btn color="green-7">Enviar</q-btn>
            <q-btn class="q-ml-sm" color="green-7" flat @click="$refs.stepper2.previous()">Voltar</q-btn>
          </q-stepper-navigation>
        </q-step>

        <q-inner-loading :visible="progress" />
      </q-stepper>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			step2: 'first',
			options: ['contractable', 'disable_payment', 'step_error'],
			building: 'Pre1',
			apartment: 'Apa1',
			typology: 'Tip1',
			profile: 'Per1',
			optionsBuilding: [
        {
          label: 'Prédio 1',
          value: 'Pre1'
        },
        {
          label: 'Prédio 2',
          value: 'Pre2'
        },
        {
          label: 'Prédio 3',
          value: 'Pre3'
        },
        {
          label: 'Prédio 4',
          value: 'Pre4'
        },
        {
          label: 'Prédio 5',
          value: 'Pre5'
        }
			],
			optionsApartment: [
        {
          label: 'Apartamento 1',
          value: 'Apa1'
        },
        {
          label: 'Apartamento 2',
          value: 'Apa2'
        },
        {
          label: 'Apartamento 3',
          value: 'Apa3'
        },
        {
          label: 'Apartamento 4',
          value: 'Apa4'
        },
        {
          label: 'Apartamento 5',
          value: 'Apa5'
        }
			],
			optionsTypology: [
        {
          label: 'Tipologia 1',
          value: 'Tip1'
        },
        {
          label: 'Tipologia 2',
          value: 'Tip2'
        },
        {
          label: 'Tipologia 3',
          value: 'Tip3'
        },
        {
          label: 'Tipologia 4',
          value: 'Tip4'
        },
        {
          label: 'Tipologia 5',
          value: 'Tip5'
        }
			],
			optionsProfile: [
        {
          label: 'Perfil 1',
          value: 'Per1'
        },
        {
          label: 'Perfil 2',
          value: 'Per2'
        },
        {
          label: 'Perfil 3',
          value: 'Per3'
        },
        {
          label: 'Perfil 4',
          value: 'Per4'
        },
        {
          label: 'Perfil 5',
          value: 'Per5'
        }
			],

		}
	},
	methods: {

	},
	computed: {
		globalNavigation () {
      return this.options.includes('global_navigation');
		},
		stepError () {
      return this.options.includes('step_error')
    },
    disabledStep () {
      return this.options.includes('disable_payment')
		},
		alt () {
      return this.options.includes('alt')
    },
		progress () {
      return this.options.includes('progress')
    }
	}
}
</script>

<style>

</style>
