import styles from '../styles/Consultoria.module.css'
import Head from 'next/head'
import Image from 'next/image'
import Form from '../components/Form'
import profilePictureMain from '../public/videocall.png'
import consultoriaPic from '../public/consultoria.png'
import lyaYellow from '../public/lya.jpg'

export default function Consultoria() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:ital,wght@1,300&display=swap" rel="stylesheet" />
      </Head>
      <div style={{ backgroundColor: '#372667' }} className='text-xl py-4 md:py-8 mb-4 md:mb-6'>
        <h1 className={styles.title}>Lya Petry</h1>
        <h2 className={styles.subtitle}>Consultoria Empresarial Online</h2>
      </div>

      <div className="container md:px-4 md:pt-20 mx-auto my-5">
        <div className="relative rounded-lg flex flex-col md:flex-row items-center md:shadow-xl md:h-96 mx-2">
          <div className="z-0 order-1 md:order-2 relative w-full md:w-2/5 h-80 md:h-full  overflow-hidden rounded-lg md:rounded-none md:rounded-r-lg">
            <div>
              <Image className="absolute inset-0 w-full h-full object-fill object-center bg-blue-300 bg-opacity-30 bg-cover bg-bottom" src={lyaYellow} alt='Lya de Amarelo' style={{ backgroundBlendMode: 'multiply' }} />
            </div>
            <div className="md:hidden absolute inset-0 h-full p-6 pb-6 flex flex-col-reverse justify-start items-start bg-gradient-to-b from-transparent via-transparent to-gray-900">
              <h3 className="w-full font-bold text-2xl text-white leading-tight mb-4">Qual o foco</h3>
              <h4 className="w-full text-xl text-gray-100 leading-tight"></h4>
            </div>
            <svg className="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-white -ml-12" viewBox="0 0 100 100" preserveAspectRatio="none">
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>
          </div>
          <div className="z-10 order-2 md:order-1 w-full h-full md:w-3/5 flex items-center -mt-6 md:mt-0">
            <div className="p-8 md:pr-18 md:pl-14 md:py-12 mx-2 md:mx-0 h-full bg-white rounded-lg md:rounded-none md:rounded-l-lg shadow-xl md:shadow-none">
              <h4 className="hidden md:block text-xl text-gray-400"></h4>
              <h3 className="hidden md:block font-bold text-2xl text-gray-700 md:mb-6">Qual o foco</h3>
              <p className="text-gray-600 md:text-xl mb-4 text-justify">
                Pequenas empresas ou empresas familiares tem seus próprios desafios. Um dos maiores desafios, sem dúvida, é lidar bem com os funcionários, de forma a ter uma equipe engajada, produtiva e muito lucrativa.
              </p>
              <p className="text-gray-600 md:text-xl mb-4 text-justify"> O foco dessa consultoria é ajudar empreendedores que sentem alguma dificuldade em gerenciar bem seus funcionários a se tornarem ainda mais bem sucedidos nesse aspecto.</p>

              <p className="text-gray-600 md:text-xl mb-4 text-justify">Aperfeiçoar o gerenciamento de funcionários nas pequenas empresas, onde o contato proprietário-colaborador muitas vezes é mais próximo e tem seus desafios particulares, é fundamental para o sucesso do negócio.</p>
            </div>
          </div>
        </div>
      </div>
      {/* comentário */}

      <div className="container md:px-4 md:pt-20 mx-auto my-5">
        <div className="relative rounded-lg flex flex-col md:flex-row items-center md:shadow-xl md:h-96 mx-2">
          <div className="z-0 order-1 md:order-2 relative w-full md:w-2/5 h-80 md:h-full  overflow-hidden rounded-lg md:rounded-none md:rounded-l-lg">
            <div>
              <Image className="absolute inset-0 w-full h-full object-fill object-center bg-blue-300 bg-opacity-30 bg-cover bg-bottom" src={consultoriaPic} alt='videoconferência' style={{ backgroundBlendMode: 'multiply' }} />

            </div>
            <div className="md:hidden absolute inset-0 h-full p-6 pb-6 flex flex-col-reverse justify-start items-start bg-gradient-to-b from-transparent via-transparent to-gray-900">
              <h3 className="w-full font-bold text-2xl text-white leading-tight mb-4">Como funciona</h3>
              <h4 className="w-full text-xl text-gray-100 leading-tight"></h4>
            </div>
          </div>
          <div className="z-10 order-2 md:order-2 w-full h-full md:w-3/5 flex items-center -mt-6 md:mt-0">
            <svg className="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-white -ml-12" viewBox="0 0 100 100" preserveAspectRatio="none">
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>
            <div className="p-8 md:pr-18 md:pl-14 md:py-12 mx-2 md:mx-0 h-full bg-white rounded-lg md:rounded-none md:rounded-l-lg shadow-xl md:shadow-none">
              <h4 className="hidden md:block text-xl text-gray-400"></h4>
              <h3 className="hidden md:block font-bold text-2xl text-gray-700 md:mb-6">Como funciona</h3>
              <p className="text-gray-600 md:text-xl mb-4 text-justify">A consultoria é composta de duas sessões de aproximadamente 90 minutos cada, agendadas previamente. São realizadas preferencialmente via aplicativo Zoom ou chamada de vídeo do Whatsapp.</p>
              <p className="text-gray-600 md:text-xl mb-4 text-justify">A fim de potencializar a produtividade e personalizar o trabalho, antes da primeira sessão, você poderá apontar suas as maiores dificuldades e desafios.</p>
              <p className="text-gray-600 md:text-xl mb-4 text-justify">Nosso primeiro contato será por meio do preenchimento dos dados abaixo.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Terceira Seção */}

      <div className="container md:px-4 md:pt-20 mx-auto my-5">
        <div className="relative rounded-lg flex flex-col md:flex-row items-center md:shadow-xl md:h-96 mx-2">
          <div className="z-0 order-1 md:order-2 relative w-full md:w-2/5 h-80 md:h-full  overflow-hidden rounded-lg md:rounded-none md:rounded-r-lg">
            <div>
              <Image className="absolute inset-0 w-full h-full object-fill object-center bg-blue-300 bg-opacity-30 bg-cover bg-bottom" src={profilePictureMain} alt='Lya' style={{ backgroundBlendMode: 'multiply' }} />
            </div>
            <div className="md:hidden absolute inset-0 h-full p-6 pb-6 flex flex-col-reverse justify-start items-start bg-gradient-to-b from-transparent via-transparent to-gray-900">
              <h3 className="w-full font-bold text-2xl text-white leading-tight mb-4">Por que fazer</h3>
              <h4 className="w-full text-xl text-gray-100 leading-tight"></h4>
            </div>
            <svg className="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-white -ml-12" viewBox="0 0 100 100" preserveAspectRatio="none">
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>
          </div>
          <div className="z-10 order-2 md:order-1 w-full h-full md:w-3/5 flex items-center -mt-6 md:mt-0">
            <div className="p-8 md:pr-18 md:pl-14 md:py-12 mx-2 md:mx-0 h-full bg-white rounded-lg md:rounded-none md:rounded-l-lg shadow-xl md:shadow-none">
              <h4 className="hidden md:block text-xl text-gray-400"></h4>
              <h3 className="hidden md:block font-bold text-2xl text-gray-700 md:mb-6">Por que fazer</h3>
              <p className="text-gray-600 md:text-xl mb-4 text-justify">O sucesso ou fracasso de uma empresa, sobretudo as empresas pequenas e/ou familiares, é determinado, em grande parte, pela forma como os funcionários ou colaboradores estão engajados.</p>
              <p className="text-gray-600 md:text-xl mb-4 text-justify">Sabemos que o que acontece na empresa reflete na vida pessoal do proprietário. Uma equipe proativa e comprometida vai te trazer ainda mais liberdade e tempo para fazer o que você faz de melhor, empreender com sucesso. </p>
              <p className="text-gray-600 md:text-xl mb-4 text-justify">Ter funcionários ativos, comprometidos e lucrativos fará com que sua empresa trabalhe em outro patamar. É nisso que eu vou te ajudar nessa consultoria.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='container mx-auto mt-12'>
        <div className='bg-gray-500 text-gray-600 md:text-xl mb-4 text-justify md:w-10/12 mx-auto p-6'>
          <h2 className='md:text-2xl text-white uppercase text-center'>Agendamento das Últimas vagas do mês.</h2>
          <h2 className=' text-white text-center pt-4'>Preencha o formulário abaixo para garantir sua vaga ainda esse mês.</h2>
        </div>
        <div className='md:w-1/2 mx-auto my-10 md:my-16'>
          <Form
            title='Desejo receber mais informações'
            subtitle='deixe seu nome na lista de agendamento'
            textButton='Enviar'
          />
        </div>
      </div>
      <div style={{ backgroundColor: '#372667' }} className='pt-6 md:h-28'>
        <p className='text-center text-white py-4 text-xl'>Lya Petry &nbsp;<span className='text-sm'>2021</span></p>
      </div>
    </>
  )
}