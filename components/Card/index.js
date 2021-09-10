export function Card({ titleCard, cardImage, textCard }) {
  return (
    <div className="md:mt-16 mt-4 py-4 px-4 w-10/12  md:w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform md:hover:scale-110 transition duration-500 mx-auto md:mx-0">
      <div className="w-sm">
        <img className="md:w-64" src={cardImage} alt="" />
        <div className="mt-4 text-gray-600 text-center">
          <h1 className="text-xl font-bold">{titleCard}</h1>
          <p style={{ fontFamily: 'Roboto', color: '#222f3e' }} className="mt-4 text-gray-600 text-justify">{textCard}</p>
        </div>
      </div>
    </div>
  )
}