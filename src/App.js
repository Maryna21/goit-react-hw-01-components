import Container from 'components/container/container';
import Section from 'components/section/section';
import './App.css';
import Profile from 'components/Profile/Profile';
import user from 'components/Profile/user.json';
import Statistics from 'components/statistics/statistics';
import statisticalData from 'components/statistics/statistical-data.json';
import FriendList from 'components/FriendList/friendList';
import friends from 'components/FriendList/friends.json';
import TransactionHistory from 'components/TransactionHistory/transactionHistory';
import transactions from 'components/TransactionHistory/transactions.json';

function App() {
  return (
    <Container>
      <Section>
        <Profile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
          followers={user.stats.followers}
          views={user.stats.views}
          likes={user.stats.likes}
        />
      </Section>
      <Section>
        <Statistics title="Upload stats" stats={statisticalData} />
      </Section>
      <Section>
        <Statistics stats={statisticalData} />
      </Section>
      <Section>
        <FriendList friends={friends} />
      </Section>
      <Section>
        <TransactionHistory items={transactions} />
      </Section>
    </Container>
  );
}

export default App;
