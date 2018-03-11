import React, {Component} from 'react';
import {connect} from 'react-redux';
import {updateEmail, updatePassword, login} from '../actions';

class Login extends Component {
	login() {
		this.props.login(
			this.props.email,
			this.props.password
		);
	}
	renderLoader() {
		if (this.props.loading)
			return <b> Cargando... </b>;
	}
	render() {
		return (
			<div>
				<div>
					<input
						id="email"
						placeholder="Email"
						onChange={e => this.props.updateEmail(e.target.value)}
						value={this.props.email}
					/>
				</div>
				<div>
					<input
						id="password"
						placeholder="Password"
						type="password"
						onChange={e => this.props.updatePassword(e.target.value)}
						value={this.props.password}
					/>
				</div>
				{this.renderLoader()}
				{this.props.error}
				<div>
					<button onClick={this.login.bind(this)}>
						Iniciar sesión
					</button>
				</div>
			</div>
		);
	}
}
const mapStateToProps = state => {
	return {
		email: state.email,
		password: state.password,
		loading: state.loading,
		error: state.error
	};
};
export default connect(mapStateToProps, {updateEmail, updatePassword, login})(Login);
