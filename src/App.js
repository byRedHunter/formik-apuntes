import FormBase from './components/FormBase'
import FormBaseReduce from './components/FormBaseReduce'
import FormikYup from './components/FormikYup'
import FormWithHook from './components/FormWithHook'
import FormHookYup from './components/FromHookYup'
import InputComponents from './components/InputComponents'

function App() {
	return (
		<main>
			<InputComponents />
			<FormikYup />
			<FormHookYup />
			<FormWithHook />
			<FormBaseReduce />
			<FormBase />
		</main>
	)
}

export default App
