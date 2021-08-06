import styles from './ThankYou.module.css'

export default function ThankYou() {
  return (
    <div className={styles.form}>
      <div className='py-6'>
        <h1 className='md:text-2xl uppercase text-2xl text-center pt-6 text-white font-semibold tracking-wide'>Excelente Escolha!</h1>
        <h3 className=' text-center py-4 text-white tracking-wide'> Seu interesse será recompensado</h3>
      </div>
      <hr className='w-3/4 mx-auto opacity-40' />
      <div className='mt-4 md:mt-6 w-11/12 mx-auto'>

        <p className=' text-center py-4 text-white tracking-wide'>Estamos processando seu cadastro.</p>
        <p className=' text-center py-4 text-white tracking-wide'>Por favor, aguarde.</p>

        <div className='text-center'>
          <small className='opacity-60 py-4 text-white tracking-wide'>transformando custos em lucro</small>
        </div>


        <div className='text-center text-white py-12'>
          <p className='text-center' >Lya Petry</p>
        </div>
      </div>
    </div>
  )
}