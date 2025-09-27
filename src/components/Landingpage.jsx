import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  Brain,
  BookOpen,
  Lightbulb,
  Star,
  Globe,
  Atom,
  ArrowRight,
  Users,
  Shield,
  Zap,
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  CheckCircle,
  ChevronDown,
} from "lucide-react";

// Full featured Landing Page with many sections, animations, and styling
export default function LandingPage() {
  // Stats counter state
  const [learners, setLearners] = useState(0);
  const [articles, setArticles] = useState(0);
  const [countries, setCountries] = useState(0);

  // Newsletter state
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  // FAQ accordion state
  const [openFaq, setOpenFaq] = useState(null);

  // Testimonials index
  const [tIndex, setTIndex] = useState(0);
  const tAutoRef = useRef(null);

  const categories = [
    {
      icon: <Lightbulb className="w-10 h-10" />,
      title: "Self Improvement",
      description:
        "Build habits, master productivity, and unlock your inner potential with powerful growth strategies.",
      color: "from-blue-400 to-blue-600",
      href: "/selfim",
    },
    {
      icon: <Star className="w-10 h-10" />,
      title: "Islamic Knowledge",
      description:
        "Explore authentic Islamic teachings, spirituality, and timeless guidance for modern living.",
      color: "from-yellow-400 to-yellow-600",
      href: "/islam",
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "Technology",
      description:
        "Stay updated with AI, software, gadgets, and the innovations shaping our future world.",
      color: "from-purple-400 to-purple-600",
      href: "/Tecnology",
    },
    {
      icon: <Globe className="w-10 h-10" />,
      title: "General Knowledge",
      description:
        "Feed your curiosity with facts, trivia, and topics across history, culture, and nature.",
      color: "from-green-400 to-green-600",
      href: "/Generalknowledge",
    },
    {
      icon: <Atom className="w-10 h-10" />,
      title: "Science Knowledge",
      description:
        "Dive into physics, biology, and chemistry with engaging guides and discoveries.",
      color: "from-red-400 to-red-600",
      href: "/scienceknowledge",
    },
  ];

  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Learning",
      description:
        "Discover content tailored to your journey with AI-driven recommendations and insights.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Global Community",
      description:
        "Join thousands of learners worldwide to discuss, share, and grow together.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Verified Knowledge",
      description:
        "Content is fact-checked, curated by experts, and updated regularly.",
    },
  ];

  const testimonials = [
    {
      name: "Ayesha R.",
      role: "Student",
      text: "I changed my learning routine thanks to the curated paths. The community is supportive and the content is top-notch.",
      avatar: null,
    },
    {
      name: "Omar K.",
      role: "Researcher",
      text: "Well-referenced articles and great depth. I use it as a starting point for my research topics.",
      avatar: null,
    },
    {
      name: "Mariam S.",
      role: "Educator",
      text: "The lesson guides and examples make it easy to teach complex ideas. Highly recommended for teachers.",
      avatar: null,
    },
  ];

  const faqs = [
    {
      q: "Is the content free?",
      a: "Most content is free. Premium courses and deep-dive workshops are available as paid upgrades.",
    },
    {
      q: "How does AI personalize recommendations?",
      a: "Our recommender analyzes your interactions and preferred topics to surface the most relevant articles and courses.",
    },
    {
      q: "Can I contribute articles?",
      a: "Yes — we welcome community contributors. Submit drafts and our editors will review for quality and accuracy.",
    },
  ];

  // Animate counters on mount
  useEffect(() => {
    let raf1, raf2, raf3;
    let start = Date.now();
    const dur = 1400; // ms
    const fromTo = (from, to, setter) => {
      const tick = () => {
        const elapsed = Date.now() - start;
        const t = Math.min(1, elapsed / dur);
        const val = Math.floor(from + (to - from) * easeOutQuad(t));
        setter(val);
        if (t < 1) {
          requestAnimationFrame(tick);
        }
      };
      tick();
    };
    fromTo(0, 12500, setLearners);
    fromTo(0, 3420, setArticles);
    fromTo(0, 72, setCountries);

    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
      cancelAnimationFrame(raf3);
    };
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    tAutoRef.current = setInterval(() => {
      setTIndex((p) => (p + 1) % testimonials.length);
    }, 4500);
    return () => clearInterval(tAutoRef.current);
  }, []);

  const submitNewsletter = (e) => {
    e.preventDefault();
    if (!email) return;
    // fake subscribe
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 3000);
  };

  function easeOutQuad(t) {
    return t * (2 - t);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br w-375 mt-925 from-gray-50 to-gray-100">
      <div className="pt-16">
        <header className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white py-32 px-6 overflow-hidden">
          <svg className="absolute right-[-120px] top-[-80px] opacity-10" width="600" height="600" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="300" cy="300" r="300" fill="white" />
          </svg>

          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <motion.h1 initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-5xl md:text-6xl font-extrabold leading-tight">
              Explore the <span className="text-yellow-300">Depths</span> of Humanity
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.8 }} className="mt-6 text-lg md:text-xl text-gray-100 max-w-3xl mx-auto">
              Philosophy • Psychology • Sociology • Ethics • Culture — real stories, research-backed articles, and thoughtfully curated learning paths.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.8 }} className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="/discover" className="px-6 py-3 rounded-full bg-yellow-300 text-black font-semibold shadow-lg hover:scale-105 transition">Explore Now <ArrowRight className="inline ml-2 w-4 h-4"/></a>
              <a href="#about" className="px-6 py-3 rounded-full border border-white/30 text-white hover:bg-white/10 transition">Learn More</a>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1.1 }} viewport={{ once: true }} className="mt-12 grid grid-cols-3 gap-6 max-w-md mx-auto">
              <div className="text-center">
                <div className="text-sm text-gray-200">Learners</div>
                <div className="text-2xl font-bold">{learners.toLocaleString()}</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-gray-200">Articles</div>
                <div className="text-2xl font-bold">{articles.toLocaleString()}</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-gray-200">Countries</div>
                <div className="text-2xl font-bold">{countries}</div>
              </div>
            </motion.div>
          </div>
        </header>

        <section id="about" className="py-20 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
              <h2 className="text-3xl font-bold">About Humanity</h2>
              <p className="text-gray-700">
                Humanity is a learning platform dedicated to exploring what it means to be human. We bring together centuries of philosophy, modern psychology, sociological research, and ethical debate into approachable articles, courses, and community conversations.
              </p>
              <p className="text-gray-600">
                Our mission is to empower curious minds with accurate, well-researched content and a welcoming community. Whether you want to deepen your faith, learn a new scientific concept, or improve your daily habits — there’s something here for you.
              </p>
              <div className="flex gap-4 mt-4">
                <a href="/about" className="px-5 py-3 rounded-lg bg-indigo-600 text-white font-semibold">Read Our Story</a>
                <a href="/team" className="px-5 py-3 rounded-lg border border-gray-300 text-gray-700">Meet the Team</a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="bg-gradient-to-tr from-indigo-50 to-pink-50 rounded-2xl p-8 shadow-lg">
                <h3 className="font-semibold mb-4">What we offer</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-indigo-600 mt-1"/> Curated reading paths</li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-indigo-600 mt-1"/> Interactive community discussions</li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-indigo-600 mt-1"/> Verified references and sources</li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-indigo-600 mt-1"/> Occasional live workshops</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="features" className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto text-center">
            <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl font-bold">Platform Features</motion.h3>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }} viewport={{ once: true }} className="mt-4 text-gray-600 max-w-2xl mx-auto">Powerful tools to help you learn smarter — not harder. Explore personalized learning, community Q&amp;A, and publish your own findings.</motion.p>

            <div className="mt-10 grid md:grid-cols-3 gap-8">
              {features.map((f, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15 }} viewport={{ once: true }} className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow hover:-translate-y-2 transition">
                  <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 mb-4">
                    {f.icon}
                  </div>
                  <h4 className="font-semibold text-lg">{f.title}</h4>
                  <p className="text-gray-600 mt-2">{f.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="categories" className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
              <h2 className="text-4xl font-bold">Knowledge Categories</h2>
              <p className="text-gray-600 mt-3 max-w-2xl mx-auto">Hand-picked categories to guide your exploration. Each category features curated articles, starter guides, and suggested reading paths.</p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((c, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15 }} viewport={{ once: true }} className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-3 transition overflow-hidden">
                  <div className={`absolute inset-0 opacity-10 bg-gradient-to-br ${c.color}`}></div>
                  <div className={`w-20 h-20 mb-4 rounded-2xl flex items-center justify-center text-white bg-gradient-to-br ${c.color}`}>
                    {c.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{c.title}</h3>
                  <p className="text-gray-700 mb-4">{c.description}</p>
                  <a href={c.href} className="flex items-center text-indigo-600 font-semibold">Explore <ArrowRight className="ml-2 w-4 h-4"/></a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-20 px-6 bg-gradient-to-tr from-indigo-50 to-pink-50">
          <div className="max-w-6xl mx-auto text-center">
            <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl font-bold">What our learners say</motion.h3>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.15 }} viewport={{ once: true }} className="text-gray-600 mt-3 max-w-2xl mx-auto">Real feedback from our community — stories of growth, insight, and meaningful change.</motion.p>

            <div className="mt-10 relative">
              <div className="max-w-3xl mx-auto">
                {testimonials.map((t, idx) => (
                  <motion.div key={idx} initial={{ opacity: 0, y: 20, scale: 0.98 }} animate={{ opacity: idx === tIndex ? 1 : 0, y: idx === tIndex ? 0 : 20, scale: idx === tIndex ? 1 : 0.98 }} transition={{ duration: 0.6 }} className={`bg-white rounded-2xl p-8 shadow-xl ${idx === tIndex ? "block" : "absolute left-0 right-0 hidden"}`}>
                    <p className="text-gray-700 mb-4">"{t.text}"</p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-semibold">{t.name.split(" ")[0].charAt(0)}</div>
                      <div>
                        <div className="font-semibold">{t.name}</div>
                        <div className="text-sm text-gray-500">{t.role}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 flex justify-center gap-3">
                {testimonials.map((_, i) => (
                  <button key={i} onClick={() => setTIndex(i)} className={`w-3 h-3 rounded-full ${i === tIndex ? "bg-indigo-600" : "bg-gray-300"}`}></button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-gradient-to-br from-indigo-50 to-white p-8 rounded-2xl shadow">
              <div className="text-4xl font-bold text-indigo-600">{learners.toLocaleString()}</div>
              <div className="text-gray-600 mt-2">Learners joined</div>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-white p-8 rounded-2xl shadow">
              <div className="text-4xl font-bold text-pink-600">{articles.toLocaleString()}</div>
              <div className="text-gray-600 mt-2">Articles published</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow">
              <div className="text-4xl font-bold text-green-600">{countries}</div>
              <div className="text-gray-600 mt-2">Countries reached</div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl font-bold text-center">Frequently Asked Questions</motion.h3>
            <div className="mt-8 grid md:grid-cols-2 gap-6">
              {faqs.map((f, i) => (
                <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }} className="border rounded-xl overflow-hidden">
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-6 text-left">
                    <div>
                      <div className="font-semibold">{f.q}</div>
                      {openFaq === i && <div className="mt-2 text-gray-600">{f.a}</div>}
                    </div>
                    <ChevronDown className={`w-6 h-6 transition-transform ${openFaq === i ? "rotate-180" : ""}`}/>
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl font-bold">Stay Updated — Join Our Newsletter</motion.h3>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.15 }} viewport={{ once: true }} className="mt-4 text-gray-100">Get monthly highlights, new deep-dive articles, and invitations to live events.</motion.p>

            <form onSubmit={submitNewsletter} className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <div className="relative">
                <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-300" />
                <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" type="email" className="pl-10 pr-4 py-3 rounded-lg text-black w-80" />
              </div>
              <button type="submit" className="px-6 py-3 rounded-lg bg-yellow-300 text-black font-semibold">Subscribe</button>
            </form>
            {subscribed && <div className="mt-4 text-sm text-white/90">Thanks — you have been subscribed!</div>}
          </div>
        </section>

        <footer className="bg-black text-gray-300 py-16 px-6">
          <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-white font-bold text-lg mb-2">HUMANITY</div>
              <p className="text-sm text-gray-400">A platform to explore knowledge across disciplines and connect with curious minds everywhere.</p>
            </div>
            <div>
              <div className="font-semibold text-white mb-3">Explore</div>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Articles</a></li>
                <li><a href="#" className="hover:text-white">Courses</a></li>
                <li><a href="#" className="hover:text-white">Workshops</a></li>
                <li><a href="#" className="hover:text-white">Community</a></li>
              </ul>
            </div>
            <div>
              <div className="font-semibold text-white mb-3">Resources</div>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Guides</a></li>
                <li><a href="#" className="hover:text-white">Contribute</a></li>
              </ul>
            </div>
            <div>
              <div className="font-semibold text-white mb-3">Follow Us</div>
              <div className="flex gap-3">
                <a href="#" className="hover:text-white"><Twitter className="w-5 h-5"/></a>
                <a href="#" className="hover:text-white"><Facebook className="w-5 h-5"/></a>
                <a href="#" className="hover:text-white"><Instagram className="w-5 h-5"/></a>
                <a href="#" className="hover:text-white"><Linkedin className="w-5 h-5"/></a>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center text-sm text-gray-500">© {new Date().getFullYear()} Humanity — All rights reserved.</div>
        </footer>
      </div>
    </div>
  );
}
