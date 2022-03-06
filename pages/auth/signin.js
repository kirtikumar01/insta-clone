import { getProviders, signIn } from 'next-auth/react'
import Header from '../../components/Header';


//browser
function signin({providers}) {
  return (
      <>
      <Header/>

    <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-30 px-14 text-center">
        <img src="https://links.papareact.com/ocw" className="w-80" alt=""/>
        <p className="font-xs italic">this is not a REAL App, its build for education purpose only</p>
        <div className="mt-40">
            {Object.values(providers).map((provider) => (
                <div key={provider.name}>
                    <button className="p-3 bg-blue-500 rounded-lg text-white" onClick={() => signIn(provider.id, {callbackUrl: "/"})} type="">Sign in with {provider.name}</button>
                </div>
            ))}
        </div>
    </div>
    </>
  )
}

//server side render
export async function getServerSideProps(){
    const providers = await getProviders();

    return{
        props: {
            providers
        }
    }
}

export default signin