import React, {Component} from 'react';
import {connect} from 'react-redux';
import {updateUsername, updatePassword, login} from '../actions';

class Login extends Component {
	login() {
		this.props.login(
			this.props.username,
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
						placeholder="username"
						onChange={e => this.props.updateUsername(e.target.value)}
						value={this.props.username}
					/>
				</div>
				<div>
					<input
						placeholder="password"
						onChange={e => this.props.updatePassword(e.target.value)}
						value={this.props.password}
					/>
				</div>
				{this.renderLoader()}
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
		username: state.username,
		password: state.password,
		loading: state.loading
	};
};
export default connect(mapStateToProps, {updateUsername, updatePassword, login})(Login);
