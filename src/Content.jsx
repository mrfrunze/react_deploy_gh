import ItemList from './ItemList';

const Content = ({items, handleCheck, handleDelete}) => {
    // Перенесем данные в App js
   

    return (
        <main>
            {items.length ? (
               <ItemList 
               items={items}
               handleCheck={handleCheck}
               handleDelete={handleDelete}
               />
            ) : (
                <p style={{
                    marginTop: "2rem",
                    color: "red",
                    fontWeight: "Bold"
                }}>You list is Empty!</p>
            )}
          
        </main>
    )
}

export default Content;