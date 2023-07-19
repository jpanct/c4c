import { Link, ListItem, UnorderedList } from '@chakra-ui/react';

type Shortened = {
    original: string;
    short: string;
  };

type UrlListProps = {
  urls: Array<Shortened>;
};

export const UrlList: React.FC<UrlListProps> = ({ urls }) => {
  return (
    <UnorderedList id="urlList" textAlign="left">
      {urls.map((u) => (
        <ListItem>
          <Link href={u.short} color="teal.500">
            {u.short}
          </Link>{' '}
          - {u.original}
        </ListItem>
      ))}
    </UnorderedList>
  );
};

export default UrlList;