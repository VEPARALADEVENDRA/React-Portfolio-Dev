import { motion } from 'framer-motion'
import { useState } from 'react'

function AwardsAndAchievement() {
  const [hoveredCard, setHoveredCard] = useState(null)

  const awards = [
    {
      title: 'Minors Degree in Robotics',
      description: 'Completed a comprehensive minor degree program in robotics, covering autonomous systems, machine learning applications in robotics, and advanced control systems.',
      icon: '🎓',
      year: '2025',
      gradient: 'from-blue-500 to-purple-600',
      glowColor: 'rgba(59, 130, 246, 0.3)',
      particles: ['⚙️', '🤖', '🔬']
    },
    {
      title: 'Best Research Award 2025',
      description: 'Recognized for outstanding research contributions and innovative work in the field of technology and engineering.',
      icon: '🏆',
      year: '2025',
      gradient: 'from-yellow-400 to-orange-500',
      glowColor: 'rgba(251, 191, 36, 0.3)',
      particles: ['⭐', '💡', '🔬']
    },
    {
      title: 'Published 3 Research Papers in IEEE Xplore',
      description: 'Successfully published three peer-reviewed research papers in IEEE Xplore, contributing to the advancement of knowledge in the field.',
      icon: '📄',
      year: '2024-2025',
      gradient: 'from-green-500 to-teal-600',
      glowColor: 'rgba(34, 197, 94, 0.3)',
      particles: ['📚', '✍️', '🔍']
    },
    {
      title: 'Chennai Marathon - Silver Medal (5km)',
      description: 'Participated in the Chennai Marathon and achieved a silver medal in the 5km race category, demonstrating dedication and athletic excellence.',
      icon: '🥈',
      year: '2024',
      gradient: 'from-gray-400 to-slate-600',
      glowColor: 'rgba(156, 163, 175, 0.3)',
      particles: ['🏃', '💪', '🏅']
    }
  ]

  const reveal = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    hover: {
      y: -8,
      scale: 1.02,
      rotateY: 5,
      rotateX: 5,
      transition: { 
        duration: 0.3, 
        ease: "easeOut",
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  }

  const iconVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: { 
      scale: 1.2, 
      rotate: [0, -10, 10, 0],
      transition: { 
        duration: 0.6,
        ease: "easeInOut"
      }
    }
  }

  const particleVariants = {
    initial: { opacity: 0, scale: 0, y: 0 },
    animate: (i) => ({
      opacity: [0, 1, 0],
      scale: [0, 1, 0],
      y: [-20, -40, -60],
      x: [0, Math.random() * 20 - 10, Math.random() * 40 - 20],
      transition: {
        duration: 2,
        delay: i * 0.2,
        repeat: Infinity,
        repeatDelay: 3,
        ease: "easeOut"
      }
    })
  }

  return (
    <motion.section 
      className="section relative overflow-hidden" 
      id="awards" 
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true }}
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-indigo-900/20 pointer-events-none" />
      
      {/* Floating particles background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              opacity: 0 
            }}
            animate={{ 
              y: [null, -100],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="container relative z-10">
        <motion.div 
          className="text-center mb-16"
          variants={reveal}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4"
            variants={reveal}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Awards & Achievements
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"
            variants={reveal}
            whileHover={{ scaleX: 1.5 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8" 
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        >
          {awards.map((award, index) => (
            <motion.article 
              key={award.title} 
              className="relative group"
              variants={cardVariants}
              whileHover="hover"
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              {/* Card glow effect */}
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(45deg, ${award.glowColor}, transparent, ${award.glowColor})`
                }}
                animate={hoveredCard === index ? { scale: 1.05 } : { scale: 1 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Main card */}
              <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 h-full overflow-hidden">
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"
                    animate={hoveredCard === index ? { 
                      background: `linear-gradient(45deg, ${award.gradient.replace('from-', '').replace(' to-', ', ')}), transparent`
                    } : {}}
                    transition={{ duration: 0.5 }}
                  />
                </div>

                {/* Floating particles */}
                {hoveredCard === index && (
                  <div className="absolute inset-0 pointer-events-none">
                    {award.particles.map((particle, i) => (
                      <motion.div
                        key={i}
                        className="absolute text-2xl"
                        variants={particleVariants}
                        initial="initial"
                        animate="animate"
                        custom={i}
                        style={{
                          left: `${20 + i * 20}%`,
                          top: '20%'
                        }}
                      >
                        {particle}
                      </motion.div>
                    ))}
                  </div>
                )}

                <div className="relative z-10">
                  <div className="flex items-start gap-6 mb-6">
                    <motion.div 
                      className="text-6xl flex-shrink-0"
                      variants={iconVariants}
                      initial="initial"
                      whileHover="hover"
                    >
                      {award.icon}
                    </motion.div>
                    
                    <div className="flex-1">
                      <motion.h3 
                        className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300"
                        whileHover={{ x: 5 }}
                      >
                        {award.title}
                      </motion.h3>
                      <motion.span 
                        className="inline-block px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 text-sm font-medium rounded-full border border-blue-400/30"
                        whileHover={{ scale: 1.1, backgroundColor: "rgba(59, 130, 246, 0.3)" }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {award.year}
                      </motion.span>
                    </div>
                  </div>
                  
                  <motion.p 
                    className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {award.description}
                  </motion.p>

                  {/* Animated underline */}
                  <motion.div
                    className="mt-4 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 -top-2 -left-2 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100"
                  animate={hoveredCard === index ? {
                    x: [0, 400],
                    transition: { duration: 1.5, ease: "easeInOut" }
                  } : {}}
                />
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}

export default AwardsAndAchievement
