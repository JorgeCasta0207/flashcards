import bg from '../assets/bg-image.png'
import flashcards from '../assets/flashcards.jpg'

const Home = () => {
  return (
    <div>
      <div className="relative">
      <img src={bg} className='brightness-[.56] w-full'/>
      <div className="absolute top-40 left-0 pl-40 bg-accent bg-opacity-[.57] rounded-r-xl pr-8 pb-2">
        <p id="title-text" className='text-secondary font-bold text-[1.5rem] lg:text-[3.5rem] [text-shadow:_0_3px_0_rgb(7_0_0_/_40%)] ml-20'>Quiz Lit - Master Your Studies</p>
        </div>
        <div className="absolute bottom-[6.5rem] right-0 pr-52 pl-px bg-secondary bg-opacity-[.65] rounded-l-xl">
        <p id="title-text" className='font-bold text-[2.5rem] mr-20 pl-4'>Create, Study, and Share Flashcards</p>
        </div>
      </div>
      
      <div className="bg-primary flex flex-1 p-9 space-x-8">
        <div>
          <img src={flashcards} className="rounded-full bg-secondary w-[210px] h-[200px] drop-shadow-lg ms-25 me-25"/>
          {/* circle thing here */}
        </div>
        <div className='bg-accent rounded-full min-w-[16px] min-h-[200px]'>
          {/* purple bar here */}
        </div>
        <div className='w-[80%]'>
          <p className='text-[1.5rem]'>Quiz Lit is a powerful online tool that allows students tocreate, generate, and study flashcards. With Quiz Lit, you can easily create flashcards for any subject, generate flashcards from existing sets, and study them toimprove your knowledge. Share your flashcards with others and collaborate on learning together.
          <span className='font-bold inline-block mt-7'>Start mastering your subjects with Quiz Lit today!</span></p>
        </div>
      </div>
      
    </div>
  )
}

export default Home