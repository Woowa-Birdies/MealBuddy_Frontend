import Typography from '@components/ui/Typography/Typography';

const Home = () => {
  const generateKey = (prefix, index) => `${prefix}-${new Date().getTime()}-${index}`;

  return (
    <div>
      홈페이지
      {Array.from({ length: 100 }).map((_, index) => (
        <div
          key={generateKey('typography', index)}
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          <Typography title="홈입니다홈입니다홈입니다홈입니다홈입니다홈입니다홈입니다" />
        </div>
      ))}
    </div>
  );
};

export default Home;
