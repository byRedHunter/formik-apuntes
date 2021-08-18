import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'

const FormBaseReduce = () => {
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
			<h2>Formulario Básico, Reducir</h2>

			<Formik
				initialValues={initialValues}
				validate={(values) => validateField(values)}
				onSubmit={(values, { setSubmitting }) =>
					sendForm(values, { setSubmitting })
				}
			>
				{({ isSubmitting }) => (
					<Form autoComplete='off'>
						<div className='form-group'>
							<label>Correo Electrónico</label>

							<Field type='email' name='email' />
							<ErrorMessage name='email' component='p' className='error' />
						</div>

						<div className='form-group'>
							<label>Correo Electrónico</label>

							<Field type='password' name='password' />
							<ErrorMessage name='password' component='p' className='error' />
						</div>

						<button type='submit' disabled={isSubmitting}>
							Submit
						</button>
					</Form>
				)}
			</Formik>
		</section>
	)
}

export default FormBaseReduce
