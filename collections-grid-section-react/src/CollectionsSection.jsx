import React, {useState, useEffect} from 'react';



function CollectionItems(props) {

    const [items, setItems] = useState([])

    useEffect(() => {

        const retrieveCollections = async () => {
            const data = await fetch('https://www.greatfrontend.com/api/projects/challenges/e-commerce/collections')
            const dataJson = await data.json();

            setItems(dataJson.data)
            
        }
      
        retrieveCollections();



    }, [])


 
    // useEffect(() => {
    //     const collectionItems = items.map((item) => (
    //         console.log(item)
    //     ))
    // }, [items])


    const collectionItems = items.map((item, index) => 
        <li className={"item" + (index + 1)} style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url(${item.image_url})`}}>
            <h4>{item.name}</h4>
            <p>{item.description}</p>
        </li>
    )

   




    

    

    return (
        <>
        {/* <li className="item1">
            <h4>Cozy Comforttt</h4>
            <p>Plush fabrics and soothing designs</p>
        </li>
        <li className="item2">
            <h4>test1</h4>
            <p>test2</p>
        </li>
        <li className="item3">
            <h4>test1</h4>
            <p>test2</p>
        </li> */}
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