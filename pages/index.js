import Header from '../components/header';
import Card from '../components/card';

export default function Home() {

  const data =[
    {"name":"Hello world!", "image":"/nextjslivesite/images/logo1.png"},
    {"name":"Hello world!", "image":"/nextjslivesite/images/logo2.png"},
    {"name":"Hello world!", "image":"/nextjslivesite/images/logo3.png"},
    {"name":"Hello world!", "image":"/nextjslivesite/images/logo4.png"},
    {"name":"Hello world!", "image":"/nextjslivesite/images/logo5.png"},
    {"name":"Hello world!", "image":"/nextjslivesite/images/logo1.png"},
  ];


  return (
    <section >
      <Header/>


      <div className={`parallax overflow-y-auto overflow-x-hidden`}>
        <div className={`bg-[url('/images/bg-image.jpg')] bg-cover parallax-layer parallax-layer-background`}></div>
      
        <div className='parallax-layer parallax-layer-base'>

          <div className={`lg:container mx-auto px-5 pt-14 overflow-x-hidden  `}>
            {data.map(function(val, index){
                return (
                  <Card key={index} isOdd={index %2 === 0} image={val.image} name={val.name}/>
                )}
            )}
          </div> 

        </div>
      </div>   
        
    </section>
  )
}
