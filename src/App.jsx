import './index.css';
import { useState,useEffect } from 'react';
import Header from './Header';
import SearchItem from './SearchItem';
import Additem from './Additem';
import Content from './Content';
import Footer from './Footer';

function App() { 
  
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppinglist')) || []);

  const [newItem, setNewItem] = useState('');
  const [seachItem, setSeachItem] = useState('');

  useEffect(() => {
    console.log('insted loading');
  }, [items])

  useEffect(() => {
    localStorage.setItem('shoppinglist', JSON.stringify(items))
  }, [items])

  const addItem = item => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = {id, checked:false, item} ;
    const listItems = [...items, myNewItem]
    setItems(listItems)
  }

  const handleCheck = (id) => {
    // console.log(`key: ${id}`);
    const listItems = items.map( item => item.id === id ? {...item, checked: !item.checked} : item)
    setItems(listItems)
  }

  const handleDelete = id => {
      // console.log(id);
      const listItems = items.filter( item => item.id !== id)
      setItems(listItems)
  }

  const handleSubmit = e => {
    // console.log('submited');
    e.preventDefault();
    if(!newItem) return;
    addItem(newItem)
    setNewItem('');
  }

  return (
    <div className="App">
      <Header title="To do List"/>
      <main>
      <Additem  
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
       <SearchItem 
        seachItem={seachItem}
        setSeachItem={setSeachItem}
      />
      <Content 
        items={items.filter( item => (item.item).toLowerCase().includes(seachItem.toLowerCase()))}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      </main>
     <Footer length={items.length} />
    </div>
  );
}

export default App;
