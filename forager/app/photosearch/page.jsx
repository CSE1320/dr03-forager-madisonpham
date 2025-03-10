import NavBar from '../../components/NavBar';
import BackgroundScreen from '@/components/BackgroundScreen';

export default function PhotoSearchPage() {
  const photoSearchStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#397367',
    minHeight: '100vh',
    fontFamily: 'Nunito',
    //backgroundImage: 'url(/camera_background.png)', // Ensure the path is correct
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="page" style={photoSearchStyle}>
      <img src="/icons/status_bar.png" alt="IPhone status bar" />
      <NavBar />
      {/* <BackgroundScreen /> */}
    </div>
  );
}