import React from 'react'
import { Formik, Form, useField } from 'formik'
import * as Yup from 'yup'

const InputText = ({ label, ...props }) => {
	const [field, meta] = useField(props)

	return (
		<div className='form-group'>
			<label htmlFor={props.id || props.name}>{label}</label>

			<input {...field} {...props} />

			{meta.touched && meta.error && <p className='error'>{meta.error}</p>}
		</div>
	)
}

const InputCheckbox = ({ children, ...props }) => {
	const [field, meta] = useField({ ...props, type: 'checkbox' })

	return (
		<div className='form-group'>
			<label className='checkbox-input'>
				<input type='checkbox' {...field} {...props} />
				{children}
			</label>
			{meta.touched && meta.error && <p className='error'>{meta.error}</p>}
		</div>
	)
}

const InputSelect = ({ label, ...props }) => {
	const [field, meta] = useField(props)

	return (
		<div className='form-group'>
			<label htmlFor={props.id || props.name}>{label}</label>
			<select {...field} {...props} />
			{meta.touched && meta.error && <p className='error'>{meta.error}</p>}
		</div>
	)
}

const InputComponents = () => {
	const initialValues = {
		firstName: '',
		lastName: '',
		email: '',
		acceptedTerms: false, // added for our checkbox
		jobType: '', // added for our select
	}

	const schemaForm = Yup.object({
		firstName: Yup.string()
			.max(15, 'Debe de tener 15 caracteres o menos.')
			.required('El nombre es obligatorio. '),
		lastName: Yup.string()
			.max(20, 'Debe de tener 20 caracteres o menos.')
			.required('El nombre es obligatorio. '),
		email: Yup.string()
			.email('El correo es inválido.')
			.required('El correo es obligatorio. '),
		acceptedTerms: Yup.boolean()
			.required('Acepte los terminos. ')
			.oneOf([true], 'Ud debe de aceptar los terminos y condiciones.'),
		jobType: Yup.string()
			.oneOf(['designer', 'development', 'other'], 'Este trabajo no es válido.')
			.required('El tipo de trabajo es obligatorio. '),
	})

	const sendForm = (values, { setSubmitting }) => {
		setTimeout(() => {
			console.log(JSON.stringify(values, null, 2))
			setSubmitting(false)
		}, 400)
	}

	return (
		<section>
			<h2>Formik, input components</h2>

			<Formik
				initialValues={initialValues}
				validationSchema={schemaForm}
				onSubmit={(values, { setSubmitting }) =>
					sendForm(values, { setSubmitting })
				}
			>
				<Form autoComplete='off'>
					<InputText
						label='Nombre'
						name='firstName'
						type='text'
						placeholder='Red'
					/>

					<InputText
						label='Apellido'
						name='lastName'
						type='text'
						placeholder='Hunter'
					/>

					<InputText
						label='Correo electrónico'
						name='email'
						type='email'
						placeholder='example@text.com'
					/>

					<InputSelect label='Tipo de trabajo' name='jobType'>
						<option value=''>Selecciona un tipo de trabajo</option>
						<option value='designer'>Diseñador</option>
						<option value='development'>Desarrollador</option>
						<option value='marketing'>Marketing</option>
						<option value='other'>Otro</option>
					</InputSelect>

					<InputCheckbox name='acceptedTerms'>
						I accept the terms and conditions.
					</InputCheckbox>

					<button type='submit'>Enviar Datos</button>
				</Form>
			</Formik>
		</section>
	)
}

export default InputComponents
