import React from 'react'

// import vision from './../../public/chile.jpg'

export default function Section({ title, titleCardOne, textCardOne, titleCardTwo, textCardTwo, titleCardThree, textCardThree, cardImage1, cardImage2, cardImage3, tag1, tag2, tag3 }) {
  return (
    <div>
      <header>
        <div className="bg-gray-100 md:py-14">
          <h1 className="md:mt-8 md:pt-0 pt-4 text-center text-2xl md:text-5xl text-gray-600 font-bold">{title}</h1>
          <div className="md:flex md:justify-center  md:space-x-20 md:px-14">
            <div className="md:mt-16 mt-4 py-4 px-4 w-10/12  md:w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform md:hover:scale-110 transition duration-500 mx-auto md:mx-0">
              <div className="w-sm">
                <img className="md:w-64" src={cardImage1} alt="" />
                <div className="mt-4 text-gray-600 text-center">
                  <h1 className="text-xl font-bold">{titleCardOne}</h1>
                  <p style={{ fontFamily: 'Roboto', color: '#222f3e' }} className="mt-4 mx-2 text-gray-600 text-justify">{textCardOne}</p>
                  <div className="mt-8 mb-4 py-2 px-14 rounded-full bg-gray-600 text-white tracking-widest hover:bg-gray-500 transition duration-200">{tag1}</div>
                </div>
              </div>
            </div>
            <div className="mt-16 py-4 px-4  w-10/12  md:w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform md:hover:scale-110 transition duration-500 mx-auto md:mx-0">
              <div className="w-sm">
                <img className="md:w-64" src={cardImage2} alt="" />
                <div className="mt-4 text-gray-600 text-center">
                  <h1 className="text-xl font-bold">{titleCardTwo}</h1>
                  <p style={{ fontFamily: 'Roboto', color: '#222f3e' }} className="mt-4 mx-2 text-gray-600 text-justify">{textCardTwo}</p>
                  <div className="mt-8 mb-4 py-2 px-14 rounded-full bg-gray-600 text-white tracking-widest hover:bg-gray-500 transition duration-200">{tag2}</div>
                </div>
              </div>
            </div>
            <div className="mt-16 py-4 px-4  w-10/12  md:w-72  bg-white rounded-xl shadow-lg hover:shadow-xl transform md:hover:scale-110 transition duration-500 mx-auto md:mx-0">
              <div className="w-sm">
                <img className="md:w-64" src={cardImage3} alt="FOTO DO GOOGLE" />
                <div className="mt-4 text-gray-600 text-center">
                  <h1 className="text-xl font-bold">{titleCardThree}</h1>
                  <p style={{ fontFamily: 'Roboto', color: '#222f3e' }} className="mt-4 mx-2 text-gray-600 text-justify">{textCardThree}</p>
                  <div className="mt-8 mb-4 py-2 px-14 rounded-full bg-gray-600 text-white tracking-widest hover:bg-gray-500 transition duration-200">{tag3}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}