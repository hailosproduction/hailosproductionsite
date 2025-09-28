
import ParticlesBackground from '../components/ParticlesBackground';

export default function Home() {
  return (
    <div className="relative text-center text-white min-h-screen flex flex-col justify-center items-center">
      <ParticlesBackground />
      <h1 className="text-5xl font-bold mb-4 animate-fade-in">Dark Melodies, Bright Advocacy</h1>
      <p className="text-lg max-w-2xl mx-auto animate-fade-in delay-200">
        Creating emotionally charged music that explores human depths while supporting marginalized communities.
      </p>
      <button className="mt-6 px-6 py-3 bg-pink-600 text-white font-semibold rounded-lg hover:shadow-[0_0_15px_#ec4899] transition-all duration-300">
        Listen Now
      </button>
    </div>
  );
}
