import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {
  constructor()
  {
    super();
    this.state = {
        property: [
    
            {
                price: 999,
                qty: 1,
                title: 'Mobile',
                id: 0
            },
            {
                price: 99,
                qty: 10,
                title: 'Watch',
                id: 1
            },
            {
                price: 9999,
                qty: 4,
                title: 'Laptop',
                id: 2
            }
    
    
    
        ]
    }
    
        }
    
    
    handleIncrease = (item)=>{
         
    
        const { property} = this.state;
        const index = property.indexOf(item);
    
        property[index].qty += 1;
    
        this.setState({
          property
        })
        }
    
        handleDecrease = (item) => {
    const {property } = this.state;
    const index = property.indexOf(item);
    if(property[index].qty>0)
    property[index].qty -=1;
    
    this.setState({
        property
    })
    
        }
    
        handleDelete = (id) => {
            const {property} = this.state;
            const items = property.filter( (item)=> item.id != id);
            this.setState({
                property: items
            
            })
        }

        getCount = () => {

          const {property} = this.state;

          let count=0;

          property.forEach((proper)=>{
            count+= proper.qty;
          })
return count;
        }

getTotal= () =>{
  const {property} = this.state;
  let total =0;

  property.forEach((prop)=>{
    total+= prop.qty * prop.price;
  })

  return total;

}

        render(){
       const {property} = this.state; 
  return (


    <div className="App">
    

      <Navbar
      count = {this.getCount()}
      />
       <Cart 
         properties={property}
      
         onIncrease = {this.handleIncrease}
         onDecrease  = {this.handleDecrease}
         onDelete =  {this.handleDelete}
       />
      
      <div style={{padding:'20px', fontSize: 20}}> 

        total: {this.getTotal()};

      </div>
   </div> 
  );}
}

export default App;
