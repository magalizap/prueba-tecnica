import { requestInput } from "./api/auth"
import {useForm} from 'react-hook-form'


const App = () => {
  const {register, handleSubmit} = useForm()


  return (
    <form onSubmit={handleSubmit(async(values) => {
      const res = await  requestInput(values)
      console.log(res);

    })}>
      <input type="text" {...register('value', {required:true})}/>
      <button type="submit">submit</button>
    </form>
  )
}

export default App