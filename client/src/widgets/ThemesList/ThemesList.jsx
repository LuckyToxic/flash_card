import ThemeCard from '../ThemeCard/ThemeCard';

export default function ThemesList({ topics, setTopics }) {
  return (
    <div>
      {topics ? (
        topics.map((topic) => (
          <ThemeCard key={topic.id} topic={topic} setTopics={setTopics} />
        ))
      ) : (
        <>нет тем</>
      )}
    </div>
  );
}
