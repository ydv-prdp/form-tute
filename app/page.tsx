import Image from 'next/image'
import FormComponent from './components/FormComponent'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <p>
          Here is the form
        </p>
        <FormComponent/>
      </div>
    </main>
  )
}
