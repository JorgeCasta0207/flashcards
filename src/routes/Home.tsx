import bg from '../assets/bg-image.png'
import flashcards from '../assets/flashcards.jpg'

const Home = () => {
  return (
    <div>
    <div style={{ backgroundImage: `url(${bg})` }}className="h-[300px] bg-cover bg-center h-auto text-white pt-[40px] object-fill">
    <div className="md:w-1/2">
      <div className="bg-opacity-[.57] text-[20px] w-[300px] font-bold px-8 bg-accent [text-shadow:_0_3px_0_rgb(7_0_0_/_40%)] rounded-r-3xl">
        <p className='text-[50px] h-[55px]'>Quiz Lit</p>
        <p className='pl-[44px]'> Master Your Studies</p>
      </div>
         <br />
         <p className="bg-opacity-[.65] rounded-l-2xl absolute right-0 text-black px-[10px] py-[10px] bg-secondary text-[17px] font-bold">Create, Study, and Share Flashcards</p>
         <br />
    </div>
    </div>
      
      <div className="table w-full bg-primary">
        <div className="table-row">
          <img src={flashcards} className="mt-[40px] rounded-full m-auto bg-secondary drop-shadow-lg h-[130px] w-[140px]"/>
          {/* circle thing here */}
        </div>
        <div className='table-row'>
          {/* purple bar here */}
          <div className='my-[15px] bg-accent rounded-full h-[18px] w-[160px] m-auto'></div>
        </div>
        <div className='table-row'>
          <p className='text-[15px] text-center px-[10px]'>Quiz Lit is a powerful online tool that allows students to create, generate, and study flashcards. With Quiz Lit, you can easily create flashcards for any subject, generate flashcards from existing sets, and study them to improve your knowledge. Share your flashcards with others and collaborate on learning together.</p>
          <p className='text-[14.5px] font-bold whitespace-nowrap text-center mt-7'>Start mastering your subjects with Quiz Lit today!</p>
        </div>
      </div>
      
    </div>
  )
}

export default Home