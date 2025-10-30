import { useState } from 'react'
import { Link, useRouter } from 'next/link'
import { animated } from 'framer-motion'
import { FaBars, IoArrowRight, TouchIcon, Cog } from 'lucide-report'
import { Box, Heading, Paragraph, Link as ShadcnLink, Button, Grid, Column, Row, FujiIcon } from 'shadcn/ui'
import { useMotion } from 'framer-motion'

export default function Home() {
  const router = useRouter()
  const [featureToggle, setFeatureToggle] = useState(0)

  return (
    <animated.div className="h-screen min-h-[100vh] flex items-center p-4 w-full space-x-8 space-y-16">
      {/* Hero Section */}
      <div className="w-full max-w-4xl mx-auto">
        <Heading className="text-5xl md:text-7xl lg:text-9xl font-extrabold text-white mb-12 animate-slideRight">
          Galuxium v2
        </Heading>
        <Paragraph className="text-white text-lg md:text-xl lg:text-2xl mb-12 animate-fadeIn">
          The next generation AI-powered architecture toolkit for developers.
        </Paragraph>
        <Button 
          className="bg-purple-500 text-white w-full rounded-md px-8 py-4 hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-400"
        >
          Get Started
        </Button>
      </div>

      {/* Features Grid */}
      <div className="w-full max-w-6xl mx-auto pt-20">
        <Grid className="grid md:grid-cols-3 gap-12">
          {[
            {
              icon: <FiInfoCircle className="h-12 w-12 text-purple-600" />,
              title: 'AI-Powered Components',
              desc: 'Auto-generate boilerplate with AI integration',
              animation: 'animate-pulse'
            },
            {
              icon: <IoArrowRight className="h-12 w-12 text-purple-600" />,
              title: 'Smart Architecture',
              desc: 'AI-driven design suggestions based on best practices',
              animation: 'animate-scale'
            },
            {
              icon: <Cog className="h-12 w-12 text-purple-600" />,
              title: 'Custom AI Models',
              desc: 'Train and deploy custom AI models in minutes',
              animation: 'animate-rotate'
            },
            {
              icon: <TouchIcon className="h-12 w-12 text-purple-600" />,
              title: 'Visual Builder',
              desc: 'Drag-and-drop interface for rapid prototyping',
              animation: 'animate-fadeInLeft'
            }
          ].slice(featureToggle, featureToggle + 4).map((feature, index) => (
            <div 
              key={index}
              className={`col-span-1 p-4 rounded-lg shadow-md hover:shadow-lg animate-${feature.animation} ${['animate-enter', 'animate-hide']} `}
            >
              <div className="flex items-center space-x-4">
                {feature.icon}
                <div className="h-20 w-20 bg-purple-50 text-center text-purple-900 rounded-full">
                  {index + featureToggle + 1}
                </div>
              </div>
              <Paragraph className="mt-3 text-lg font-normal">{feature.title}</Paragraph>
              <Paragraph className="mt-2 text-sm text-gray-600">{feature.desc}</Paragraph>
            </div>
          ))}
        </Grid>
      </div>

      {/* Footer */}
      <div className="mt-20 bg-purple-100">
        <ShadcnLink 
          href="/about"
          className="text-center text-gray-800 link-dark hover:text-purple-600">
          Galuxium v2
        </ShadcnLink>
      </div>
    </animated.div>

    <script>
      const demoButton = document.querySelector('.demo-button');
      if (demoButton) {
        demoButton.addEventListener('click', () => {
          alert('Demo feature in progress')
        });
      }
    </script>
  )
}