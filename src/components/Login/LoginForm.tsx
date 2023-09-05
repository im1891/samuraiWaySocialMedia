import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

export type LoginDataType = {
	email: string
	password: string
	rememberMe: boolean
	submit: string
}

type LoginFormPropsType = {
	login: (email: string, password: string, rememberMe: boolean) => Promise<string | undefined>
}
export const LoginForm: React.FC<LoginFormPropsType> = ({ login }) => {
	const [inputType, setInputType] = useState('password')
	const onInputTypeHandler = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
		setInputType(e.currentTarget.checked ? 'text' : 'password')
	}
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isValid },
		setError,
		clearErrors
	} = useForm<LoginDataType>({ mode: 'onTouched' })

	const onSubmit: SubmitHandler<LoginDataType> = (data) => {
		login(data.email, data.password, data.rememberMe)
			.then(() => reset())
			.catch((e: string) => setError('submit', { type: 'server', message: e }))
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div>
				<input
					style={{ border: errors.email && '2px solid red' }}
					{...register('email', {
						pattern: {
							value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
							message: 'Enter valid mail'
						},
						required: 'Field is required',
						minLength: {
							value: 4,
							message: 'Min login length is 4'
						}
					})}
					type="text"
					placeholder={'Login'}
				/>
			</div>
			<div>
				<input
					style={{ border: errors.password && '2px solid red' }}
					{...register('password', {
						required: 'Field is required',
						minLength: {
							value: 4,
							message: 'Min password length is 4'
						}
					})}
					type={inputType}
					placeholder={'Password'}
				/>
			</div>
			<div
				style={{
					height: (errors.email || errors.password) && '30px',
					color: 'red'
				}}
			>
				{errors.email
					? errors.email.message
					: errors.password
					? errors.password.message
					: errors.submit && errors.submit.message}
			</div>
			<div>
				<label>
					<input type={'checkbox'} onClick={onInputTypeHandler} style={{ cursor: 'pointer' }} />
					<span style={{ cursor: 'pointer' }}>Show password</span>
				</label>
			</div>
			<div>
				<label>
					<input {...register('rememberMe')} type="checkbox" style={{ cursor: 'pointer' }} />
					<span style={{ cursor: 'pointer' }}>Remember me</span>
				</label>
			</div>
			<div>
				<button disabled={!isValid} onClick={() => clearErrors()}>
					Login
				</button>
			</div>
		</form>
	)
}
