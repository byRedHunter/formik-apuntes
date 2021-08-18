import { useFormik } from 'formik'
import React from 'react'

const FormWithHook = () => {
	const validate = (values) => {
		const errors = {}

		if (!values.firstName) {
			errors.firstName = 'El nombre es requerido.'
		} else if (values.firstName.length > 15) {
			errors.firstName = 'Debe tener 15 caracteres o menos.'
		}

		if (!values.lastName) {
			errors.lastName = 'El apellido es requerido.'
		} else if (values.lastName.length > 20) {
			errors.lastName = 'Debe tener 20 caracteres o menos.'
		}

		if (!values.email) {
			errors.email = 'El correo es requerido'
		} else if (
			!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
		) {
			errors.email = 'Correo invalido.'
		}

		return errors
	}

	const formik = useFormik({
		initialValues: {
			firstName: '',
			lastName: '',
			email: '',
		},
		validate,
		onSubmit: (values, { setSubmitting }) => {
			setTimeout(() => {
				console.log(JSON.stringify(values, null, 2))
				setSubmitting(false)
			}, 3000)
		},
	})
	const {
		handleSubmit,
		values,
		handleChange,
		isSubmitting,
		errors,
		handleBlur,
		touched,
	} = formik
	const { firstName, lastName, email } = values

	return (
		<section>
			<h2>Formulario con Hooks - Formik</h2>

			<form onSubmit={handleSubmit} autoComplete='off'>
				<div className='form-group'>
					<label htmlFor='firstName'>Nombre</label>
					<input
						id='firstName'
						name='firstName'
						type='text'
						onChange={handleChange}
						value={firstName}
						onBlur={handleBlur}
					/>
					{touched.firstName && errors.firstName && (
						<p className='error'>{errors.firstName}</p>
					)}
				</div>

				<div className='form-group'>
					<label htmlFor='lastName'>Apellido</label>
					<input
						id='lastName'
						name='lastName'
						type='text'
						onChange={handleChange}
						value={lastName}
						onBlur={handleBlur}
					/>
					{touched.lastName && errors.lastName && (
						<p className='error'>{errors.lastName}</p>
					)}
				</div>

				<div className='form-group'>
					<label htmlFor='email'>Correo</label>
					<input
						id='email'
						name='email'
						type='email'
						onChange={handleChange}
						value={email}
						onBlur={handleBlur}
					/>
					{touched.email && errors.email && (
						<p className='error'>{errors.email}</p>
					)}
				</div>

				<button type='submit' disabled={isSubmitting}>
					Enviar Datos
				</button>
			</form>
		</section>
	)
}

export default FormWithHook
