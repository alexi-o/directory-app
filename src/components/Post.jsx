import React from 'react';

const Post = (props) => (  //stateless functional component
	<tbody>
		<tr>
			{ 
				props.postBody.map((postPart, idx) => (
				<td key={idx}>{postPart}</td>
				)) 
				}
		</tr>
	</tbody>
);

export default Post;