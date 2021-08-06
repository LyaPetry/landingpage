import useSWR from 'swr'
import Image from 'next/image'
const fetcher = (...args) => fetch(...args).then(res => res.json())
import profilePictureMain from '../public/me2.png'
import facebookIcon from '../public/facebook.png'
import instagramIcon from '../public/instagram.png'

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

        <div className="container md:px-4 md:pt-20 mx-auto my-5">
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

                <p className="text-gray-600 md:text-xl mb-4 text-justify">Acredito que gerenciar bem os empregados é determinante para o sucesso ou fracasso da sua empresa.</p>

                <p className="text-gray-600 md:text-xl mb-2 text-justify">Empreendo com sucesso há mais de 15 anos, e aprendi a transformar custos em lucro.</p>

                <div className="flex md:flex-row flex-col mt-10 md:mt-10 justify-between mx-2 md:w-full ">

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
          </div>
          <div className='md:w-full mt-16'>
            <div className='mt-12 md:w-1/4 md:float-right'>
              <div className='flex md:flex md:flex-row '>
                <div className='md:w-7 w-7 md:ml-0 ml-12 opacity-80'>
                  <Image src={facebookIcon} />
                </div>
                <div> <span className='text-gray-600 md:text-xl ml-1' > /lyapetry</span></div>
              </div>
              <div className='flex md:flex md:flex-row mt-4 '>
                <div className='md:w-7 w-7 md:ml-0 ml-12 opacity-80'>
                  <Image src={instagramIcon} />
                </div>
                <div> <span className='text-gray-600 md:text-xl ml-1' > /lyapetry</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}