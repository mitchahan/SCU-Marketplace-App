/* @author Paul Mason
 * @lastModifiedBy Paul Mason
 * Description: This file is the test data for an account. Until we've
 * connected the DB, this will serve as data to populate.
 */

import React from 'react'
import PropTypes from 'prop-types'

const testUser = {
	email: "testemail@scu.edu",
	password: "password",
	first_name: "Test",
	last_name: "User",
	is_seller: '1'
};

const User = props => {
	return (
		<div>
			<p>Email: {props.email}</p>
			<p>Password: {props.password}</p>
			<p>First name: {props.first_name}</p>
			<p>Last name: {props.last_name}</p>
			<p>Is seller: {props.is_seller}</p>
		</div>
	);
};

User.propTypes = {
	email: PropTypes.string.isRequired,
	password: PropTypes.string.isRequired,
	first_name: PropTypes.string.isRequired,
	last_name: PropTypes.string.isRequired,
	is_seller: PropTypes.string.isRequired
};

const UserDetails = props => {
	return(
		<div>
			<User email = {testUser.email} password = {testUser.password} first_name = {testUser.first_name} last_name = {testUser.last_name} is_seller = {testUser.is_seller} />
		</div>
	);
};

export default UserDetails;
