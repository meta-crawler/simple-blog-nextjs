import Layout from '@/components/layout'

export default function IndexPage() {
  return (
    <Layout title="Home | Next.js + TypeScript Simple Blog">
      <main>
        <div className='flex flex-col items-center justify-center min-h-screen text-center'>
          <h1 className="text-2xl">Hello Next.js 👋</h1>
          <p className='mt-2 text-gray-800'>
            A starter for Next.js, Tailwind CSS, and TypeScript
          </p>
        </div>
      </main>
    </Layout>
  )
}
