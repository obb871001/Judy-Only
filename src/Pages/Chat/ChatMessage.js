import React, { Component } from 'react';

const ChatMessage = (props) =>{
    const { text , id } = props.message;

    return <p>{text}</p>
};

export default ChatMessage