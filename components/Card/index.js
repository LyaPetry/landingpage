export function Card({ titleCard, cardImage, textCard }) {
  return (
    <div className="md:mt-16 mt-4 md:py-12 py-4 px-4 w-10/12 md:w-3/5 bg-white rounded-xl shadow-lg hover:shadow-xl transform md:hover:scale-110 transition duration-500 mx-auto">
      <div className="w-sm md:flex">
        <img className="md:w-1/2" src={cardImage} alt=" lyas" />
        <div className="mt-4 text-gray-600 text-center">
          <h1 className="text-xl md:text-2xl font-bold">{titleCard}</h1>
          <p style={{ fontFamily: 'Roboto', color: '#222f3e' }} className="text-normal md:text-xl mt-4 md:leading-relaxed  text-gray-600 mx-0 md:mx-4 text-justify">{textCard}</p>
        </div>
      </div>
    </div>
  )
}