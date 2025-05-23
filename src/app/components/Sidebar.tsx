import { useTileContext } from '../store/TileContextProvider';

const Sidebar = () => {
  const { isMenuOpen } = useTileContext();
  {
    isMenuOpen && (
      <div className='md:hidden bg-white p-4 shadow-md'>
        <ul className='space-y-2'>
          <li>
            <a href='#' className='text-gray-800'>
              Dashboard
            </a>
          </li>
          <li>
            <a href='#' className='text-gray-800'>
              Reports
            </a>
            <ul className='ml-4 text-sm text-gray-600'>
              <li>
                <a href='#'>Daily</a>
              </li>
              <li>
                <a href='#'>Monthly</a>
              </li>
            </ul>
          </li>
          <li>
            <a href='#' className='text-gray-800'>
              Settings
            </a>
          </li>
        </ul>
      </div>
    );
  }
};

export default Sidebar;
