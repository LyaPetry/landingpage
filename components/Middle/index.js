export default function Middle({ content, contentSmall, contentSmall2 }) {
  return (
    <>
      <p style={{ fontFamily: 'Roboto', color: '#222f3e' }} className="md:text-2xl md:text-justify text-gray-600 ">{content}{contentSmall}</p>
      <p style={{ fontFamily: 'Roboto', color: '#222f3e' }} className="md:text-2xl md:text-justify text-gray-600 mt-2">{contentSmall2}</p>
    </>
  )
}