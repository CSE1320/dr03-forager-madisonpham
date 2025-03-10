import NavBar from '../../components/NavBar';
import ComparisonTable from '../../components/ComparisonTable';
import TopBar from '@/components/TopBar';
import { warningMessage } from '../../data/development';
import Message from '@/components/Message';

export default function MushroomComparisonPage() {
  const pageStyle = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    paddingBottom: '60px',
  };

  const contentStyle = {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const messageStyle = {
    fontSize: '16px', // Set font size for the message
    padding: '8px', 
    margin: '10px auto', 
    width: '290px', // Set the same width as the big MushroomCard
  };

  return (
    <div className="page" style={pageStyle}>
      <TopBar text="Compare" backLink="/mushroom" />
      <div style={contentStyle}>
        <Message 
          icon={warningMessage.icon} 
          header={warningMessage.header} 
          message={warningMessage.message} 
          style={messageStyle} 
          showCloseButton={false} 
        />
        <ComparisonTable />
      </div>
      <NavBar />
    </div>
  );
}