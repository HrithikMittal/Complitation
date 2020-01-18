# Complitation
### It is just an Blog App Where user and read blogs and post there blogs.
 # Features in Backend
  - Any User can read any blog.
  - Blogs will be divide on the bases of Tags.
  - Admin and verified User can only Post the blogs.
  - Account Create and saved the Liked post and Bookmark blogs.
  - Comment Section Would be there for users.
  - Blogs can we access through the User Profile
  - User Profile and Writer Profile is Accessed to everyone.
  
  ## API Routes
  <table>
    <tr>
     <th>S.No.</th>
     <th>Path</th>
     <th>Method</th>
     <th>Description</th>
     <th>Requirements</th>
    </tr>
    <tr>
     <td>1.</td>
     <td>/user/signin</td>
     <td>POST</td>
     <td>Sign into the portal</td>
     <td>email, password</td>
    </tr>
    <tr>
     <td>2.</td>
     <td>/user/signup</td>
     <td>POST</td>
     <td>SignUp for the portal</td>
     <td>name, email, password</td>
    </tr>
    <tr>
     <td>3.</td>
     <td>/user/edituser/:userId</td>
     <td>PUT</td>
     <td>Edit the details of User</td>
     <td>name, email, password <br /> UserId(Authentication and Authorization) </td>
    </tr>
    <tr>
     <td>4.</td>
     <td>/userdeluser/:userId</td>
     <td>DEL</td>
     <td>Delete the User</td>
     <td>UserId(Authentication and Authorization)</td>
    </tr>
  </table>
  
  
  <table>
    <tr>
     <th>S.No.</th>
     <th>Path</th>
     <th>Method</th>
     <th>Description</th>
     <th>Requirements</th>
    </tr>
    <tr>
     <td>1.</td>
     <td>/post/allposts</td>
     <td>GET</td>
     <td>Get all the posts</td>
     <td>NULL</td>
    </tr>
    <tr>
     <td>2.</td>
     <td>/newpost/:userId</td>
     <td>POST</td>
     <td>Creating the new post</td>
     <td>title,body,tags <br/> userId(Authentication)</td>
    </tr>
    <tr>
     <td>3.</td>
     <td>/editpost/:postId</td>
     <td>PUT</td>
     <td>Edit the Post</td>
     <td>title,body,tags <br /> postId(Authentication and Authorization) </td>
    </tr>
    <tr>
     <td>4.</td>
     <td>/deletepost/:postId</td>
     <td>DEL</td>
     <td>Delete the Post</td>
     <td>PostId(Authentication and Authorization)</td>
    </tr>
    <tr>
     <td>5.</td>
     <td>/tags</td>
     <td>GET</td>
     <td>Get all the post on the basis of tags</td>
     <td>NULL</td>
    </tr>
  </table>
  
 # Features in Frontend
