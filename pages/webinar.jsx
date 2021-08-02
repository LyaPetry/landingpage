import styles from '../styles/Webinar.module.css'
import Image from 'next/image'
import profilePicture from '../public/me3.png'
import Form from '../components/Form'
import Profile from '../components/Profile'

export default function Webinar() {
  return (
    <div>
      <div style={{ backgroundColor: '#372667' }} className='text-xl py-4 md:py-6 mb-4 md:mb-6'>
        <h1 className={styles.title}>Webinar gratuito</h1>
        <h2 className={styles.subtitle}>Transformando custos em lucros</h2>
      </div>
      <div className={styles.content}>
        <h2 className='text-justify text-xl md:text-2xl md:text-center px-8 py-2 md:py-6 leading-8'>Gerenciar bem os empregados é determinante para o sucesso ou fracasso da sua empresa.</h2>
        <h3 className='text-justify text-xl md:text-2xl md:text-center px-8 md:px-36 py-2 md:py-6 leading-8'>Nessa aula, a especialista Lya Petry, vai apresentar uma forma simples, eficaz e muito poderosa de gerenciar e lidar bem com questões do dia-a-dia da empresa que envolvem funcionários.
        </h3>
        <h3 className='text-justify text-xl md:text-2xl md:text-center px-8 md:px-36 py-2 md:py-6 leading-8'>Aprenda a ter funcionários engajados, satisfeitos com o trabalho que exercem e muito lucrativos para a empresa. </h3>
        <div className='flex flex-col-reverse md:flex-row md:flex mx-4 mt-6'>
          <div className='flex-1'>
            <Profile />
          </div>
          <div className='flex-1'>
            <Form />
          </div>
          <div className='flex-1'>
            <div className=' py-2'>
              <div className='md:ml-16 mx-auto w-9/12'>
                <Image/*  layout='responsive' */ layout='intrinsic' quality='100' src={profilePicture} alt='Lya Petry' />
              </div>
              <div>
                <h2 className='md:block hidden text-justify mx-2 px-1 md:px-2 pt-6 leading-6 italic'>Com mais de 15 anos de experiência no mercado, administrando e sendo proprietária de empresas, descobri que faz muita diferença a forma como tratamos, encaramos e ensinamos nossos funcionários.</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}