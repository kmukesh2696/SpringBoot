import { Component } from "react";
class Issue extends Component{

     
    render(){
      
        return(
          <tr >
             <td>{this.props.id}</td>
              <td >{this.props.IssueDescription}</td>
              <td>{this.props.sevrity}</td>
              <td>{this.props.Status}</td>
          </tr>
        );
    }

}
export default Issue;