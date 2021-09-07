
import styles from './Profile.module.css'

export default function Profile() {
  return (
    <div className='w-11/12 mx-auto'>
      <div>
        <h1 className='text-2xl mt-4 md:mt-1 md:mt-8 md:mb-6 text-center md:text-2xl font-semibold md:font-bold'>Lya Petry</h1>
        <div className='flex py-1 md:py-2'>
          <div style={{ backgroundColor: '#372667' }} className='hidden md:flex  ml-2 my-auto rounded-full h-2 md:h-3 w-2 md:w-3 items-center justify-center'>
          </div>
          <div className='ml-2 my-2'>
            <p className={styles.list}>Empresária há mais de 15 anos</p>
          </div>
        </div>
        <div className='flex py-1 md:py-2'>
          <div style={{ backgroundColor: '#372667' }} className='hidden md:flex ml-2 my-auto rounded-full h-2 md:h-3 w-2 md:w-3 items-center justify-center'>
          </div>
          <div className='ml-2 my-1'>
            <p className={styles.list}>Proprietária e administradora de 4 empresas</p>
          </div>
        </div>
        <div className='flex py-1 md:py-2'>
          <div style={{ backgroundColor: '#372667' }} className='hidden md:flex ml-2 my-auto rounded-full h-2 md:h-3 w-3 md:w-3 items-center justify-center'>
          </div>
          <div className='ml-2 my-1'>
            <p className={styles.list}>Graduada em Administração de Empresas</p>
          </div>
        </div>
        <div className='flex py-1 md:py-2'>
          <div style={{ backgroundColor: '#372667' }} className='hidden md:flex ml-2 my-auto rounded-full h-2 md:h-3 w-3 md:w-3 items-center justify-center'>
          </div>
          <div className='ml-2 my-1'>
            <p className={styles.list}>Mestre em Administração e Direção de Empresas</p>
          </div>
        </div>
        <div className='md:mt-4 px-6'>
          <p className='italic'>Inscreva-se para assistir a apresentação
            e degustar parte do treinamento que está
            mudando a vida de muitas empresárias</p>
        </div>
      </div>
    </div>
  )
}