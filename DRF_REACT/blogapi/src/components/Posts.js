import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
	cardMedia: {
		paddingTop: '56.25%', // 16:9
	},
	link: {
		margin: theme.spacing(1, 1.5),
	},
	cardHeader: {
		backgroundColor:
			theme.palette.type === 'light'
				? theme.palette.grey[200]
				: theme.palette.grey[700],
	},
	postTitle: {
		fontSize: '16px',
		textAlign: 'left',
	},
	postText: {
		display: 'flex',
		justifyContent: 'left',
		alignItems: 'baseline',
		fontSize: '12px',
		textAlign: 'left',
		marginBottom: theme.spacing(2),
	},
}));

const Posts = (props) => {
	const { posts } = props;
	const classes = useStyles();
	if (!posts || posts.length === 0) return <p>Can not find any posts, sorry</p>;
	return (
		<React.Fragment>
			<Container maxWidth="md" component="main">
				<Grid container spacing={5} alignItems="flex-end">
					
							<Grid item key={posts.id}  xs={12} md={4}>
							<Card className={classes.card}>
								
								<CardMedia
									className={classes.cardMedia}
									image="https://source.unsplash.com/1600x900/?nature,water"
									title="Image title"
								/>

								<CardContent className={classes.cardContent}>
									<Typography
										gutterBottom
										variant="h6"
										component="h2"
										className={classes.postTitle}
									>
										Cricket World Cup 1996 Champions-SriLanka...
									</Typography>
									<div className={classes.postText}>
										<Typography
											component="p"
											color="textPrimary"
										></Typography>
										<Typography variant="p" color="textSecondary">
										{posts.excerpt}...
										</Typography>
									</div>
								</CardContent>
							</Card>
							</Grid>

							<Grid item key={posts.id}  xs={12} md={4}>
							<Card className={classes.card}>
								
								<CardMedia
									className={classes.cardMedia}
									image="https://images.pexels.com/photos/34600/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
									title="Image title"
								/>

								<CardContent className={classes.cardContent}>
									<Typography
										gutterBottom
										variant="h6"
										component="h2"
										className={classes.postTitle}
									>
										New Technology Trends HONOR Band 5...
									</Typography>
									<div className={classes.postText}>
										<Typography
											component="p"
											color="textPrimary"
										></Typography>
										<Typography variant="p" color="textSecondary">
										{posts.excerpt}...
										</Typography>
									</div>
								</CardContent>
							</Card>
							</Grid>

							<Grid item key={posts.id}  xs={12} md={4}>
							<Card className={classes.card}>
								
								<CardMedia
									className={classes.cardMedia}
									image="https://source.unsplash.com/user/erondu/1600x900"
									title="Image title"
								/>

								<CardContent className={classes.cardContent}>
									<Typography
										gutterBottom
										variant="h6"
										component="h2"
										className={classes.postTitle}
									>
										Learn to Love yourself...
									</Typography>
									<div className={classes.postText}>
										<Typography
											component="p"
											color="textPrimary"
										></Typography>
										<Typography variant="p" color="textSecondary">
										{posts.excerpt}...
										</Typography>
									</div>
								</CardContent>
							</Card>
							</Grid>

						
					
					
				</Grid>
			</Container>

		<Container maxWidth="md" component="main">
		<Typography variant="h6" color="inherit" noWrap>
	
          Most Commented Posts
		
        </Typography>
				<Grid container spacing={6} alignItems="flex-end">
					
							<Grid item key={posts.id}  xs={12} md={4}>
							<Card className={classes.card}>
								
								<CardMedia
									className={classes.cardMedia}
									image="https://source.unsplash.com/user/erondu"
									title="Image title"
								/>

								<CardContent className={classes.cardContent}>
									<Typography
										gutterBottom
										variant="h6"
										component="h2"
										className={classes.postTitle}
									>
										Build yourself...
									</Typography>
									<div className={classes.postText}>
										<Typography
											component="p"
											color="textPrimary"
										></Typography>
										<Typography variant="p" color="textSecondary">
										{posts.excerpt}...
										</Typography>
									</div>
								</CardContent>
							</Card>
							</Grid>

							<Grid item key={posts.id}  xs={12} md={4}>
							<Card className={classes.card}>
								
								<CardMedia
									className={classes.cardMedia}
									image="https://source.unsplash.com/WLUHO9A_xik/1600x900"
									title="Image title"
								/>

								<CardContent className={classes.cardContent}>
									<Typography
										gutterBottom
										variant="h6"
										component="h2"
										className={classes.postTitle}
									>
										Reading make a great leaders...
									</Typography>
									<div className={classes.postText}>
										<Typography
											component="p"
											color="textPrimary"
										></Typography>
										<Typography variant="p" color="textSecondary">
										{posts.excerpt}...
										</Typography>
									</div>
								</CardContent>
							</Card>
							</Grid>

							<Grid item key={posts.id}  xs={12} md={4}>
							<Card className={classes.card}>
								
								<CardMedia
									className={classes.cardMedia}
									image="https://source.unsplash.com/daily"
									title="Image title"
								/>

								<CardContent className={classes.cardContent}>
									<Typography
										gutterBottom
										variant="h6"
										component="h2"
										className={classes.postTitle}
									>
										The place Where life begin...
									</Typography>
									<div className={classes.postText}>
										<Typography
											component="p"
											color="textPrimary"
										></Typography>
										<Typography variant="p" color="textSecondary">
										{posts.excerpt}...
										</Typography>
									</div>
								</CardContent>
							</Card>
							</Grid>

						
					
					
				</Grid>
			</Container>

		</React.Fragment>
	);
};
export default Posts;


// {posts.map((post) => {
// 	return (
// 		// Enterprise card is full width at sm breakpoint
// 		<Grid item key={post.id} xs={12} md={4}>
// 			<Card className={classes.card}>
				
// 				<CardMedia
// 					className={classes.cardMedia}
// 					image="https://images.pexels.com/photos/34600/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
// 					title="Image title"
// 				/>

// 				<CardContent className={classes.cardContent}>
// 					<Typography
// 						gutterBottom
// 						variant="h6"
// 						component="h2"
// 						className={classes.postTitle}
// 					>
// 						{post.title}...
// 					</Typography>
// 					<div className={classes.postText}>
// 						<Typography
// 							component="p"
// 							color="textPrimary"
// 						></Typography>
// 						<Typography variant="p" color="textSecondary">
// 						{post.excerpt}...
// 						</Typography>
// 					</div>
// 				</CardContent>
// 			</Card>
// 		</Grid>
// 		);
//})}