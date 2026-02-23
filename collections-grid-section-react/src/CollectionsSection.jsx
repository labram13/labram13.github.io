import React, {useState, useEffect} from 'react';



function CollectionItems(props) {

    const [items, setItems] = useState([])

    console.log(items)

    //Note: data should be in parent and passed down to child
    useEffect(() => {

    
        fetch('https://www.greatfrontend.com/api/projects/challenges/e-commerce/collections')
            .then(response => response.json())
            .then(data => setItems(data.data))
    


    }, [])


    const collectionItems = items.map((item, index) => 
        <li key={item.collection_id} className={"item" + (index + 1)} style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url(${item.image_url})`}}>
            <h4>{item.name}</h4>
            <p>{item.description}</p>
        </li>
    )


    return (
        <>
        {collectionItems}
        </>
    
    )
}


export function CollectionsSection(props) {

    return (
        
        <section>
            <h1>Our Collections</h1>
            <ul>
            <CollectionItems />
            </ul>
        </section>
        

    )
}