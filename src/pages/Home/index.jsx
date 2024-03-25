import Typography from '@components/ui/Typography/Typography';

const Home = () => {
  const generateKey = (prefix, index) => `${prefix}-${new Date().getTime()}-${index}`;

  return (
    <div>
      홈페이지
      {/* 테스트용 */}
      {Array.from({ length: 100 }).map((_, index) => (
        <div
          key={generateKey('typography', index)}
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          <Typography content="홈입니다홈입니다홈입니다홈입니다홈입니다홈입니다홈입니다" />
        </div>
      ))}
      {/* 테스트용 */}
    </div>
  );
};

export default Home;
