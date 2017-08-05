import React from 'react';

const Post = (props) => (  //stateless functional component
	<div className="panel panel-default post-editor">
		<div className="panel-body">
			{ props.postBody }
		</div>
	</div>
	);

export default Post;