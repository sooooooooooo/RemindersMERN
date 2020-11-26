const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
	given_name: {
		type: String,
		required: [true, "Given name field is required"],
		minlength: [2, "Given name must be 2 characters or longer"],
		trim: true,
		validate: {
			validator: val => /^([a-zA-Z-']+)?$/.test(val),
			message: "Given name must contain only letters, hyphen or apostrophe"
		}
	},
	middle_name: {
		type: String,
		trim: true,
		validate: {
			validator: val => /^([a-zA-Z-']+)?$/.test(val),
			message: "Family name must contain only letters, hyphen or apostrophe"
		}
	},
	family_name: {
		type: String,
		required: [true, "Family name field is required"],
		minlength: [2, "Family name must be 2 characters or longer"],
		trim: true,
		validate: {
			validator: val => /^([a-zA-Z-']+)?$/.test(val),
			message: "Family name must contain only letters, hyphen or apostrophe"
		}
	},
	dob: {
		type: Date,
		required: [true, "Birthday field is required"],
		trim: true,
		validate: {
			validator: val => {
				val.setFullYear(val.getFullYear() + 13);
				const currentTime = new Date();
				currentTime.setHours(0,0,0,0);
				return val.getTime() <= currentTime.getTime();
			},
			message: "Must be 13 years or older"
		}
	},
	email: {
		type: String,
		required: [true, "Email field is required"],
		trim: true,
		validate: {
			validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
			message: "Please enter a valid email"
		}
	},
	phone: {
		type: String,
		trim: true,
		validate: {
			validator: val => /\d{3}-\d{3}-\d{4}/.test(val),
			message: props => `${props.value} is not a valid phone number`
		}
	},
	language: {
		type: String,
		default: "English"
	}
}, {timestamps: true});