import { Menu, X } from 'lucide-react';

import Button from '@/components/buttons/Button';

import { useTileContext } from '../store/TileContextProvider';

const Header = () => {
  const { isTileView, setIsTileView, isMenuOpen, setIsMenuOpen } =
    useTileContext();
  const setTileView = (tView: boolean) => {
    setIsTileView(tView);
  };
  return (
    <div className='flex items-center justify-between p-4 bg-white shadow-md'>
      <div className='flex items-center gap-2'>
        <Button variant='ghost' onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </Button>
        <nav className='hidden md:flex gap-6'>
          <a href='#' className='text-gray-700 hover:text-black'>
            Dashboard
          </a>
          <a href='#' className='text-gray-700 hover:text-black'>
            Reports
          </a>
          <a href='#' className='text-gray-700 hover:text-black'>
            Settings
          </a>
        </nav>
      </div>
      <Button onClick={() => setTileView(!isTileView)}>
        {isTileView ? 'Show Grid View' : 'Show Tile View'}
      </Button>
    </div>
  );
};

export default Header;
