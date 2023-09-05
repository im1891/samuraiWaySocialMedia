import { SubmitHandler, useForm } from 'react-hook-form'
import React from 'react'

type AddPostFormPropsType = {
	addNewPost: (postMessage: string) => void
}

type AddPostForm = {
	postMessage: string
}
export const AddPostForm: React.FC<AddPostFormPropsType> = ({ addNewPost }) => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isValid }
	} = useForm<AddPostForm>({ mode: 'onBlur' })
	const onSubmit: SubmitHandler<AddPostForm> = (data) => {
		addNewPost(data.postMessage)
		reset()
	}
	const onEnterPressHandler = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
		e.key === 'Enter' && handleSubmit(onSubmit)()
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div>
				<textarea
					style={{ border: errors.postMessage && '2px solid red' }}
					{...register('postMessage', {
						required: 'Field is required',
						maxLength: { value: 30, message: 'Max post length is 30' },
						minLength: { value: 4, message: 'Min post length is 4' }
					})}
					onKeyDown={onEnterPressHandler}
					placeholder={'Enter post message'}
				/>
				<div style={{ height: errors.postMessage && '30px', color: 'red' }}>
					{errors.postMessage && errors.postMessage.message}
				</div>
			</div>
			<div>
				<button disabled={!isValid}>Add</button>
			</div>
		</form>
	)
}
