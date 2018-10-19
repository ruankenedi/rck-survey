<template>
	<div>
		<div class="banner bg-green-6">
			<q-layout>
				<q-page-container>
					<q-page class="flex flex-center row">
						<q-card class="card col-xs-11 col-sm-11 col-md-6 col-lg-5 col-xl-3" >
							<q-card-media class="row">
								<img style="width: 74%; height: 11vh; margin-left: 12%;" src="../../../assets/logo.png" />
							</q-card-media>
							<q-card-main>
									<p class="text-center caption">Acesse com seu Email e senha...</p>
								<form>
									<q-field>
										<q-input
											v-model="email"
											type="email"
											float-label="Email"
										/>
									</q-field>

									<q-field>
										<q-input
											v-model="password"
											type="password"
											float-label="Senha"
										/>
									</q-field>
									<br>
									<q-btn
										@click="loging"
										rounded
										style="width: 100%;"
										label="Entrar"
										color="green-8"
									/>

										<p class="text-center cursor-pointer text-faded" style="margin: 20px 0 0px">Esqueci minha senha ?</p>
									<!-- <p class="text-center" style="color: blue; margin: 20px 0 5px">Não tem conta ?
										<b class="cursor-pointer">
											Registre-se.
										</b>
									</p> -->
								</form>
							</q-card-main>
						</q-card>
					</q-page>
				</q-page-container>
			</q-layout>
		</div>
	</div>
</template>

<script>
import { mapActions } from 'vuex';
import axios from 'axios';
import { Notify } from 'quasar';
// axios.get('http://localhost:9000?name=daniel',
// 	{ user: 'ruan',   password: 'password'
// }).then(console.log);
// axios.get('http://localhost:9000/user/daniel').then(console.log);
export default {
	name: 'Login',
	data () {
		return {
			// auth: {
				// user: {
					// login: '',
					logging: false,
					email: '',
					password: '',
				// },
				// logged: false
			// },
			apiBaseURL: 'http://localhost:9000'
		}
	},
	methods: {
		...mapActions([ 'login' ]),
		loging() {
			const { email, password } = this;

			// this.login({ email, password }) // this is a Vuex action
			// 	.then(({ hasTemporaryPassword, temporaryPassword }) => {
			// 		console.log('aaaaaa')
			// 		this.logging = false;
			// 		if (hasTemporaryPassword) {
			// 			console.log('11111111111111');
			// 			this.$router.push({
			// 				name: 'password.settings',
			// 				params: { temporaryPassword: true }
			// 			});

			// 			this.$store.commit('SET_TMP_PWD', temporaryPassword);

			// 			return;
			// 		}

			// 		this.$router.push({ name: 'home' }, () => {
			// 			console.log('222222222222222');
			// 			if (this.$store.getters.currentUser.assetsLength > 5) {
			// 				this.$router.push('/list');
			// 				this.$store.dispatch('setView', 'list');
			// 			} else {
			// 				this.$router.push('/cards');
			// 				this.$store.dispatch('setView', 'cards');
			// 			}
			// 		});
			// 	})
			// 	.catch((err) => {
			// 		console.log(err.message);
			// 	});

			// ######################################################################################
			if (!this.logging) {
				this.logging = true;
				const { email, password, apiBaseURL } = this;
				const loginURL = `${apiBaseURL}/auth/login`;
				const params = new URLSearchParams();

				params.append('email', email);
				params.append('password', password);
				const user = {
					email: params.get('email'),
					password: params.get('password')
				};

// HERE CODE ERRRRRRRRRRRRRRRRROOOOOOOOOOOORRRRRRRRRRRRRRR
					this.login({ email, password }) // this is a Vuex action
				.then(({ hasTemporaryPassword, temporaryPassword }) => {
					console.log('aaaaaa')
					this.logging = false;
					if (hasTemporaryPassword) {
						console.log('11111111111111');
						this.$router.push({
							name: 'password.settings',
							params: { temporaryPassword: true }
						});

						this.$store.commit('SET_TMP_PWD', temporaryPassword);

						return;
					}

					this.$router.push({ name: 'index' });
				})
				.catch((err) => {
					console.log(err.message);
				});

				// axios.post(loginURL, user)
				// 	.then((res) => {
				// 		const { data, ok, status } = res;
				// 		/* Please, handle the response data! */
				// 		const emailUser = data.data[0].email;
				// 		const passwordUser = data.data[0].password;

				// 		if (emailUser !== email || password !== passwordUser) {
				// 				this.$q.notify({
				// 					message: 'Usuário ou senha inválidos.',
				// 					timeout: 3200,
				// 					type: 'negative',
				// 					color: 'negative',
				// 					textColor: 'white',
				// 					icon: 'error',
				// 					position: 'bottom-left'
				// 				});
				// 				return;
				// 		}

				// 		if (emailUser === email && passwordUser === password) {
				// 				this.$router.push({ name: 'index' });
				// 		}
				// 	})
				// 	.catch((err) => {
				// 		console.log(err.message + ' hello');
				// 	})
				// 	.finally(() => this.logging = false);
				// 	/* Please, add a error handler for this request above! */
			}
		}
	},
	computed: {
	},
	mounted() {
	}
}
</script>

<style>
.banner {
	width: 100%;
	height: 50vh;
}
.card {
	background-color: #fff !important;
}
</style>
