import useSWR from 'swr'
import Image from 'next/image'
const fetcher = (...args) => fetch(...args).then(res => res.json())

import profilePictureSquare from '../public/lyaSquare.jpg'
import logo from '../public/tituloLya.png'
import founder from './../public/home.jpg'

import Section from '../components/Section'
import { useEffect, useState } from 'react'
import { Card } from '../components/Card'
import Middle from '../components/Middle'
import Link from 'next/link'
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
  const [message, setMessage] = useState('')
  const [carrer, setCarrer] = useState(false)
  const [trajetory, setTrajetory] = useState(false)
  const [business, setBusiness] = useState(false)
  const { data, error } = useSWR('/api/get-message', fetcher)

  useEffect(() => {
    setMessage('Fundadora e Administradora da Rede Net Link ')
  }, [])

  const visibleCarrer = () => {
    setCarrer(!carrer)
    setTrajetory(false)
    setBusiness(false)
  }
  const visibleTrajetory = () => {
    setTrajetory(!trajetory)
    setBusiness(false)
    setCarrer(false)
  }

  const visibleBusiness = () => {
    setBusiness(!business)
    setCarrer(false)
    setTrajetory(false)
  }

  return (
    <div className=''>
      {/* message from google spreadsheet 
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
      </div> */}
      <div>


        <div className='md:w-full md:hidden mx-auto'>
          <Image src={logo} alt='Lya Petry' className='' />
        </div>
        <div style={{ backgroundColor: '#576574' }} className='md:block hidden pb-4'>
          <h1 style={{ fontFamily: 'Roboto' }} className='text-yellow-50 pt-12 tracking-widest font-bold text-center text-7xl'>Lya Petry</h1>
          <p className='text-center text-xl opacity-75 my-2 text-yellow-50 '>Empreendedorismo & Neg??cios</p>
        </div>
        <div className='my-6 flex justify-around'>
          <div className='w-1/3 text-center'>
            <button style={{ backgroundColor: '#576574' }} className='px-4 w-10/12 mx-auto py-2 md:text-xl rounded-md text-white shadow shadow-md' onClick={visibleTrajetory}>Hist??ria</button>
          </div>
          <div className='w-1/3 text-center'>
            <button style={{ backgroundColor: '#576574' }} className='px-4 w-10/12 mx-auto py-2 md:text-xl rounded-md text-white shadow shadow-md' onClick={visibleCarrer}>Carreira</button>
          </div>
          <div className='w-1/3 text-center'>
            <button style={{ backgroundColor: '#576574' }} className='px-4 w-10/12 mx-auto py-2 md:text-xl rounded-md text-white shadow shadow-md' onClick={visibleBusiness}>Empresas</button>
          </div>
        </div>
        {
          carrer && (
            <Card
              cardImage='https://live.staticflickr.com/65535/51441202758_2bea40e442.jpg'
              titleCard='Minha Carreira'
              textCard='Durante a gradua????o em Administra????o, pude trabalhar diretamente na ??rea de gerenciamento e dire????o de empresas. Esse foi um passo determinante para manter-me motivada a continuar estudando. Criar e manter neg??cios e ver como pequenas decis??es do dia-a-dia afetam grandemente o curso da empresa, ?? o que me motiva.'
            />
          )
        }
        {
          trajetory && (
            <Card
              cardImage='https://live.staticflickr.com/65535/51443905770_59916b1c09_z.jpg'
              titleCard='Minha Hist??ria'
              textCard='Comecei a empreender antes mesmo de saber o que isso significava. Desde muito crian??a entendi que o empreendedorismo, muito al??m de ser uma forma de se manter, ?? uma excelente forma de ajudar outras pessoas, seja direta ou indiretamente. Atualmente consigo repassar parte da minha experi??ncia para outras empreendedoras.'
            />
          )
        }
        {
          business && (
            <Card
              cardImage='https://live.staticflickr.com/65535/51440916046_12b3e14448.jpg'
              titleCard='Minhas Empresas'
              textCard='Ao longo dos anos fui trabalhando e aperfei??oando um modelo de neg??cio at?? que em 2006 nasceu a Net Link. Hoje j?? s??o quatro unidades, em duas cidades do Sudoeste do Paran??. S??o empresas focadas especialmente em presta????o de servi??os personalizados e solu????es gr??ficas.'
            />
          )
        }

        <div className="mt-4 py-4  md:bg-gray-200 w-full shadow-lg mx-auto md:px-20 md:mx-auto flex flex-col-reverse md:flex-row md:flex  hover:shadow-xl ">
          <div style={{ color: '#222f3e' }} className=' hidden md:block w-1/3 mx-auto my-auto '>
            <Middle
              content='Venho empreendendo com muito sucesso h?? mais de 15 anos. Consegui transformar meu ambiente de trabalho numa segunda casa. Amo o que fa??o! Ver o crescimento da empresa refletir o crescimento das pessoas ao meu redor ?? algo muito gratificante.'
            />
          </div>
          <div className='relative transform hover:scale-105 md:my-6 transition duration-500 mx-auto w-3/5 items-right md:w-1/4'>
            <Image src={profilePictureSquare} className='rounded-xl' />
            <p className='text-center' style={{ fontFamily: 'Roboto', color: '#222f3e' }}>{message}</p>
          </div>
        </div>

      </div>
      <Section
        title='Minha Forma????o Acad??mica'
        titleCardOne='Minha Especialidade'
        textCardOne='Especialista em gerenciamento de funcion??rios, de forma a produzir um ambiente de trabalho agrad??vel e lucrativo para todos'
        titleCardTwo='Minha Forma????o'
        textCardTwo='Sou formada em Administra????o de Empresas - ??nfase em Marketing - Centro Universit??rio Vale do Igua??u - Uni??o da Vit??ria - PR'
        titleCardThree='Meu Mestrado'
        textCardThree='Mestrado Internacional em Administra????o e Dire????o de Empresas - Universidad Europea del Atlantico - Espanha'
        founder={founder}
        cardImage1="https://live.staticflickr.com/65535/51431756640_c5936ab94b_z.jpg"
        cardImage2="https://live.staticflickr.com/65535/51431022258_dfb46e15c3_z.jpg"
        cardImage3="https://live.staticflickr.com/65535/51431020438_f142d8efde_z.jpg"
        tag1='#especialidade'
        tag2='#gradua????o'
        tag3='#mestrado'
      />
      <footer style={{ backgroundColor: 'white' }} className="md:text-center shadow shadow-md text-justify px-4 py-6 w-10/12 md:w-full mx-auto md:mt-0 my-8 md:px-16 md:py-6 bg-gray-600 md:bg-gray-700 ">
        <div className='block md:hidden'>
          <Middle
            contentSmall='Acredito que as boas ideias est??o por toda a parte e s??o mais facilmente encontradas quando a gente permanece em movimento. Por isso, acredito que as viagens, que tanto amo e fazem parte da minha vida, s??o fundamentais para a inova????o constante e cria????o de novos produtos e servi??os.'
            contentSmall2='Venho empreendendo com muito sucesso h?? mais de 15 anos. Consegui transformar meu ambiente de trabalho numa segunda casa. Amo o que fa??o! Ver o crescimento da empresa refletir o crescimento das pessoas ao meu redor ?? algo muito gratificante.'
          />
        </div>
        <div className='hidden md:block'>
          <Middle
            content='Acredito que as boas ideias est??o por toda a parte e s??o mais facilmente encontradas quando a gente permanece em movimento. Por isso, acredito que as viagens, que tanto amo e fazem parte da minha vida, s??o fundamentais para a inova????o constante e cria????o de novos produtos e servi??os.'
          />
        </div>
      </footer>

      <Section
        title='Minha Forma????o Profissional'
        titleCardOne='Vis??o'
        textCardOne='Contribuir, junto com meus colaboradores, para formar empresas s??lidas e aut??nomas, onde o ambiente de trabalho seja satisfat??rio para todos.'
        titleCardTwo='Miss??o'
        textCardTwo='Construir empresas e neg??cios onde colaboradores e clientes sintam satisfa????o em fazerem parte do dia-a-dia do neg??cio. '
        titleCardThree='Valores'
        textCardThree='Comunica????o aberta e honesta com clientes e colaboradores, a fim de fomentar um ambiente sadio e produtivo.'
        copyrightFooter='O conte??do deste site ?? pessoal e protegido por direitos autorais - 2021'
        cardImage1="https://live.staticflickr.com/65535/51442955751_a982129c74_z.jpg"
        cardImage2="https://live.staticflickr.com/65535/51444008070_59ab69b6b4_z.jpg"
        cardImage3="https://live.staticflickr.com/65535/51430836756_c2af262086_z.jpg"
        tag1='#vis??o'
        tag2='#miss??o'
        tag3='#valores'
      />
      {/* Foto Lya =>  https://live.staticflickr.com/65535/51442996991_20390b020d_z.jpg  */}
      <footer className="md:text-center text-justify px-4 pb-2 pt-8 w-full mx-auto md:mt-0 mt-4 md:px-16 md:py-6 bg-gray-700 text-xl">
        <p className="md:mt-0 py-4 text-center text-white"><span className="text-sm text-gray-200">O conte??do deste site ?? pessoal e protegido por direitos autorais - 2021</span></p>
        <Link href='http://www.instagram.com/lyapetry' passHref={true}>
          <a>
            <p className='text-sm text-center text-gray-200 pb-4'>@lyapetry</p>
          </a>
        </Link>
      </footer>
    </div>
  )
}