import { getDB } from "./SQLcode";

/*
/**
 * Produces the shortened form of a given URL
 * Effect: updates the db to record the url and its shortened id.
 */
export async function shortenUrl(url: string): Promise<string> {
    const db = await getDB();
  
    const result = await db.run('INSERT INTO url (original) VALUES (?)', url);
    console.log(result);
    const id = result.lastID;
    const short = `http://localhost:3333/s/${id}`;
  
    return short;
  }
  
  export async function lookupUrl(shortenedId: number) {
    const db = await getDB();
  
    const result = await db.get(
      'SELECT original FROM url WHERE id = (?)',
      shortenedId
    );
    console.log(result);
    return result.original;
  }
  