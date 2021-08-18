import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const FormHookYup = () => {
	const formik = useFormik({
		initialValues: {
			firstName: '',
			lastName: '',
			email: '',
		},

		validationSchema: Yup.object({
			firstName: Yup.string()
				.max(15, 'Debe de tener 15 caracteres o menos.')
				.required('El nombre es obligatorio'),
			lastName: Yup.string()
				.max(20, 'Debe de tener 20 caracteres o menos.')
				.required('El apellido es obligatorio.'),
			email: Yup.string()
				.email('El Correo no es válido')
				.required('El correo es obligatorio.'),
		}),

		onSubmit: (values, { setSubmitting, resetForm }) => {
			setTimeout(() => {
				console.log(JSON.stringify(values, null, 2))
				setSubmitting(false)
				resetForm()
			}, 3000)
		},
	})
	const { handleSubmit, errors, touched, getFieldProps, isValid, dirty } =
		formik

	return (
		<section>
			<h2>Formulario con Hooks y Yup</h2>

			<form onSubmit={handleSubmit} autoComplete='off'>
				<div className='form-group'>
					<p className='success'>
						Usar un metodo para reemplazar handleChange, handleBlur
						--getFieldProps--
					</p>
				</div>

				<div className='form-group'>
					<label htmlFor='firstName'>Nombre</label>
					<input id='firstName' type='text' {...getFieldProps('firstName')} />
					{touched.firstName && errors.firstName && (
						<p className='error'>{errors.firstName}</p>
					)}
				</div>

				<div className='form-group'>
					<label htmlFor='lastName'>Apellido</label>
					<input id='lastName' type='text' {...getFieldProps('lastName')} />
					{touched.lastName && errors.lastName && (
						<p className='error'>{errors.lastName}</p>
					)}
				</div>

				<div className='form-group'>
					<label htmlFor='email'>Correo</label>
					<input id='email' type='email' {...getFieldProps('email')} />
					{touched.email && errors.email && (
						<p className='error'>{errors.email}</p>
					)}
				</div>

				<button type='submit' disabled={!isValid || !dirty}>
					Enviar Datos
				</button>
			</form>
		</section>
	)
}

export default FormHookYup
