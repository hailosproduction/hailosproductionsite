import React from 'react';
import { Award, Target, Heart } from 'lucide-react';

const About = () => {
  const qualifications = [
    "Bachelor of Music Production - Sound Design Specialization",
    "Certified Audio Engineer (Pro Tools, Ableton Live)",
    "Mental Health First Aider - Community Support",
    "LGBTQIA+ Youth Advocate Certification"
  ];

  const goals = [
    "Release debut album 'Shadows & Light' by end of 2024",
    "Perform at Pride festivals worldwide to support LGBTQIA+ rights",
    "Collaborate with autism advocacy organizations through music therapy",
    "Raise awareness for environmental causes through sustainable touring",
    "Create safe spaces for trans and non-binary artists in the music industry"
  ];

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-gray-950 via-gray-900 to-purple-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Hāịlō</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            More than music – it's a movement for change
          </p>
        </div>
      </section>

      {/* Main Bio */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Hāịlō creates emotionally charged music that explores the depths of human experience while advocating for marginalized communities. Through haunting melodies and powerful lyrics, this artist bridges the gap between personal expression and social consciousness.
            </p>
            
            <p className="text-lg text-gray-400 leading-relaxed mb-8">
              Born from a desire to make music that matters, Hāịlō combines dark, atmospheric soundscapes with messages of hope and resilience. Each track is crafted not just to entertain, but to inspire change, foster understanding, and provide comfort to those who need it most.
            </p>

            <p className="text-lg text-gray-400 leading-relaxed">
              The artistic vision extends beyond traditional boundaries, encompassing music production, sound design, visual arts, and community advocacy. Every project serves a dual purpose: artistic expression and social impact.
            </p>
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="py-16 bg-gray-950/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Award className="mx-auto mb-4 text-pink-500" size={48} />
            <h2 className="text-3xl font-bold text-white mb-4">Qualifications & Training</h2>
            <p className="text-gray-400">Professional background supporting the artistic mission</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {qualifications.map((qualification, index) => (
              <div key={index} className="flex items-start gap-3 p-6 bg-gray-900/30 rounded-xl border border-gray-800">
                <div className="w-2 h-2 bg-pink-500 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-300">{qualification}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Goals */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Target className="mx-auto mb-4 text-purple-500" size={48} />
            <h2 className="text-3xl font-bold text-white mb-4">Mission & Goals</h2>
            <p className="text-gray-400">Working towards a more inclusive and understanding world</p>
          </div>

          <div className="space-y-6">
            {goals.map((goal, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-gradient-to-r from-gray-900/30 to-gray-800/30 rounded-xl border border-gray-700 hover:border-pink-500/50 transition-all duration-300">
                <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">{index + 1}</span>
                </div>
                <p className="text-gray-300 text-lg">{goal}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-950/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="mx-auto mb-6 text-pink-500" size={48} />
          <h2 className="text-3xl font-bold text-white mb-8">Core Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-pink-400 mb-4">Authenticity</h3>
              <p className="text-gray-400">
                Every piece of music comes from genuine experience and emotion, never manufactured or artificial.
              </p>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-semibold text-purple-400 mb-4">Advocacy</h3>
              <p className="text-gray-400">
                Using platform and voice to amplify marginalized communities and support meaningful causes.
              </p>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">Connection</h3>
              <p className="text-gray-400">
                Creating bridges between people through shared experiences and universal emotions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
