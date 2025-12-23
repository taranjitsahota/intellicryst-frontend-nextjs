
import React, { useState, useEffect } from 'react';
import { Star, User, Heart, Zap, Globe } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  text: string;
  rating: number;
  avatar: string;
  x: number; // percentage from left
  y: number; // percentage from top
  size: 'sm' | 'md' | 'lg';
}

const testimonials: Testimonial[] = [
  // NORTH AMERICA (x: 10-28, y: 15-45)
  { id: 1, name: "Alexandra Nowak", location: "New York, USA", text: "Intellicryst completely transformed our backend infrastructure. The speed of deployment and security protocols are truly world-class.", rating: 5, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alexandra", x: 18, y: 28, size: 'lg' },
  { id: 2, name: "Chris Evans", location: "Toronto, CA", text: "Flawless execution on our mobile platform. Highly recommend their engineering team.", rating: 5, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Chris", x: 22, y: 22, size: 'md' },
  { id: 3, name: "Jessica Alba", location: "Los Angeles, USA", text: "Security and scale were our priorities. Intellicryst delivered both beyond expectations.", rating: 5, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jessica", x: 12, y: 35, size: 'sm' },
  { id: 4, name: "Michael J.", location: "Chicago, USA", text: "The architectural depth they brought to our project was unmatched.", rating: 4, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael", x: 20, y: 38, size: 'sm' },
  { id: 5, name: "Sarah Miller", location: "Vancouver, CA", text: "Agile, responsive, and technically brilliant.", rating: 5, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=SarahM", x: 14, y: 20, size: 'md' },

  // SOUTH AMERICA (x: 28-38, y: 55-85)
  { id: 6, name: "David Silva", location: "São Paulo, Brazil", text: "The Car Rental platform is intuitive and fast. Manual errors are down by 95%.", rating: 5, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David", x: 32, y: 65, size: 'lg' },
  { id: 7, name: "Isabella R.", location: "Buenos Aires, AR", text: "Exceptional UI/UX and backend stability.", rating: 5, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Isabella", x: 34, y: 78, size: 'md' },
  { id: 8, name: "Mateo Gomez", location: "Bogota, CO", text: "Reliable partner for long-term technical growth.", rating: 4, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mateo", x: 28, y: 52, size: 'sm' },

  // EUROPE (x: 45-58, y: 15-35)
  { id: 9, name: "Elena Vance", location: "London, UK", text: "High-performance code that scales. Our user engagement tripled after launch.", rating: 5, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Elena", x: 48, y: 22, size: 'lg' },
  { id: 10, name: "Julian Schmidt", location: "Berlin, DE", text: "Reliable, tech-forward, and extremely communicative.", rating: 4, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Julian", x: 52, y: 25, size: 'md' },
  { id: 11, name: "Pierre Dubois", location: "Paris, FR", text: "Top-tier engineering with a focus on security.", rating: 5, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Pierre", x: 47, y: 30, size: 'sm' },
  { id: 12, name: "Sofia Rossi", location: "Rome, IT", text: "They turned our legacy system into a modern powerhouse.", rating: 5, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sofia", x: 54, y: 32, size: 'sm' },
  { id: 13, name: "Lars Erikson", location: "Stockholm, SE", text: "Brilliant cloud infrastructure provisioning.", rating: 5, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lars", x: 53, y: 15, size: 'md' },

  // AFRICA (x: 45-58, y: 45-80)
  { id: 14, name: "Amara Okoro", location: "Lagos, Nigeria", text: "Incredible attention to detail in UI/UX. The system feels premium.", rating: 5, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amara", x: 48, y: 58, size: 'lg' },
  { id: 15, name: "Kofi Annan", location: "Accra, GH", text: "A truly global standard of engineering service.", rating: 5, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kofi", x: 46, y: 52, size: 'md' },
  { id: 16, name: "Zainab B.", location: "Cairo, EG", text: "Efficient deployment and zero-trust security.", rating: 5, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Zainab", x: 55, y: 42, size: 'sm' },
  { id: 17, name: "Thabo M.", location: "Cape Town, ZA", text: "They understand the complexities of global scaling.", rating: 4, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Thabo", x: 53, y: 78, size: 'md' },

  // ASIA (x: 65-88, y: 15-55)
  { id: 18, name: "Marcus Chen", location: "Singapore", text: "The Ezykheti platform has been a game changer for our coordination.", rating: 5, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus", x: 78, y: 52, size: 'lg' },
  { id: 19, name: "Sarah Oh", location: "Seoul, KR", text: "Security was our #1 concern. Their approach gave us peace of mind.", rating: 5, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah", x: 86, y: 32, size: 'md' },
  { id: 20, name: "Takeshi K.", location: "Tokyo, JP", text: "Cloud migrations were seamless. Downtime was non-existent.", rating: 5, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Takeshi", x: 92, y: 30, size: 'sm' },
  { id: 21, name: "Li Wei", location: "Beijing, CN", text: "High-performance systems that handle millions of requests.", rating: 5, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=LiWei", x: 82, y: 25, size: 'md' },
  { id: 22, name: "Ananya S.", location: "Mumbai, IN", text: "Transformative digital engineering for our agritech startup.", rating: 5, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ananya", x: 70, y: 45, size: 'sm' },
  { id: 23, name: "Hiroshi T.", location: "Osaka, JP", text: "Quality assurance at its finest.", rating: 4, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Hiroshi", x: 89, y: 38, size: 'sm' },
  { id: 24, name: "Aria Kim", location: "Seoul, KR", text: "Perfect execution from wireframe to launch.", rating: 5, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aria", x: 85, y: 42, size: 'sm' },

  // AUSTRALIA (x: 82-95, y: 70-85)
  { id: 25, name: "Jack Wilson", location: "Sydney, AU", text: "Intellicryst is our preferred partner for all things cloud.", rating: 5, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jack", x: 88, y: 78, size: 'lg' },
  { id: 26, name: "Emma Watson", location: "Melbourne, AU", text: "Brilliant technical SEO and application speed.", rating: 5, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=EmmaW", x: 85, y: 82, size: 'md' },
  { id: 27, name: "Oliver K.", location: "Perth, AU", text: "Solid engineering foundation.", rating: 5, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Oliver", x: 80, y: 72, size: 'sm' },

  // MIDDLE EAST / OTHER
  { id: 28, name: "Fatima A.", location: "Dubai, UAE", text: "Modern, secure, and fast. Everything we needed.", rating: 5, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Fatima", x: 62, y: 38, size: 'md' },
  { id: 29, name: "Hassan M.", location: "Riyadh, SA", text: "World-class security engineering.", rating: 5, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Hassan", x: 60, y: 45, size: 'sm' },
  { id: 30, name: "Omar S.", location: "Istanbul, TR", text: "They deliver what they promise, and more.", rating: 5, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Omar", x: 58, y: 30, size: 'sm' },
];

  const Testimonials: React.FC = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  const [worldDots, setWorldDots] = useState<
    { x: number; y: number; color: 'gray' | 'cyan'; size: number }[]
  >([]);

  useEffect(() => {
    const dots: { x: number; y: number; color: 'gray' | 'cyan'; size: number }[] = [];
    const gridSize = 2.4;

    const isInsideWorldMap = (x: number, y: number) => {
      if (x > 8 && x < 35 && y > 15 && y < 45) return true;
      if (x > 25 && x < 40 && y > 50 && y < 85) return true;
      if (x > 45 && x < 60 && y > 15 && y < 35) return true;
      if (x > 42 && x < 62 && y > 38 && y < 78) return true;
      if (x > 62 && x < 95 && y > 10 && y < 60) return true;
      if (x > 78 && x < 95 && y > 68 && y < 90) return true;
      if (x > 8 && x < 15 && y > 60 && y < 65) return true;
      return false;
    };

    for (let x = 5; x <= 95; x += gridSize) {
      for (let y = 10; y <= 90; y += gridSize) {
        if (isInsideWorldMap(x, y)) {
          const overlapsFace = testimonials.some(
            t => Math.abs(t.x - x) < 2.5 && Math.abs(t.y - y) < 2.5
          );

          if (!overlapsFace) {
            dots.push({
              x,
              y,
              color: Math.random() > 0.88 ? 'cyan' : 'gray',
              size: 2.5 + Math.random() * 4.5,
            });
          }
        }
      }
    }

    setWorldDots(dots);
  }, []);

  const getCircleSize = (size: string) => {
    switch (size) {
      case 'lg': return 'w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20';
      case 'md': return 'w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12';
      case 'sm': return 'w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8';
      default: return 'w-10 h-10';
    }
  };

  return (
    <div className="relative w-full max-w-[1440px] mx-auto px-4 md:px-8 py-32 overflow-hidden bg-white">
      <div className="text-center mb-16 space-y-4">
        <h4 className="text-[#012B48] font-black text-xs uppercase tracking-[0.4em]">Global Recognition</h4>
        <h2 className="text-5xl lg:text-7xl font-black text-[#012B48] tracking-tighter leading-[0.95]">
          Built for <span className="gradient-text">the world.</span>
        </h2>
        <p className="text-[#5A6C7C] font-semibold text-lg lg:text-xl max-w-2xl mx-auto opacity-70">
          Our systems empower businesses across continents, delivering high-performance digital solutions that scale globally.
        </p>
      </div>

      <div className="relative w-full aspect-[21/10] md:aspect-[16/8] lg:aspect-[21/9] min-h-[500px] lg:min-h-[700px]">
        {/* Dense Decorative Map Dots */}
        {worldDots.map((dot, idx) => (
          <div 
            key={`wdot-${idx}`}
            className={`absolute rounded-full pointer-events-none transition-all duration-1000 ${
              dot.color === 'cyan' ? 'bg-[#00F5D4] opacity-[0.85]' : 'bg-slate-300 opacity-[0.45]'
            }`}
            style={{ 
              left: `${dot.x}%`, 
              top: `${dot.y}%`, 
              width: `${dot.size}px`, 
              height: `${dot.size}px`, 
              transform: 'translate(-50%, -50%)' 
            }}
          ></div>
        ))}

        {/* Decorative Network Lines (SVG) - Ultra Minimal */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.02]" viewBox="0 0 1000 500">
          {testimonials.filter(t => t.size === 'lg').map((t, i) => (
            testimonials.filter(other => other.size === 'lg').slice(i + 1, i + 3).map((other, j) => (
              <line 
                key={`${t.id}-${other.id}`}
                x1={`${t.x * 10}`} 
                y1={`${t.y * 5}`} 
                x2={`${other.x * 10}`} 
                y2={`${other.y * 5}`} 
                stroke="#012B48" 
                strokeWidth="1" 
                strokeDasharray="4 4" 
              />
            ))
          ))}
        </svg>

        {/* Testimonial Avatars */}
        {testimonials.map((t) => (
          <div 
            key={t.id}
            className="absolute transition-all duration-500 ease-out"
            style={{ 
              left: `${t.x}%`, 
              top: `${t.y}%`, 
              transform: 'translate(-50%, -50%)',
              zIndex: activeId === t.id ? 100 : 10
            }}
            onMouseEnter={() => setActiveId(t.id)}
            onMouseLeave={() => setActiveId(null)}
          >
            <div className={`group relative cursor-pointer ${getCircleSize(t.size)}`}>
              {/* Outer glow on active */}
              {activeId === t.id && (
                <div className="absolute inset-0 bg-[#00F5D4]/20 blur-xl rounded-full scale-125 animate-pulse"></div>
              )}
              
              {/* Avatar Circle */}
              <div className={`w-full h-full rounded-full border transition-all duration-300 overflow-hidden shadow-sm ${
                activeId === t.id ? 'border-[#00F5D4] scale-110 shadow-lg' : 'border-slate-100 grayscale-[40%] group-hover:grayscale-0 hover:border-[#00F5D4]/40'
              }`}>
                <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
              </div>

              {/* Popup Card */}
              {activeId === t.id && (
                <div 
                  className={`absolute top-[120%] ${t.x > 75 ? 'right-0 translate-x-0' : t.x < 25 ? 'left-0 translate-x-0' : 'left-1/2 -translate-x-1/2'} w-[300px] md:w-[360px] bg-white rounded-[32px] shadow-[0_48px_128px_-24px_rgba(1,43,72,0.18)] border border-slate-50 p-8 z-[110] animate-in zoom-in-95 fade-in duration-300`}
                >
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full border-[6px] border-white bg-white shadow-xl overflow-hidden">
                    <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                  </div>

                  <div className="mt-12 text-center space-y-6">
                    <div className="space-y-1">
                      <div className="flex items-center justify-center gap-6 mb-4">
                        <div className="flex items-center gap-1.5">
                          <User size={14} className="text-[#00F5D4]" />
                          <span className="text-[10px] font-black text-[#012B48] uppercase tracking-widest">Client</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Heart size={14} className="text-rose-500" />
                          <span className="text-[10px] font-black text-[#012B48] uppercase tracking-widest">Partner</span>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-black text-[#012B48]">{t.name}</h3>
                      <p className="text-[10px] font-black text-[#5A6C7C] uppercase tracking-widest opacity-40">{t.location}</p>
                    </div>

                    <div className="flex justify-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} fill={i < t.rating ? "#00F5D4" : "none"} className={i < t.rating ? "text-[#00F5D4]" : "text-slate-200"} />
                      ))}
                    </div>

                    <p className="text-sm text-[#5A6C7C] font-semibold leading-relaxed px-4">
                      "{t.text}"
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Backdrop Decorative Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] h-[95%] border border-[#012B48]/5 rounded-[60px] lg:rounded-[100px] pointer-events-none"></div>
      </div>

      {/* Floating Statistics Chips */}
      <div className="flex flex-wrap items-center justify-center gap-12 mt-16 animate-in slide-in-from-bottom duration-1000">
        {[
          { label: 'Countries', value: '42+', icon: <Globe size={16} /> },
          { label: 'Uptime', value: '99.99%', icon: <Zap size={16} /> },
          { label: 'Satisfaction', value: '4.9/5', icon: <Star size={16} /> }
        ].map((stat, i) => (
          <div key={i} className="flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-[#00F5D4] group-hover:bg-[#00F5D4] group-hover:text-white transition-all shadow-sm">
              {stat.icon}
            </div>
            <div>
              <p className="text-2xl font-black text-[#012B48] tracking-tighter">{stat.value}</p>
              <p className="text-[10px] font-black text-[#5A6C7C] uppercase tracking-widest opacity-60">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
