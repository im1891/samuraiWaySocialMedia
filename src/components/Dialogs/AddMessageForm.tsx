import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

type AddMessageFormPropsType = {
	addNewMessage: (messageText: string) => void
}
type AddMessageFormType = {
	message: string
}
export const AddMessageForm: React.FC<AddMessageFormPropsType> = ({ addNewMessage }) => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isValid }
	} = useForm<AddMessageFormType>({ mode: 'onBlur' })

	const onSubmit: SubmitHandler<AddMessageFormType> = (data) => {
		addNewMessage(data.message)
		reset()
	}

	const onEnterPressHandler = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
		e.key === 'Enter' && handleSubmit(onSubmit)()
	}
	console.log(errors.message)
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div>
				<textarea
					style={{ border: errors.message && '2px solid red' }}
					{...register('message', {
						required: 'Field is required',
						minLength: { message: 'Min message length is 4', value: 4 },
						maxLength: { message: 'Max message length is 30', value: 30 }
					})}
					onKeyDown={onEnterPressHandler}
				></textarea>
				<div
					style={{
						height: errors.message && '30px',
						color: 'red'
					}}
				>
					{errors.message && errors.message.message}
				</div>
			</div>
			<div>
				<button disabled={!isValid}>Add</button>
			</div>
		</form>
	)
}
