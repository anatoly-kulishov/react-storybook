import React, {FC, InputHTMLAttributes} from 'react';
import './MyInput.css'

export interface MyInputProps extends InputHTMLAttributes<HTMLInputElement> {
	big: boolean;
	placeholder: string;
	label: string;
}

const MyInput: FC<MyInputProps> = ({big, placeholder, label, ...props}) => {
	const classes = ['my-input']
	if (big) {
		classes.push('big-input')
	}
	return (
		<label>
			<span className="my-label-for-input">{label}</span>
			<input className={classes.join(' ')} placeholder={placeholder} {...props}/>
		</label>
	);
};

export default MyInput;
