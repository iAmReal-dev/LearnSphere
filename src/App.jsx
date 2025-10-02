import Search from './components/Search';
import './index.css';
import { teachers } from '../public/Data/dummyData';
import CardCarousel from './components/CardCarousel';
import Tabs from './components/Tabs';
import TimeTabs from './components/TimeTabs';
import Header from './components/Header';

function App() {
  const num = 1;
  const count = 19;

  const segments = [
    [3, '#fed201'],
    [3, '#eb7200'],
    [5, '#e64dd7'],
    [4, '#1fc262'],
    [4, '#08b3ec'],
  ];

  const colors = [];
  segments.forEach(([len, color]) => {
    for (let i = 0; i < len; i++) colors.push(color);
  });


  return (
    <div className="min-h-screen bg-gray-50 mb-20">
<nav>
  <Header />
</nav>
      
      <section className="w-full relative h-[50vh] md:h-auto bg-[#57029C]">
        <div className="hidden md:block">

        <img className="w-full" src="/assets/background.png" alt="background" />
        <img
          className="absolute top-44 w-full  max-w-[372px] left-10 pointer-events-none"
          src="/assets/boy.png"
          alt="boy"
        />
        <img className="absolute top-48 w-[95px] left-72 pointer-events-none" src="/assets/500.png" alt="" />
        <img className="absolute top-[40%] w-[167px] right-20  pointer-events-none" src="/assets/happy.png" alt="" />
        <img className="absolute top-[80%] w-[140px] left-80 pointer-events-none" src="/assets/rating.png" alt="" />
        <img className="absolute top-72 w-full max-w-[480px] right-0 pointer-events-none" src="/assets/girl.png" alt="girl" />
        </div>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-center">
          <h1 className="text-white font-semibold font-comic text-4xl md:text-5xl lg:text-6xl leading-snug">
            Learn a New Skill
            <br />
            <span className="text-[#F2FA5C]">Everyday, Anytime, and Anywhere.</span>
          </h1>

          <Search />
        </div>
      </section>

      <section className="w-full pt-16 text-center">
        <h2 className="font-poppins text-[24px] md:text-[40px]">How Old Are You? 🎯</h2>
        <p className="font-poppins text-[16px] mt-2">Pick your age and find the perfect courses just for you! ✨</p>

        <div className="flex gap-3 mx-auto justify-center mt-6 flex-wrap">
          {Array.from({ length: count }).map((_, i) => {
            const borderColor = colors[i] ?? '#000';
            return (
              <div
                key={i}
                className="flex cursor-pointer flex-col items-center justify-center py-2 px-4 rounded-lg"
                style={{
                  border: `3px solid ${borderColor}`,
                  // minWidth: '88px',
                }}
              >
                <span className="text-sm font-poppins  font-medium">{num + i}-{num + i + 1}</span>
                <span className="text-sm font-poppins ">Years</span>
              </div>
            );
          })}
        </div>
      </section>

      <section className="w-full bg-[#f9faff] pt-16 text-center">
        <h2 className="font-poppins text-[24px] md:text-[40px]">New Launches ⭐</h2>
        <p className="font-poppins text-[16px] mt-2 ">Our most loved courses that kids absolutely adore!</p>

        <div className="flex gap-3 mx-auto justify-center mt-8">
          <CardCarousel />
        </div>
      </section>

      <section className="w-full bg-[#f9faff] pt-16 text-center">
        <h2 className="font-poppins text-[24px] md:text-[40px]">Featured Courses ⭐</h2>
        <p className="font-poppins text-[16px] mt-2">Our most loved courses that kids absolutely adore!</p>

        <div className="flex gap-3 mx-auto justify-center mt-8">
          <CardCarousel />
        </div>
      </section>


      <section className="w-full pt-16 text-center">
        <h2 className="font-poppins text-[24px] md:text-[40px]">Learn from Top Teachers</h2>
        <p className="font-poppins text-[16px] mt-2">
          Expert instructors who make learning fun and engaging for every child
        </p>

        <div className="flex nap-6 justify-center overflow-x-scroll">
          {teachers.map((t) => (
            <div
              key={t.id}
              className="relative bg-white rounded-xl p-4 flex items-center flex-col gap-4"
            >
              {/* Image */}
              <div className="flex-shrink-0">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-70 h-70 object-cover rounded-full relative z-10"
                />
              </div>

              {/* Info */}
              <div className="flex items-center justify-center flex-col border-[3px] border-[#E5E5E5] mt-[-50px] p-8 pb-4 rounded-3xl">
                <p className="font-semibold text-lg whitespace-nowrap">{t.name}</p>
                <div className="flex gap-3 items-center text-sm text-gray-600 mt-1">
                  <span className="text-[#696969] whitespace-nowrap">{t.qualification}</span>
                  <span className="w-[1px] h-4 bg-[#C0C0C0]"></span>
                  <span className="text-[#696969] whitespace-nowrap">{t.experience}</span>
                </div>
                <p className="text-sm mt-2 text-[#696969]">{t.students}</p>
                <p className="text-sm bg-[#EFEFEF] rounded-2xl px-4 py-1 font-medium whitespace-nowrap mt-2">{t.subject}</p>
              </div>

            </div>
          ))}
        </div>

        <div className="flex gap-3 mx-auto justify-center mt-8">
          <CardCarousel />
        </div>
      </section>

      <section className="w-full bg-[#f9faff] pt-16 text-center relative">
        <div className="flex items-center justify-center gap-5 mb-2">
          <img src="/assets/left.svg" alt="left" className="w-[83px]" />
          <h2 className="font-poppins text-[24px] md:text-[40px]">Webinar starting within 24 hrs</h2>
          <img src="/assets/right.svg" alt="right" className="w-[83px]" />
        </div>
        <img src="/assets/frame.svg" className='absolute right-0 top-12' alt="" />
        <p className="font-poppins text-[16px] mt-2">Pick your age and find the perfect courses just for you! ✨</p>

        <div className="flex gap-3 mx-auto justify-center mt-8">
          <CardCarousel />
        </div>
      </section>

      <section className="w-full bg-[#f9faff] pt-16 text-center">
        <h2 className="font-poppins text-[24px] md:text-[40px]">Popular Categories</h2>
        <p className="font-poppins text-[16px] mt-2">Pick what you love most! These categories have everything you need to learn something awesome ✨</p>

        <div className="flex w-full flex-col gap-3 mx-auto justify-center mt-8">
          <Tabs />
        </div>
      </section>

      <section className="w-full bg-[#f9faff] pt-16 text-center">
        <h2 className="font-poppins text-[24px] md:text-[40px]">Filter with Time</h2>
        <p className="font-poppins text-[16px] mt-2">Choose the perfect time that fits your child's schedule</p>

        <div className="flex w-full flex-col gap-3 mx-auto justify-center mt-8">
          <TimeTabs />
        </div>
      </section>
    </div>
  );
}

export default App;
