import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from '@/components/ui/navigation-menu';
import { PhoneIcon } from 'lucide-react';
import { div } from 'motion/react-client';
import Image from 'next/image';

import {
  VideoPlayer,
  VideoPlayerContent,
  VideoPlayerControlBar,
  VideoPlayerMuteButton,
  VideoPlayerPlayButton,
  VideoPlayerSeekBackwardButton,
  VideoPlayerSeekForwardButton,
  VideoPlayerTimeDisplay,
  VideoPlayerTimeRange,
  VideoPlayerVolumeRange,
} from '@/components/ui/shadcn-io/video-player';

// home,trips,transfers,our fleet, meeeting point, reviews, contact us
const navItems = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'Trips',
    link: '/trips',
  },
  {
    name: 'Transfers',
    link: '/transfers',
  },
  {
    name: 'Our Fleet',
    link: '/our-fleet',
  },
  {
    name: 'Meeting Point',
    link: '/meeting-point',
  },
  {
    name: 'Reviews',
    link: '/reviews',
  },
  {
    name: 'Get in Touch',
    link: '/get-in-touch',
  },
];
export default function Home() {
  return (
    <div className='flex flex-col items-start h-screen mx-auto py-4 px-2'>
      <div className='flex items-center justify-between w-full pb-4'>
        <Image
          src='/logo.webp'
          alt='logo'
          width={120}
          height={0}
          className='object-contain'
        />
      </div>
      <VideoPlayer className='overflow-hidden rounded'>
        <VideoPlayerContent
          crossOrigin=''
          muted
          autoPlay
          loop
          preload='auto'
          slot='media'
          src='/hero.mp4'
        />
      </VideoPlayer>
    </div>
  );
}
