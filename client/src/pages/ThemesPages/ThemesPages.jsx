import { useEffect, useState } from 'react';
import ThemesApi from '../../entities/ThemesApi';
import ThemesList from '../../widgets/ThemesList/ThemesList';

export default function ThemesPages() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    ThemesApi.getAll().then(({ statusCode, error, data, message }) => {
      if (error) alert(message, 'Не получилось');
      setTopics(data);
    });
  }, []);

  return (
    <div>
      <ThemesList topics={topics} setTopics={setTopics} />
    </div>
  );
}
