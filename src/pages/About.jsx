
export default function About() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-center text-white bg-cover bg-center"
      style={{ backgroundImage: "url('/images/about-bg.jpg')" }}
    >
      <h2 className="text-4xl font-bold mb-4 animate-fade-in">About Hāịlō</h2>
      <p className="max-w-2xl px-6 animate-fade-in delay-200">
        Music that dives into the depths of human emotion while advocating for autism support, trans rights, LGBTQIA+ equality, mental health, and the environment.
      </p>
    </div>
  );
}
