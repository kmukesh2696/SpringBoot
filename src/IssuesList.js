import { Component } from "react";
import Issue from './Issue.js';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import { Table} from 'react-bootstrap';
class IssuesList extends Component{

     
    render(){
        console.log("CommentList render=>commnets="+this.props.comments);
    let CommentNode=this.props.comments.map(comments=>
      <Issue key={comments.id} id={comments.id} sevrity={comments.sevrity} IssueDescription={comments.IssueDescription}Status= {comments.Status}>
        </Issue>
       );
        return(
            <>
             <table width="500px" height="200px" border="1px solid black ">
             <thead border="1px solid black ">
             <tr>
             <th border="1px solid black ">
              ID
             </th>
             <th border="1px solid black ">
             Issue Description
             </th>
             <th border="1px solid black ">
             sevrity
             </th>
             <th border="1px solid black ">
              Status
             </th>
             </tr >
             </thead>
             <tbody >
            {CommentNode}
             </tbody>
             </table>
            </>
        );
    }
}
export default IssuesList;