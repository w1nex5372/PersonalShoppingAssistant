'use client'
 import imageDress from "@/public/dress1.png"
import Image from 'next/image'
import Header from '@/components/Header'
import CustomButton from '@/components/CustomButton'
import cards from "@/constants/cards"
import GlobalImage from "@/components/GlobalImage"
export default function Home() {

 


  return (
    
    <div>
    <Header />
<main className="bg-black text-white p-8 flex items-center">
  <div className="m-auto">
  <h1 className="text-3xl font-semibold m-4">Discover a New Way to Shop</h1>
  <p className="text-xs mb-6 md:text-xs m-4 max-w-sm">
    Welcome to a shopping experience like no other. Our Personal Shopping
    Assistant is here to revolutionize the way you shop online. Seamlessly
    integrated into your browsing, this assistant harnesses the power of data
    to curate product recommendations that resonate with your preferences.
    Unleash the potential of personalized shopping at your fingertips.
  </p>
  <CustomButton
    title="Take the Shopping Preferences Quiz"
    className="text-center m-auto bg-blue-500 hover:bg-blue-600 ml-4"
  />
  </div>
  <div className="rounded-2xl bg-green-400 m-1">
   <GlobalImage src={imageDress} alt="lazy"  className="w-52"/>
  </div>
  <div className="rounded-2xl bg-green-400 m-1">
   <GlobalImage src={imageDress} alt="lazy"  className="w-52"/>
  </div>
  <div className="rounded-2xl bg-green-400 m-1">
   <GlobalImage src={imageDress} alt="lazy"  className="w-52"/>
  </div>


</main>

<div className='text-center p-3 font-bold text-2xl'>
  Trending Right Now
</div>
   <div className="flex overflow-x-auto">  
      <div className="flex">
        {Object.keys(cards).map((cardKey) => {
          const card = cards[cardKey];
          return (
            <div key={cardKey} className="card border border-black flex-shrink-0 p-4 m-3" >
              <img src={card.img} width={"80px"} alt={card.title} />
              <h3>{card.title}</h3>
            </div>
          );
        })}
      </div>
    
    </div>
    </div>
  )
}
