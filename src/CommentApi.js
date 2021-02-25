
//import { Component } from "react";
import data from "./data.js";

class CommentApi {

  
  static getAllComments(){
      return data.comments;
  }

}
export default CommentApi;