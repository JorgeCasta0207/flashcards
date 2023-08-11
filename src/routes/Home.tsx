import bg from '../assets/bg image.png'
import NavBar from '../components/NavBar'

const Home = () => {
  return (
    <div>
      <NavBar />
      <div className="relative">
      <img src={bg} />
      <div className="absolute top-32 left-0 text-secondary font-bold text-[2.5rem] bg-zinc-950/50"><p>Quiz Lit - Master Your Studies</p></div>
      </div>
      
      <div className="bg-primary flex flex-1 p-9">
        <div className="rounded-full bg-secondary flex items-center justify-center min-w-[200px] min-h-[200px]">
          {/* circle thing here */}
        </div>
        <div className='bg-accent rounded-full min-w-[16px] min-h-[200px]'>
          {/* purple bar here */}
        </div>
        <div>
          <p>Quiz Lit is a powerful online tool that allows students tocreate, generate, and study flashcards. With Quiz Lit,you can easily create flashcards for any subject,generate flashcards from existing sets, and study them toimprove your knowledge. Share your flashcards with othersand collaborate on learning together.  Start mastering your subjects with Quiz Lit today!</p>
        </div>
      </div>
      
    </div>
  )
}

export default Home