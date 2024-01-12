// import react library
import React from "react";

// import interface for defining type
import { ItemInterface } from "../../models/items/Item.interface";
// example with react fc
// React.FC - React Functional Component
// export const ItemListComponent: React.FC<{ items: any[] }> = function (props) {
//   return (
//     <div>
//       <h3>Items</h3>
//       <ul>
//         {props.items.map((el, index) =>
//           <li key={index}>{el.name}</li>
//         )}
//       </ul>
//     </div>
//   );
// };

// add type Props
type Props = {
    items: ItemInterface[],
    onItemSelect: (item: ItemInterface)=> void
}



// example with react classes
export class ItemListComponent extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }
  // handle click event
  handleItemClick(item: ItemInterface){
    // item.selected = !item.selected
    this.props.onItemSelect(item)
    //  item.selected =  !item.selected
    //  console.log(`Item ${item.name}(${item.id}) ${item.selected? "is":"isn't"} selected`);
     
  }

  // we should wrap our inline function in following signature
  // <el onClick = "{()=>method()}">

  // implement render function
  render(): React.ReactNode {
    return (
      <div>
        <h3>Items</h3>
        <ul>
          {this.props.items.map((el, index) => 
            <li key={index}  onClick={()=>this.handleItemClick(el)}>{el.name} [Status: {el.selected ? "":" not"} "selected"]</li>
          )}
        </ul>
      </div>
    );
  }
}
