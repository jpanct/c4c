// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormEvent, useCallback, useState } from 'react';
import axios, {isCancel, AxiosError} from 'axios'; 
import {
  Button,
  Container,
  Text,
  Input,
  UnorderedList,
  ListItem,
  Link,
} from '@chakra-ui/react';
import ShortenUrlForm from './shorten-url';
import UrlList from './url-list';


type Shortened = {
  original: string;
  short: string;
};
/* 
export function App() {
  const [urls, setUrls] = useState<Array<Shortened>>([]);
  const [inputUrl, setInputUrl] = useState<string>('');
  const onSubmit = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();

      const response = await axios.post(`http://localhost:3333/api/shorten`, {
        original: inputUrl,
      });

      const newUrl = response.data as Shortened; // 🚨 This should set off alarm bells in your head! Why?

      setUrls([newUrl, ...urls]);
      setInputUrl('');
    },
    [urls, setUrls, inputUrl, setInputUrl]
  );

  return (
    <div>
      <h1>My URL Shortener</h1>
      <form onSubmit={onSubmit}>
        <label>URL</label>
        <input
          value={inputUrl}
          onChange={(e) => {
            setInputUrl(e.target.value);
          }}
          placeholder="www.my-super-long-url-here.com/12345"
        />
        <button type="submit">Generate</button>
      </form>

      <ul>
        {urls.map((u) => (
          <li>
            {u.short} - {u.original}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
*/
/*
export function App() {
  const [urls, setUrls] = useState<Array<Shortened>>([]);
  const [inputUrl, setInputUrl] = useState<string>('');
  const onSubmit = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();

      const response = await axios.post(`http://localhost:3333/api/shorten`, {
        original: inputUrl,
      });

      const newUrl = response.data as Shortened;

      setUrls([newUrl, ...urls]);
      setInputUrl('');
    },
    [urls, setUrls, inputUrl, setInputUrl]
  );

  return (<Container maxWidth="4xl" marginBlock={10} textAlign="center">
  <Text fontSize="4xl">My URL Shortener</Text>
  <form onSubmit={onSubmit}>
    <Input
      id="url-input"
      size="lg"
      marginBlock={4}
      value={inputUrl}
      onChange={(e) => {
        setInputUrl(e.target.value);
      }}
      placeholder="www.my-super-long-url-here.com/12345"
    />
    <Button id="submit-btn" type="submit" colorScheme="teal" size="lg">
      Generate
    </Button>
  </form>

  <UnorderedList id="url-list" textAlign="left">
    {urls.map((u) => (
      <ListItem>
        <Link href={u.short} color="teal.500">
          {u.short}
        </Link>{' '}
        - {u.original}
      </ListItem>
    ))}
  </UnorderedList>
</Container>
  );
}

export default App;*/
export function App() {
  const [urls, setUrls] = useState<Array<Shortened>>([]);

  const requestShortUrl = useCallback(
    async (inputUrl: string) => {
      const response = await axios.post(`http://localhost:3333/api/shorten`, {
        original: inputUrl,
      });

      const newUrl = response.data as Shortened;

      setUrls([newUrl, ...urls]);
    },
    [urls, setUrls]
  );

  return (<Container maxWidth="4xl" marginBlock={10} textAlign="center">
  <Text fontSize="4xl">My URL Shortener</Text>
  <ShortenUrlForm requestShortUrl={requestShortUrl} />
  <UrlList urls={urls} />
</Container>
  );
}

export default App;