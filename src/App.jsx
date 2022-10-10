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

  // useEffect следит за изминениями в массиве - который передается вторым парметром!
  // useEffect - смотрит на зависимости!! в дам случаи items
  // useEffect рабоате иссинхронно и выполняется после всех функций 

  // console.log("before loading");
  useEffect(() => {
    // console.log('update items list');
    // useEffect оторабыват только тогда когда есть изминения в массиве!
    // если вводит вполе поиска то будет отробатывать только before and after!
    console.log('insted loading');
  }, [items])

  // console.log("after loading");

  // добавим в useState JSON.parse(localStorage.getItem('shoppinglist')) || []
  // если в Aplication удалить масив - будет ошибка это значит что filter = null, поэтому по умолчанию должен быть пустой массви! 

  // перенесем localStorage.setItem('shoppinglist', JSON.stringify(newItems)) в useEffect и заменим newItems на items - так как нам нужно сделить за изминениями именно items!
  useEffect(() => {
    localStorage.setItem('shoppinglist', JSON.stringify(items))
  }, [items])


  //  удалми setAndSaveItems - он нам болше не нужен! 
  // заменим setAndSaveItems на setItems
  // const setAndSaveItems = (newItems) => {
  //   setItems(newItems)
  // }

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
     <Footer length={items.length} />
    </div>
  );
}

export default App;
