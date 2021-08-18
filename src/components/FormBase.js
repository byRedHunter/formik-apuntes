import React from 'react'
import { Formik } from 'formik'

const FormBase = () => {
	const initialValues = { email: '', password: '' }

	const validateField = (values) => {
		const errors = {}

		if (!values.email) {
			errors.email = 'El correo es requerido.'
		} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
			errors.email = 'El correo no es correcto.'
		}

		if (!values.password) {
			errors.password = 'La constraseña es requerida.'
		} else if (values.password.length < 8) {
			errors.password = 'La contraseña debe ser mayor a 8 caracteres.'
		}

		return errors
	}

	const sendForm = (values, { setSubmitting }) => {
		setTimeout(() => {
			console.log(JSON.stringify(values, null, 2))
			setSubmitting(false)
		}, 3000)
	}

	return (
		<section>
			<h2>Formulario Básico - Formik</h2>

			<Formik
				initialValues={initialValues}
				validate={(values) => validateField(values)}
				onSubmit={(values, { setSubmitting }) =>
					sendForm(values, { setSubmitting })
				}
			>
				{({
					values,
					errors,
					touched,
					handleChange,
					handleBlur,
					handleSubmit,
					isSubmitting,
				}) => (
					<form onSubmit={handleSubmit} autoComplete='off'>
						<div className='form-group'>
							<label>Correo Electrónico</label>

							<input
								type='email'
								name='email'
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.email}
							/>
							{errors.email && touched.email && (
								<p className='error'>{errors.email}</p>
							)}
						</div>

						<div className='form-group'>
							<label>Contraseña</label>

							<input
								type='password'
								name='password'
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.password}
							/>
							{errors.password && touched.password && (
								<p className='error'>{errors.password}</p>
							)}
						</div>

						<button type='submit' disabled={isSubmitting}>
							Submit
						</button>
					</form>
				)}
			</Formik>
		</section>
	)
}

export default FormBase
