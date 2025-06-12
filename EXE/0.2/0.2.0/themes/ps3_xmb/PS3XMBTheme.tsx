
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import useSound from 'use-sound'
import bootFx from '../../assets/sounds/boot.mp3'
import navHoverFx from '../../assets/sounds/hover.wav'
import selectFx from '../../assets/sounds/select.wav'
import { BootScreen } from '../../components/RootBoot'
import { ModGPTUI } from '../../components/ModGPTUI'
import { ShaderCanvas } from './ShaderCanvas'

export function PS3XMBTheme() {
  const [booted, setBooted] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('modgpt')
  const [launched, setLaunched] = useState(false)
  const [showModGPTUI, setShowModGPTUI] = useState(false)
  const [playBoot] = useSound(bootFx)
  const [playHover] = useSound(navHoverFx)
  const [playSelect] = useSound(selectFx)

  useEffect(() => {
    if (launched) {
      setTimeout(() => setShowModGPTUI(true), 2000)
    }
  }, [launched])

  const handleCategoryChange = (cat) => {
    playHover()
    setSelectedCategory(cat)
  }

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black text-white">
      {!booted && <BootScreen onBoot={() => { playBoot(); setBooted(true); }} />}

      {booted && !launched && (
        <>
          <ShaderCanvas />
          <div className="absolute inset-0 flex flex-col justify-center items-start p-8 z-10">
            <XMBNavBar selected={selectedCategory} onSelect={handleCategoryChange} />
            <SubMenuPanel category={selectedCategory} />
          </div>
          <ModGPTDisc onLaunch={() => { playSelect(); setLaunched(true); }} />
        </>
      )}

      {launched && !showModGPTUI && (
        <div className="absolute inset-0 flex items-center justify-center text-xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="text-center text-white tracking-widest">
            <div className="text-2xl mb-4">MODGPT Loading...</div>
            <div className="text-sm text-gray-400">Launching MODGPTUI Control Center</div>
          </motion.div>
        </div>
      )}

      {showModGPTUI && <ModGPTUI />}
    </div>
  )
}

function XMBNavBar({ selected, onSelect }) {
  const cats = ['settings','users','modgpt','network','store']
  return (
    <motion.div layout className="flex space-x-8 text-xl mb-4">
      {cats.map(cat => (
        <motion.button
          layout
          key={cat}
          onClick={() => onSelect(cat)}
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className={`uppercase ${selected===cat?'text-white':'text-gray-500'} transition-all`}>
          {cat}
        </motion.button>
      ))}
    </motion.div>
  )
}

function SubMenuPanel({ category }) {
  const menus = {
    settings: ['System Settings','Audio','Display'],
    users: ['Swarm 1','Swarm 2'],
    modgpt: ['Launch','Memory View','Builds'],
    network: ['Logs','Status','AI Uplink'],
    store: ['Mod Market','Swarm Tools']
  }
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="ml-4 mt-2 space-y-1">
      {(menus[category] || []).map(item => (
        <div key={item} className="text-lg text-gray-300 hover:text-white transition-colors">{item}</div>
      ))}
    </motion.div>
  )
}

function ModGPTDisc({ onLaunch }) {
  return (
    <div className="absolute bottom-4 right-4 text-sm text-gray-500 z-10">
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={onLaunch}
        className="bg-gray-800 px-4 py-2 rounded shadow transition-transform cursor-pointer">
        Insert MODGPT Disc
      </motion.div>
    </div>
  )
}
