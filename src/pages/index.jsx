import Link from 'next/link'

export default function Index() {
  return (
    <div>
      <div>
        <Link href='/webinar'>
          <a>Webinar</a>
        </Link>
      </div>
      <h1>Index da Landing Page</h1>
    </div>
  )
}