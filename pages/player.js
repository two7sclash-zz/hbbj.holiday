import dynamic from 'next/dynamic'
import 'react-jinke-music-player/assets/index.css'

const ReactJkMusicPlayer = dynamic(() => import('react-jinke-music-player'), {
    ssr: false
  });

export default ReactJkMusicPlayer 