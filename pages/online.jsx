import Head from 'next/head'
import styles from '../styles/Consultoria.module.css'
import Link from 'next/link'
import Image from 'next/image'

import lyaGreen from '../public/lyaGreen.jpg'
import liberty from '../public/liberdade.jpg'
import growth from '../public/crescimento.jpg'
import autonomy from '../public/autonomia.jpg'
import consultoria from '../public/newconsultoria.png'
import calendar from '../public/newcalendario.jpg'
import whatsapp from '../public/newwhatsapp.jpg'
import equipe from '../public/equipe.jpg'
import dia from '../public/dia.jpg'
import people from '../public/people.jpg'
import newPrice from '../public/price.png'


const ConsultoriaOnline = () => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:ital,wght@1,300&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" />
      </Head>
      <div style={{ backgroundColor: '#372667' }} className='text-xl py-4 md:py-8 mb-4 md:mb-6'>
        <h1 className={styles.title}>Lya Petry</h1>
        <h2 className={styles.subtitle}>Consultoria Empresarial Online</h2>
      </div>

      <div className='md:w-11/12 mx-auto h-screen' style={{ backgroundColor: '#372667' }}>
        <div className='h-auto bg-gray-300 pb-12'>
          <h1 className='md:text-4xl text-2xl text-gray-700 text-center pt-12'>Gestão Prática de Colaboradores</h1>
          <h3 className='md:text-2xl text-xl text-gray-700 text-center pt-2'>Transformando custos em lucros</h3>
          <h2 className='md:text-4xl text-xl text-gray-700 text-center py-6 md:pt-12'>Últimas vagas do mês</h2>
          <Link href='https://pay.kiwify.com.br/PzBUgHv' >
            <div className='py-4 px-8 bg-indigo-800 cursor-pointer w-3/5 md:w-1/4 mx-auto  md:my-10 text-center text-white hover:text-gray-700 rounded-md hover:bg-indigo-200 shadow shadow-md'>
              <a target='_blank' className='uppercase font-semibold  md:text-2xl'>Quero participar</a>
            </div>
          </Link>
        </div>
        <div className='h-auto bg-gray-700'>
          <h1 className='md:text-4xl text-2xl text-gray-100 text-center py-8 md:pt-12'>Quem é Lya Petry</h1>
          <div className='md:flex flex md:flex-row flex-col-reverse'>
            <div>
              <p className='text-gray-100 md:py-10 text-xl md:text-2xl tracking-wide my-4 text-justify px-6 md:px-12 pb-4 md:leading-10'> Lya Petry é empresária e empreendedora de sucesso há 15 anos. Sua especialidade é ajudar pequenas empreendedoras a terem mais liberdade e satisfação em seus negócios, por transformar seus funcionários, tornando-os muito mais engajados, produtivos e lucrativos. Seu maior objetivo é transmitir de forma simples e profunda a mentalidade capaz de mudar ambientes de negócios e tornar o ato de empreender em um ato de crescer, pessoal e profissionalmente.
              </p>
            </div>
            <div className='w-11/12 mx-auto md:py-8 md:mr-4'>
              <Image src={lyaGreen} />
            </div>
          </div>
        </div>

        <div className='h-auto bg-gray-400 pb-4'>
          <h1 className='md:text-4xl text-2xl text-gray-700 text-center py-6 md:pt-12'>Alguns conteúdos abordados</h1>
          <div className='md:flex'>
            <div className='md:w-1/3 md:flex-col'>
              <div className='w-10/12 mx-auto mt-6 md:mt-12'>
                <Image src={dia} />
              </div>
              <p className='text-gray-600 text-center md:pb-2 md:py-4 text-xl tracking-wide my-4 text-justify px-12'><strong>Dia-a-dia na empresa.</strong>&nbsp;</p>
              <p className='mt-2 ml-6 md:ml-12 text-gray-600 tracking-wide text-xl'><i className='bi bi-check-all'></i>&nbsp;Como entrevistar para seleção</p>
              <p className='mt-2 ml-6 md:ml-12 text-gray-600 tracking-wide text-xl'><i className='bi bi-check-all'></i>&nbsp;Como desligar o colaborador</p>
              <p className='mt-2 ml-6 md:ml-12 text-gray-600 tracking-wide text-xl'><i className='bi bi-check-all'></i>&nbsp; Respeito à hierarquia</p>
              <p className='mt-2 ml-6 md:ml-12 text-gray-600 tracking-wide text-xl'><i className='bi bi-check-all'></i>&nbsp; Vínculos/Limites</p>
            </div>
            <div className='md:w-1/3 md:flex-col'>
              <div className='w-10/12 mx-auto mt-12'>
                <Image src={equipe} />
              </div>
              <p className='text-gray-600 md:pb-2 md:py-4 text-xl tracking-wide my-4 text-justify px-12'><strong>Dinheiro/Lucratividade.</strong> </p>
              <p className='mt-2 ml-6 md:ml-12 text-gray-600 tracking-wide text-xl'><i className='bi bi-check-all'></i>&nbsp;Como aumentar a lucratividade do colaborador</p>
              <p className='mt-2 ml-6 md:ml-12 text-gray-600 tracking-wide text-xl'><i className='bi bi-check-all'></i>&nbsp;O dia do pagamento</p>
              <p className='mt-2 ml-6 md:ml-12 text-gray-600 tracking-wide text-xl'><i className='bi bi-check-all'></i>&nbsp; Desenvolvendo a proatividade do grupo</p>
            </div>
            <div className='md:w-1/3 md:flex-col'>
              <div className='w-10/12 mx-auto mt-12'>
                <Image src={people} />
              </div>
              <p className='text-gray-600 md:pb-2 md:py-4 text-xl tracking-wide my-4 text-justify px-12'><strong>Equipe/Comunicação.</strong></p>
              <p className='mt-2 ml-6 md:ml-12 text-gray-600 tracking-wide text-xl'><i className='bi bi-check-all'></i>&nbsp;Resolução de conflitos</p>
              <p className='mt-2 ml-6 md:ml-12 text-gray-600 tracking-wide text-xl'><i className='bi bi-check-all'></i>&nbsp;Enfrentando conversas difíceis</p>
              <p className='mt-2 ml-6 md:ml-12 text-gray-600 tracking-wide text-xl'><i className='bi bi-check-all'></i>&nbsp; Como delegar tarefas</p>
              <p className='mt-2 ml-6 md:ml-12 text-gray-600 tracking-wide text-xl'><i className='bi bi-check-all'></i>&nbsp; Comunicação efetiva</p>
            </div>
          </div>
        </div>
        <div className={styles.video}>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/wdjfst1OAhg?controls=0" title="Os pilares da Consultoria" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>

        <div className='h-auto bg-gray-300 pb-4'>
          <h1 className='md:text-4xl text-2xl text-gray-700 text-center py-6 md:pt-12'>Os pilares dessa Consultoria</h1>
          <div className='md:flex'>
            <div className='md:w-1/3 md:flex-col'>
              <div className='w-10/12 mx-auto mt-6 md:mt-12'>
                <Image src={liberty} />
              </div>
              <p className='text-gray-600 md:pb-10 md:py-4 text-xl tracking-wide my-4 text-justify px-12'><strong>Liberdade.</strong>&nbsp;Montar e manter uma equipe produtiva e lucrativa vai te dar liberdade e o tempo necessário para fazer o que você faz de melhor: empreender e inovar em seu negócio.
              </p>
            </div>
            <div className='md:w-1/3 md:flex-col'>
              <div className='w-10/12 mx-auto mt-12'>
                <Image src={growth} />
              </div>
              <p className='text-gray-600 md:pb-10 md:py-4 text-xl tracking-wide my-4 text-justify px-12'><strong>Autonomia.</strong>&nbsp;Trabalhar a mentalidade dos seus colaboradores creditando a eles a importância que têm para a empresa fará com que sejam mais autônomos e proativos e lucrativos.
              </p>
            </div>
            <div className='md:w-1/3 md:flex-col'>
              <div className='w-10/12 mx-auto mt-12'>
                <Image src={autonomy} />
              </div>
              <p className='text-gray-600 md:pb-10 md:py-4 text-xl tracking-wide my-4 text-justify px-12'><strong>Crescimento.</strong>&nbsp;Deixar seu crescimento pessoal e profissional refletir nos seus colaboradores, fará com que a equipe toda seja mais produtiva e satisfeita com as funções que exercem.
              </p>
            </div>
          </div>
        </div>
        <div className='h-auto bg-gray-700 pb-4'>
          <h1 className='md:text-4xl text-2xl text-gray-200 text-center py-6 md:pt-12'>Como funciona a Consultoria</h1>
          <div className='flex-col md:flex-row md:flex'>
            <div className='md:w-1/3 md:flex-col'>
              <div className='w-10/12 mx-auto mt-6 md:mt-12'>
                <Image src={consultoria} />
              </div>
              <p className='text-gray-200 md:py-10 text-xl md:text-2xl tracking-wide my-4 text-justify px-6 md:px-12'> A Consultoria é individual e tem duração de aproximadamente 60 a 90 minutos. Serão tratados temas pertinentes aos desafios práticos na sua empresa na área de gestão de pessoal. As sessões serão online, com horário previamente marcado. Cada sessão dá direito a um retorno para avaliação do que foi implementado.
              </p>
            </div>
            <div className='md:w-1/3 md:flex-col'>
              <div className='w-10/12 mx-auto mt-12'>
                <Image src={calendar} />
              </div>
              <p className='text-gray-200 md:py-10 text-xl md:text-2xl tracking-wide my-4 text-justify px-6 md:px-12 md:leading-9'> A duração total da Consultoria será de 30 dias. Após cerca de 20 dias da primeira sessão, haverá uma nova sessão, a fim de avaliar o que foi implementado e fazer os ajustes necessários. Se necessário, os retornos seguintes serão via email.
              </p>
            </div>
            <div className='md:w-1/3 md:flex-col'>
              <div className='w-10/12 mx-auto mt-12'>
                <Image src={whatsapp} />
              </div>
              <p className='text-gray-200 md:py-10 text-xl md:text-2xl tracking-wide my-4 text-justify px-6 md:px-12 md:leading-9'>No período da Consultoria, questões pontuais poderão ser tratadas diretamente com a especialista, via whatsapp. Haverá suporte e contato para sanar dúvidas e situações pontuais que porventura surjam durante o período da Consultoria.
              </p>
            </div>
          </div>
        </div>
        <div className='h-auto mx-auto w-full bg-gray-600 py-12'>
          <h2 className='text-gray-100 text-center text-2xl md:text-4xl'>Preço por tempo limitado</h2>
          <div className='h-auto mx-auto w-3/5 md:w-1/3 py-6 md:py-12'>
            <Image src={newPrice} alt='preço' />
          </div>
        </div>
        <div className='h-auto bg-gray-300 pb-12'>
          <h2 className='md:text-4xl text-2xl font-semibold text-gray-700 text-center pt-12'>Consultoria Online</h2>
          <h1 className='md:text-4xl text-2xl font-semibold text-gray-700 text-center md:pt-12'>Gestão Prática de Colaboradores</h1>
          <h3 className='md:text-2xl text-xl text-gray-700 text-center pt-2'>Transformando custos em lucros</h3>
          <h2 className='md:text-4xl text-xl text-gray-700 text-center py-6 md:pt-12'>Últimas vagas</h2>
          <Link href='https://pay.kiwify.com.br/PzBUgHv' >
            <div className='py-4 px-8 bg-indigo-800 cursor-pointer w-3/5 md:w-1/4 mx-auto  md:my-10 text-center text-white hover:text-gray-700 rounded-md hover:bg-indigo-200 shadow shadow-md'>
              <a target='_blank' className='uppercase font-semibold  md:text-2xl'>Quero participar</a>
            </div>
          </Link>
        </div>
        <div style={{ backgroundColor: '#372667' }} className='h-24'>
          <p className='text-center text-white pt-4'>2021 - Todos os direitos reservados</p>
          <p className='text-center text-white mt-6'>Lya Petry</p>
        </div>
      </div>
    </>
  )
}

export default ConsultoriaOnline