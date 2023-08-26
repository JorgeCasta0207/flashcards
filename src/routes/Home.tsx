import bg from "../assets/bg-image.png";
import flashcards from "../assets/flashcards.jpg";

const Home = () => {
  return (
    <>
      <div className="relative h-1/4 xl:h-3/6">
        <img src={bg} alt="" className="w-full h-full z-0" />
        <div className="absolute bg-opacity-[.57] w-4/6 font-bold px-3 bg-accent rounded-r-3xl top-20">
          <div className="lg:hidden">
            <p className="text-center text-4xl px-2 text-white">Quiz Lit</p>
            <p className="text-xl text-right text-white leading-none">
              Master Your Studies
            </p>
          </div>
          <div className="hidden lg:block">
            <p className="text-center xl:text-right text-4xl xl:text-6xl text-white pb-5 pt-2 [text-shadow:_0_3px_0_rgb(7_0_0_/_40%)]">
              Quiz Lit - Master Your Studies
            </p>
          </div>
        </div>
        <div className="bg-opacity-[.65] rounded-l-2xl absolute right-0 text-black p-3 bg-secondary xl:text-5xl md:text-3xl text-lg font-bold top-40 xl:top-60 flex w-5/6">
          <p>Create, Study, and Share Flashcards</p>
        </div>
        <br />
      </div>

      <table className="grid w-full bg-primary mt-8 m-auto">
        <div className="max-lg:block inline-flex">
          <img
            src={flashcards}
            className="w-[22%] xl:w-1/6 rounded-full m-auto drop-shadow-lg"
          />
          {/* circle thing here */}
      <div className="table-cell max-lg:hidden "><div className="mx-[15px] bg-accent rounded-full w-[18px] h-[85%]"></div></div>
      <div className="table-cell max-lg:hidden inline-block"><p className="text-3xl text-left max-w-2xl m-auto">
            Quiz Lit is a powerful online tool that allows students to create,
            generate, and study flashcards. With Quiz Lit, you can easily create
            flashcards for any subject, generate flashcards from existing sets,
            and study them to improve your knowledge. Share your flashcards with
            others and collaborate on learning together.
          </p>
          <p className="text-[14.5px] text-3xl font-bold whitespace-nowrap text-left mt-7">
            Start mastering your subjects with Quiz Lit today!
          </p>
          </div>
      </div>
        <div className="table-row hidden max-lg:block">
          {/* purple bar here */}
          <div className="my-[15px] bg-accent rounded-full h-[18px] w-[160px] m-auto"></div>
        </div>
        <div className="table-row hidden max-lg:block">
          <p className="text-[15px] text-center px-[10px] max-w-2xl mx-auto">
            Quiz Lit is a powerful online tool that allows students to create,
            generate, and study flashcards. With Quiz Lit, you can easily create
            flashcards for any subject, generate flashcards from existing sets,
            and study them to improve your knowledge. Share your flashcards with
            others and collaborate on learning together.
          </p>
          <p className="text-[14.5px] font-bold whitespace-nowrap text-center mt-7">
            Start mastering your subjects with Quiz Lit today!
          </p>
        </div>
      </table>
    </>
    // </div>
  );
};

export default Home;
