import { useState } from 'react'
import { useRouter } from 'next/router'
import styles from './Form.module.css'

import ThankYou from '../ThankYou'


export default function Form() {
  const router = useRouter()
  const [form, setForm] = useState({
    Nome: '',
    Email: '',
    //Whatsapp: '48 984270306'
  })

  const [loading, setLoading] = useState(false)
  const save = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const response = await fetch('/api/save', {
        method: 'POST',
        body: JSON.stringify(form)
      })

      setTimeout(() => {
        router.push('/thanks')
      }, 2000)
    } catch (error) {
      console.error(error)
    }
  }

  const onChangeForm = evt => {
    const value = evt.target.value
    const key = evt.target.name
    setForm(old => ({
      ...old,
      [key]: value
    }))
  }

  return (
    <div className={styles.form}>
      {loading && <ThankYou />}
      {!loading && (
        <>
          <div>
            <h1 className='md:text-2xl uppercase text-2xl text-center pt-6 text-white font-semibold tracking-wide'>Inscreva-se aqui</h1>
            <h3 className=' text-center py-4 text-white tracking-wide'> e receba o convite do webinar no seu e-mail </h3>
          </div>
          <hr className='w-3/4 mx-auto opacity-40' />
          <div className='mt-4 md:mt-6 w-11/12 mx-auto'>

            <label htmlFor='name' className='text-white pl-8 mr-4'>nome</label>
            <input className='w-10/12 ml-8 h-10 rounded-sm mt-1 mb-8 px-4 shadow shadow-md' type='text' id='name' name='Nome' placeholder='seu nome' onChange={onChangeForm}
              value={form.Nome} />

            <label htmlFor='email' className='text-white pl-8 mr-4'>email</label>
            <input className='w-10/12 ml-8 h-10 rounded-sm mt-1 mb-4 px-4' type='text' id='email' name='Email' placeholder='seu melhor email' onChange={onChangeForm} value={form.Email} />

            <div className='text-center py-8'>
              <button style={{ backgroundColor: '#372667' }} className='h-12 w-11/12 uppercase md:w-9/12 text-white rounded-md text-sm md:text-md shadow shadow-md cursor-pointer px-4' onClick={save}>Inscreva-se gratuitamente</button>
            </div>
          </div>
        </>)}
    </div>
  )
}