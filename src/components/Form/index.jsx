import styles from './Form.module.css'

export default function Form() {
  return (
    <div className={styles.form}>
      <div>
        <h1 className='md:text-2xl text-center pt-6 text-white font-semibold tracking-wide'>Inscreva-se aqui</h1>
        <h3 className=' text-center py-4 text-white tracking-wide'> e receba o convite do webinar no seu e-mail </h3>
      </div>
      <div className='mt-12 w-11/12 mx-auto'>
        <form>
          <label htmlFor='name' className='text-white pl-8 mr-4'>nome</label>
          <input className='w-10/12 ml-8 h-10 rounded-sm mt-2 mb-8 px-4 shadow shadow-md' type='text' id='name' name='name' placeholder='seu nome' />

          <label htmlFor='email' className='text-white pl-8 mr-4'>email</label>
          <input className='w-10/12 ml-8 h-10 rounded-sm mt-2 mb-4 px-4' type='email' id='email' name='email' placeholder='seu melhor email' />
          <div className='text-center py-8'>
            <input style={{ backgroundColor: '#372667' }} className='h-12 w-7/12 text-white rounded-md shadow shadow-md cursor-pointer' value='Inscreva-se gratuitamente' type='submit' />
          </div>
        </form>
      </div>
    </div>
  )
}