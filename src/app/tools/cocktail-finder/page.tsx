import { Metadata } from 'next';
import List from './components/List';

export const metadata: Metadata = {
    title: "Cocktail finder",
    description: "Ricerca di cocktail sia alcolici che analcolici",
};

export default function Page() {
  return (
    <main className='container mx-auto px-4'>
        <List/>
    </main>
  )
}
