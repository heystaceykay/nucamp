import React, { Component } from 'react';
import { Text, View, ScrollView, FlatList, Modal, Button, StyleSheet } from 'react-native';
import { Card, Icon, Input } from 'react-native-elements';
import { connect } from 'react-redux';
import { Rating } from 'react-native-ratings';
import { baseUrl } from '../shared/baseUrl';
import { postFavorite } from '../redux/ActionCreators';

const mapStateToProps = state => {
    return {
        campsites: state.campsites,
        comments: state.comments,
        favorites: state.favorites
    };
};

const mapDispatchToProps = {
    postFavorite: campsiteId => (postFavorite(campsiteId)),
    postComment: (campsiteId, rating, author, text) => (postComment(campsiteId, rating, author, text))
};

const RenderCampsite = ({campsite, markFavorite, favorite, onShowModal}) => {
    if (campsite) {
        return (
            <Card
                featuredTitle={campsite.name}
                image={{uri: baseUrl + campsite.image}}>
                <Text style={{margin: 10}}>
                    {campsite.description}
                </Text>
                <View style={styles.cardRow}>
                    <Icon
                        name={favorite ? 'heart' : 'heart-o'}
                        type='font-awesome'
                        color='#f50'
                        raised
                        reverse
                        onPress={() => favorite ? 
                            console.log('Already set as a favorite') : markFavorite()}
                    />
                    <Icon
                        style={styles.cardItem}
                        name='pencil'
                        type='font-awesome'
                        color='#5637DD'
                        raised
                        reverse
                        onPress={() => onShowModal}
                    />
                </View>
            </Card>
        );
    }
}

function RenderComments({comments}) {

    const renderCommentItem = ({item}) => {
        return (
            <View style={{margin: 10}}>
                <Text style={{fontSize: 14}}>{item.text}</Text>
                <Rating
                    style={{alignItems: 'flex-start', paddingVertical: '5%'}}
                    startingValue={item.rating}
                    imageSize={10}
                    readonly={true}
                />
                <Text style={{fontSize: 12}}>{`-- ${item.author}, ${item.date}`}</Text>
            </View>
        );
    };

    return (
        <Card title='Comments'>
            <FlatList
                data={comments}
                renderItem={renderCommentItem}
                keyExtractor={item => item.id.toString()}
            />
        </Card>
    );
}

class CampsiteInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rating: 5,
            author: '',
            text: '',
            showModal: false,
            date: new Date()
      };

      const comments = this.props.comments;
      
    }

    toggleModal() {
          this.setState({showModal: !this.state.showModal});
    }

    handleComment() {
        this.props.postComment(campsiteId, this.state.rating, this.state.author, this.state.text)
        this.toggleModal();
    }

    resetForm() {
        this.setState({
            rating: 5,
            author: '',
            text: '',
            showModal: false,
            });
    }

    markFavorite(campsiteId) {
        this.props.postFavorite(campsiteId);
    }

    static navigationOptions = {
        title: 'Campsite Information'
    }

    render() {
        
        const campsiteId = this.props.navigation.getParam('campsiteId');
        const campsite = this.props.campsites.campsites.filter(campsite => campsite.id === campsiteId)[0];
        const comments = this.props.comments.comments.filter(comment => comment.campsiteId === campsiteId);
        const date = this.state.date.toLocaleDateString('en-US');
        
        return (
            <ScrollView>
                <RenderCampsite campsite={campsite}
                    favorite={this.props.favorites.includes(campsiteId)}
                    markFavorite={() => this.markFavorite(campsiteId)}
                />
                <RenderComments comments={comments} 
                write={comments.includes(campsiteId)}
                handleComment={() => this.handleComment(campsiteId)}
                />
                <Modal
                    animationType='slide'
                    transparent={false}
                    visible={this.state.showModal}
                    onRequestClose={() => this.toggleModal()}
                >
                    <View style={styles.modal}>
                        <Rating
                            style={{paddingVertical: 10}}
                            showRating={true}
                            startingValue={this.state.rating}
                            imageSize={40}
                            onFinishRating={rating => this.setState({rating: rating})}
                        />
                        <Input
                            placeholder='Author'
                            leftIcon={{type: 'font-awesome', name: 'user-o'}}
                            leftIconContainerStyle={{paddingRight: 10}}
                            onChangeText={value => this.setState({author: value})}
                            value={this.state.author}
                        />
                        <Input
                            placeholder='Comment'
                            leftIcon={{type: 'font-awesome', name: 'comment-o'}}
                            leftIconContainerStyle={{paddingRight: 10}}
                            onChangeText={value => this.setState({text: value})}
                            value={this.state.text}
                        />
                        <View style={{margin: 10}}>
                        <Button
                            onPress={() => {
                                this.handleComment(campsiteId);
                                this.resetForm();
                            }}
                            color='#5637DD'
                            title='Submit'
                        />
                        </View>
                        <View style={{margin: 10}}>
                            <Button
                                onPress={() => {
                                    this.toggleModal();
                                    this.resetForm();
                                }}
                                color='#808080'
                                title='Cancel'
                            />
                        </View>
                        <Text style={styles.modalTitle}>Search Campsite Reservations</Text>
                        <Text style={styles.modalText}>
                            Number of Campers: {this.state.campers}
                        </Text>
                        <Text style={styles.modalText}>
                            Hike-In?: {this.state.hikeIn ? 'Yes' : 'No'}
                        </Text>
                        <Text style={styles.modalText}>
                            Date: {date}
                        </Text>
                        <Button
                            onPress={() => {
                                this.toggleModal();
                                this.resetForm();
                            }}
                            color='#5637DD'
                            title='Close'
                        />
                    </View>
            </Modal>    
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    cardRow: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
        margin: 20
    },
    modalStyle: { 
        justifyContent: 'center',
        margin: 20
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(CampsiteInfo);