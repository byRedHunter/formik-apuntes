import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const FormikYup = () => {
	const initialValues = {
		firstName: '',
		lastName: '',
		email: '',
	}

	const schemaForm = Yup.object({
		firstName: Yup.string()
			.max(15, 'Debe de tener 15 caracteres o menos.')
			.required('El nombre es obligatorio'),
		lastName: Yup.string()
			.max(20, 'Debe de tener 20 caracteres o menos.')
			.required('El apellido es obligatorio.'),
		email: Yup.string()
			.email('El Correo no es válido')
			.required('El correo es obligatorio.'),
	})

	const submitForm = (values, { resetForm }) => {
		setTimeout(() => {
			console.log(JSON.stringify(values, null, 2))
			resetForm()
		}, 3000)
	}

	return (
		<section>
			<h2>Formik y Yup</h2>

			<Formik
				initialValues={initialValues}
				validationSchema={schemaForm}
				onSubmit={(values, { resetForm }) => submitForm(values, { resetForm })}
			>
				{({ dirty, isValid }) => (
					<Form autoComplete='off'>
						<div className='form-group'>
							<p className='success'>Reducir usando los componentes.</p>
						</div>

						<div className='form-group'>
							<label htmlFor='firstName'>Nombre</label>
							<Field name='firstName' type='text' />
							<ErrorMessage className='error' name='firstName' component='p' />
						</div>

						<div className='form-group'>
							<label htmlFor='lastName'>Apellido</label>
							<Field name='lastName' type='text' />
							<ErrorMessage className='error' name='lastName' component='p' />
						</div>

						<div className='form-group'>
							<label htmlFor='email'>Correo</label>
							<Field name='email' type='email' />
							<ErrorMessage className='error' name='email' component='p' />
						</div>

						<button type='submit' disabled={!dirty || !isValid}>
							Enviar Datos
						</button>
					</Form>
				)}
			</Formik>
		</section>
	)
}

export default FormikYup
