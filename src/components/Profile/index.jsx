import styles from './Profile.module.css'

export default function Profile() {
  return (
    <div>
      <div>
        <h1 className='text-md mt-1 md:mt-8 md:mb-6 text-center md:text-2xl font-semibold md:font-bold'>Lya Petry</h1>
        <div className='flex py-4'>
          <div style={{ backgroundColor: '#372667' }} className='flex ml-2 my-auto rounded-full h-2 md:h-4 w-3 md:w-4 items-center justify-center'>
          </div>
          <div className='ml-2'>
            <p className={styles.list}>Empresária há mais de 15 anos</p>
          </div>
        </div>
        <div className='flex py-4'>
          <div style={{ backgroundColor: '#372667' }} className='flex ml-2 my-auto rounded-full h-2 md:h-4 w-3 md:w-4 bg-red-600 items-center justify-center'>
          </div>
          <div className='ml-2'>
            <p className={styles.list}>Proprietária e administradora de 4 empresas</p>
          </div>
        </div>
        <div className='flex py-4'>
          <div style={{ backgroundColor: '#372667' }} className='flex ml-2 my-auto rounded-full h-2 md:h-4 w-3 md:w-4 bg-red-600 items-center justify-center'>
          </div>
          <div className='ml-2'>
            <p className={styles.list}>Graduada em Administração de Empresas</p>
          </div>
        </div>
        <div className='flex py-4'>
          <div style={{ backgroundColor: '#372667' }} className='flex ml-2 my-auto rounded-full h-2 md:h-4 w-3 md:w-4 bg-red-600 items-center justify-center'>
          </div>
          <div className='ml-2'>
            <p className={styles.list}>Mestre em Administração e Direção de Empresas</p>
          </div>
        </div>
        <div className='mt-8 px-6'>
          <p className='italic'>Inscreva-se para assistir a apresentação
            e degustar parte do treinamento que está
            mudando a vida de muitas empresárias</p>
        </div>
      </div>
    </div>
  )
}