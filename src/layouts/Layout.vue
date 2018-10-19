<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header v-if="$route.name !== 'login'">
      <q-toolbar
        color="green-7"
        :glossy="$q.theme === 'mat'"
        :inverted="$q.theme === 'ios'"
      >
        <q-btn
					v-if="homeRoute"
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

				<q-btn
					v-else
          flat
          dense
          round
					@click="back()"
          aria-label="Voltar"
        >
          <q-icon name="arrow_back" />
        </q-btn>

        <q-toolbar-title>
          {{ nameTitle() }}
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
    >
      <q-list
        no-border
        link
        inset-delimiter
      >
				<q-item-separator />
				<q-item>
					<q-item-side class="flex">
						<q-icon name="account circle" color="teal" size="3em" style="margin-right: 8px;"/>
						<h5 class="light-paragraph">{{ currentUser() }}</h5>
					</q-item-side>
				</q-item>
        <q-list-header>Mais</q-list-header>
        <q-item :to="{ name: 'about' }">
          <q-item-side icon="info" />
          <q-item-main label="Sobre" sublabel="Informações sobre o aplicativo" />
        </q-item>
      </q-list>
    </q-layout-drawer>

    <q-page-container>

      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar';

export default {
  name: 'layout',
  data () {
    return {
      leftDrawerOpen: false
    }
  },
  methods: {
		currentUser() {
			console.log('CurrentUser');
			const { name } = this.$store.getters.currentUser;
			console.log('NameEEE: ', name);

      return name ? name.split(' ')[0].toUpperCase() : name;
		},
		nameTitle() {
			const { name } = this.$route;
			if (name === 'process') {
				return 'Criando Vistoria';
			}

			if (name === 'search') {
				return 'Pesquisar Vistoria';
			}

			if (name === 'about') {
				return 'Informações Sobre o Aplicativo' ;
			}

			return 'Controle de Vistoria';
		},
		openURL,
		back() {
			return this.$router.push({ name: 'index' });
		}
	},
	computed: {
		homeRoute() {
			return this.$route.name === 'index';
		}
	}
}
</script>

<style>
</style>
