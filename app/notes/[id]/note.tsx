import Pocketbase from 'pocketbase';
import styles from '../Notes.module.css';

async function getNote(noteId: string) {
  const db = new Pocketbase('http://127.0.0.1:8090');
  const data = await db.records.getOne('notes2', noteId);

  // const res = await fetch(
  //   `http://127.0.0.1:8090/api/collections/notes2/records/${noteId}`,
  //   {
  //     next: { revalidate: 10 },
  //   }
  // );
  // const data = await res.json();
  return data;
}

export default async function NotePage({ params }: { params: { id: string } }) {
  const note = await getNote(params.id);
  return (
    <div>
      <h1>notes/{note.title}</h1>
      <div className={styles.note}>
        <h3>{note.title}</h3>
        <h5>{note.content}</h5>
        <p>{note.created}</p>
      </div>
    </div>)
}