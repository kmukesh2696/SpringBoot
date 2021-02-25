import { Component } from "react";
import CommentApi from './CommentApi.js';
import IssuesList from './IssuesList.js';
//import data from "./data.js";
class AllissuesPage extends Component{

       constructor(props){
           super(props);
           this.state={
              comments : []
           };
       }
       componentDidMount() {
      this.setState({comments: CommentApi.getAllComments()});
       
     // this.setState({comments:data.comments});
      }
    render(){
        return(
            <>
           <h1>Issue List</h1>
           <IssuesList comments={this.state.comments} />
            </>
        );
    }

}
export default AllissuesPage;