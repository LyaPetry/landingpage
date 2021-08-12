import styles from '../styles/Webinar.module.css'
import Link from 'next/link'
export default function Webinar() {
  return (
    <div>
      <div style={{ backgroundColor: '#372667' }} className='text-xl py-4 md:py-8 mb-4 md:mb-6'>
        <h1 className={styles.title}>Gestão prática de Colaboradores</h1>
        <h2 className={styles.subtitle}>Transformando custos em lucros</h2>
      </div>
      <div className={styles.content}>
        <h2 className='text-center text-3xl md:text-5xl md:text-center px-8 pt-6 pb-4 md:pt-14 leading-8'>Obrigado pelo seu contato!</h2>
        <h2 className='text-center block md:hidden text-2xl md:text-4xl md:text-center px-8 py-6 md:py-14 leading-8'>Vamos ao trabalho!</h2>
        <h2 className='text-center hidden md:block text-2xl md:text-4xl md:text-center px-8 py-6 md:py-14 leading-8'>Vamos ao trabalho <strong>transformar custos em lucros</strong>!</h2>
        <h3 className='text-justify text-xl md:text-2xl md:text-center px-8 md:px-36 py-2 md:py-6 leading-8 opacity-80'>Logo logo enviarei um email com mais informações sobre a Consultoria. Aguarde!</h3>
        <p className='text-justify text-md md:text-3xl md:text-center px-8 md:px-48 py-6 md:py-8 leading-8 md:leading-10'>Vou te passar minha experiência em mais 15 anos de liderança e direção de empresas para você aplicar no seu dia-a-dia!</p>
        <p className='py-2 md:text-2xl text-center italic text-gray-600'>Lya Petry</p>
        <p className='text-center py-6 md:text-xl italic md:py-12'>"Capacitar-se é a melhor forma de atingir seus resultados com maestria"</p>
      </div>
      <Link href='/'>
        <div style={{ backgroundColor: '#372667' }} className='bg-red-200 mt-4 w-1/2 md:w-1/4 md:text-2xl rounded-md mx-auto py-2 mb-12 text-center text-white cursor-pointer'>
          <a>Página Principal</a>
        </div>
      </Link>
      <div style={{ backgroundColor: '#372667' }} className='pt-6 md:h-28'>
        <p className='text-center text-white py-4 text-xl'>Lya Petry &nbsp;<span className='text-sm'>2021</span></p>
      </div>
    </div>
  )
}