import useSWR from 'swr'
import Image from 'next/image'
const fetcher = (...args) => fetch(...args).then(res => res.json())
import profilePictureMain from '../public/me2.png'
import profilePictureSquare from '../public/lyaSquare.jpg'
import logo from '../public/logoLya.jpg'
import founder from './../public/home.jpg'



import instagramIcon from '../public/instagram.png'
import Link from 'next/link'
import Section from '../components/Section'
<style jsx global>{`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: Roboto;
  }

  * {
    box-sizing: border-box;
  }
`}</style>

export default function Index() {

  const { data, error } = useSWR('/api/get-message', fetcher)


  return (
    <div className=''>
      <div>
        {!data && <p>Carregando...</p>}
        {!error && data && data.showMessage &&
          <>
            <div className='md:container md:w-10/12  bg-purple-800 mx-auto pt-6 pb-4'>
              <h1 className='text-center md:uppercase text-xl md:text-3xl font-semibold text-white'>{data.title}</h1>
            </div>
            <div className='w-10/12 md:w-9/12 mt-4 md:pt-6 mx-auto text-justify'>
              <h2 className='pb-4 md:pb-0 md:text-xl'>{data.content}</h2>
            </div>
          </>
        }
      </div>
      <div>

        <div className='md:w-full bg-white mx-auto '>
          <div className=' py-4 bg-white'>
            <Image src={logo} className='' />
          </div>
        </div>
        <div className="mt-4 py-4  md:bg-gray-200 w-full  shadow-lg mx-auto md:mx-auto flex flex-col-reverse md:flex-row md:flex  hover:shadow-xl ">
          <div className='h-4/5 md:w-1/2 md:px-12 rounded-md shadow shadow-lg my-auto w-10/12 mx-auto md:mx-12 bg-gray-100 md:bg-gray-600'>
            <h3 className='md:text-2xl text-justify py-4 mt-4 md:mt-5 mx-5 md:text-white font-semibold text-gray-600'>Ajudo pessoas que acreditam no potencial de seus negócios a alavancarem seu crescimento e o crescimento de suas empresas por meio de uma abordagem comprovadamente eficaz de administrar os funcionários no dia-a-dia da empresa.</h3>
            <h3 className='md:text-2xl text-justify mt-4 md:mt-6 pb-4 mx-5 font-semibold text-gray-600 md:text-white'>Acredito que gerenciar bem os colaboradores é determinante para o sucesso ou fracasso da empresa.</h3>
          </div>
          <div className='relative  transform hover:scale-105 transition duration-500 w-10/12 mx-auto md:w-1/3'>
            <Image src={profilePictureSquare} className='rounded-xl' />
          </div>
        </div>

        {/*<div className="container md:px-4 md:pt-20 mx-auto my-5">
          <div className="relative rounded-lg flex flex-col md:flex-row items-center md:shadow-xl md:h-96 mx-2">

           <div className="z-0 order-1 md:order-2 relative w-full md:w-2/5 h-80 md:h-full  overflow-hidden rounded-lg md:rounded-none md:rounded-r-lg">
              <div>
                <Image className="absolute inset-0 w-full h-full object-fill object-center bg-blue-300 bg-opacity-30 bg-cover bg-bottom" src={profilePictureMain} alt='Lya' style={{ backgroundBlendMode: 'multiply' }} />
              </div>
              <div className="md:hidden absolute inset-0 h-full p-6 pb-6 flex flex-col-reverse justify-start items-start bg-gradient-to-b from-transparent via-transparent to-gray-900">
                <h3 className="w-full font-bold text-2xl text-white leading-tight mb-4">Lya Petry</h3>
                <h4 className="w-full text-xl text-gray-100 leading-tight"></h4>
              </div>
              <svg className="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-white -ml-12" viewBox="0 0 100 100" preserveAspectRatio="none">
                <polygon points="50,0 100,0 50,100 0,100" />
              </svg>
            </div>

            <div className="z-10 order-2 md:order-1 w-full h-full md:w-3/5 flex items-center -mt-6 md:mt-0">
              <div className="p-8 md:pr-18 md:pl-14 md:py-12 mx-2 md:mx-0 h-full bg-white rounded-lg md:rounded-none md:rounded-l-lg shadow-xl md:shadow-none">
                <h4 className="hidden md:block text-xl text-gray-400"></h4>
                <h3 className="hidden md:block font-bold text-2xl text-gray-700 md:mb-6">LYA PETRY</h3>
                <p className="text-gray-600 md:text-xl mb-4 text-justify">Ajudo pessoas que acreditam no potencial de seus negócios a alavancarem seu crescimento e o crescimento das suas empresas por meio de uma abordagem comprovadamente eficaz de administrar os funcionários no dia-a-dia da empresa.</p>

                <p className="text-gray-600 md:text-xl mb-4 text-justify">Acredito que gerenciar bem os colaboradores é determinante para o sucesso ou fracasso da sua empresa.</p>

                <p className="text-gray-600 md:text-xl mb-2 text-justify">Empreendo com sucesso há mais de 15 anos, e aprendi a transformar custos em lucro.</p>

               <div className="flex md:flex-row flex-col mt-10 md:mt-10 justify-between mx-2 md:w-full bg-red-200">

                  <div className="md:hidden flex flex-col bg-blue-100 md:mr-2 h-64 rounded p-4 items-center shadow-lg border-r-8 border-purple-600 mb-4 md:mb-auto">
                    <h2 className="font-semibold">Consultoria Empresarial</h2>
                    <p className="p-4  text-gray-500 text-justify md:font-semibold">
                      Voltada para tornar a sua equipe mais engajada, produtiva e lucrativa. Agende seu horário.
                    </p>
                    <div className="flex  justify-between ">
                      <Link href='/consultoria'>
                        <div className='mt-3 bg-purple-600 text-white shadow shadow-md px-6 py-2 rounded-md text-xl'>
                          <a>Consultoria online</a>
                        </div>
                      </Link>
                    </div>
                  </div>

                  <div className="flex flex-col bg-blue-100 md:mr-2 h-64 rounded p-4 items-center shadow-lg border-r-8 border-purple-600 mb-4 md:mb-auto">
                    <h2 className="font-semibold">Minha Especialidade</h2>
                    <p className="p-4  text-gray-500 text-justify md:font-semibold">
                      Focada em potencializar a lucratividade de pequenas empresas por meio de gerenciamento ativo dos funcionários.
                    </p>
                    <div className="flex  justify-between ">
                      <div className="pill bg-gray-400 rounded-full text-white px-4 text-xs mr-2  py-1" >
                        #Missão
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col bg-blue-100 md:mr-2 h-64 rounded p-4 items-center md:w-full   shadow-lg border-r-8 border-purple-600 mb-4 md:mb-auto">
                    <h2 className="font-semibold">Minha Graduação</h2>
                    <p className="p-4 md:px-2 text-gray-500 text-justify md:font-semibold tracking-wide">
                      Administração de Empresas - Ênfase em Marketing - Centro Universitário Vale do Iguaçu - União da Vitória - PR
                    </p>
                    <div className="flex  justify-between ">
                      <div className="pill bg-gray-400 rounded-full px-4 text-xs mr-2 text-white py-1" >
                        #ADM
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col bg-blue-100 md:mr-1 h-64 rounded p-4 items-center shadow-lg border-r-8 border-purple-600 mb-4 md:mb-auto">
                    <h2 className="font-semibold">Meu Mestrado</h2>
                    <p className="p-4  text-gray-500 text-justify md:font-semibold tracking-wide">
                      Mestrado Internacional em Administração e Direção de Empresas - Universidad Europea del Atlantico - Santander - Espanha
                    </p>
                    <div className="flex  justify-between pt-6">
                      <div className="pill bg-gray-400 rounded-full px-4 text-xs mr-2 text-white py-1" >
                        #Mestre
                      </div>
                    </div>
                  </div>
                </div> 
              </div>
          </div>
        </div>*/}
        {/* <div className='md:w-full mt-6'>
            <div className='mt-4 md:w-1/4 md:float-right'>
              <p className='text-xl md:text-2xl text-center md:text-left text-gray-600 font-semibold'>Agende a sua agora mesmo</p>
              <p className='text-xl text-center md:text-left text-gray-600 py-2'>Vagas limitadas!</p>
              <div className='flex md:flex md:flex-row '>
                <Link href='/consultoria'>
                  <div className='mt-3 mx-auto  bg-purple-600 text-white shadow shadow-md px-10 cursor-pointer tracking-wide py-2 rounded-md text-2xl'>
                    <a>Consultoria online</a>
                  </div>
                </Link>
              </div>
              <div className='flex md:flex md:flex-row mt-8 '>
                <div className='md:w-7 w-7 md:ml-0 ml-12 opacity-80'>
                  <Image src={instagramIcon} />
                </div>
                <div> <span className='text-gray-600 md:text-xl ml-1' > /lyapetry</span></div>
              </div>
            </div>
          </div> 
        </div>*/}
      </div>
      <Section
        title='Minha Formação Acadêmica'
        titleCardOne='Minha Especialidade'
        textCardOne='Especialista em gerenciamento de funcionários, de forma a produzir um ambiente de trabalho agradável e lucrativo para todos'
        titleCardTwo='Minha Formação'
        textCardTwo='Sou formada em Administração de Empresas - Ênfase em Marketing - Centro Universitário Vale do Iguaçu - União da Vitória - PR'
        titleCardThree='Meu Mestrado'
        textCardThree='Em 2020, terminei meu Mestrado Internacional em Administração e Direção de Empresas - Universidad Europea del Atlantico - Espanha'

        founder={founder}
        cardImage1="https://live.staticflickr.com/65535/51431756640_c5936ab94b_z.jpg"
        cardImage2="https://live.staticflickr.com/65535/51431022258_dfb46e15c3_z.jpg"
        cardImage3="https://live.staticflickr.com/65535/51431020438_f142d8efde_z.jpg"
        tag1='#especialidade'
        tag2='#graduação'
        tag3='#mestrado'
      />
      <footer className="md:text-center text-justify px-4 pb-2 pt-8 w-10/12 md:w-full mx-auto md:mt-0 mt-4 md:px-16 md:py-6 bg-gray-600 md:bg-gray-700 text-xl">
        <p className="text-white">Venho empreendendo com muito sucesso há mais de 15 anos. Especializei-me em ajudar pequenas empreendedoras a terem mais liberdade e satisfação em seus negócios, por transformar seus funcionários, tornando-os muito mais engajados, produtivos e lucrativos. Seu maior objetivo é transmitir de forma simples e profunda a mentalidade capaz de mudar ambientes de negócios e tornar o ato de empreender em um ato de crescer, pessoal e profissionalmente.</p>
      </footer>
      <Section
        title='Minha Formação Profissional'
        titleCardOne='Visão'
        textCardOne='Ajudar a formar empresas sólidas e autônomas, agregando conhecimento e liberdade para as empreendedoras'
        titleCardTwo='Missão'
        textCardTwo='Potencializar a lucratividade de pequenas empresas por meio de gerenciamento ativo dos funcionários'
        titleCardThree='Valores'
        textCardThree='Comunicação aberta e honesta com clientes e colaboradores, a fim de fomentar um ambiente sadio e produtivo.'
        copyrightFooter='O conteúdo deste site é pessoal e protegido por direitos autorais - 2021'
        cardImage1="https://live.staticflickr.com/65535/51429852992_ddd39e307a_z.jpg"
        cardImage2="https://live.staticflickr.com/65535/51431354839_0a98188d61_z.jpg"
        cardImage3="https://live.staticflickr.com/65535/51430836756_c2af262086_z.jpg"
        tag1='#visão'
        tag2='#missão'
        tag3='#valores'
      />
      <footer className="md:text-center text-justify px-4 pb-2 pt-8 w-full mx-auto md:mt-0 mt-4 md:px-16 md:py-6 bg-gray-700 text-xl">
        <p className="md:mt-0 py-4 text-center text-white"><span className="text-sm text-gray-200">O conteúdo deste site é pessoal e protegido por direitos autorais - 2021</span></p>
      </footer>
    </div>
  )
}