import React, {Component} from "react";
export default function NavBar() {
    return function(Child) {
      return class extends Component {
         constructor(props) {
           super(props);
         }
         render() {
           return (
             <div>
               <h2>Hello this is the navigation bar</h2>
               <Child />
             </div>
           )
        }
     }
 }
}