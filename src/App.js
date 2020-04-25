import React from 'react';
import './App.css';
import {Grid} from '@material-ui/core';
import youtube from "./api/youtube";
import SearchBar from "./Component/SearchBar";
import VideoDetail from "./Component/VideoDetail";

class App extends React.Component {

    state={
        videos:[],
        selectedVideo:null
    };

    handleSubmit = async (searchItem) => {
        const response = await youtube.get('search', {params:{
                part:'snippet',
                maxResults:5,
                key:'AIzaSyC47uGi3WKDnhaoUgxMDVtFGhQ9z6yQpME',
                q:searchItem
            }});

        console.log(response.data.items);
        this.setState({
            videos:response.data.items,
            selectedVideo:response.data.items[0]
        });
    };

    render() {
        return (
            <Grid justigy="center" container spacing={10}>
                <Grid item xs={12}>
                    <Grid container spacing={10}>
                        <Grid item xs={12}>
                            <SearchBar onFormSubmit={this.handleSubmit}/>
                        </Grid>
                        <Grid item xs={8}>
                            <VideoDetail video={this.state.selectedVideo} />
                        </Grid>
                        <Grid item xs={4}>

                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default App;
