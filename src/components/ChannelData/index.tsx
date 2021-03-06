import React, { useRef, useEffect} from 'react';

import ChannelMessage, {Mention} from '../ChannelMessage';

import { Container,Messages, InputWrapper, Input, InputIcon } from './styles';


const ChannelData: React.FC = () => {

    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        const div = messagesRef.current;

        if(div) {
            div.scrollTop = div.scrollHeight;
        }
    }, [messagesRef]);

    return(
        <Container>
            <Messages ref={messagesRef}>
                <ChannelMessage
                    author="João Oliveira"
                    date="26/10/1999"
                    content="Hoje é o meu aniversário"
                />

                <ChannelMessage
                    author="João Oliveira"
                    date="26/10/1999"
                    content="Hoje é o meu aniversário"
                />

                <ChannelMessage
                    author="João Oliveira"
                    date="26/10/1999"
                    content="Hoje é o meu aniversário"
                />

                <ChannelMessage
                    author="João Oliveira"
                    date="26/10/1999"
                    content="Hoje é o meu aniversário"
                />

                <ChannelMessage
                    author="João Oliveira"
                    date="26/10/1999"
                    content="Hoje é o meu aniversário"
                />

                <ChannelMessage
                    author="João Oliveira"
                    date="26/10/1999"
                    content="Hoje é o meu aniversário"
                />

                <ChannelMessage
                    author="João Oliveira"
                    date="26/10/1999"
                    content="Hoje é o meu aniversário"
                />

                <ChannelMessage
                    author="João Oliveira"
                    date="26/10/1999"
                    content="Hoje é o meu aniversário"
                />

                <ChannelMessage
                    author="João Oliveira"
                    date="26/10/1999"
                    content="Hoje é o meu aniversário"
                />
                <ChannelMessage
                    author="João Oliveira"
                    date="26/10/1999"
                    content="Hoje é o meu aniversário"
                />
                <ChannelMessage
                    author="João Oliveira"
                    date="26/10/1999"
                    content="Hoje é o meu aniversário"
                />
                <ChannelMessage
                    author="João Oliveira"
                    date="26/10/1999"
                    content="Hoje é o meu aniversário"
                />
                <ChannelMessage
                    author="João Oliveira"
                    date="26/10/1999"
                    content="Hoje é o meu aniversário"
                />
                <ChannelMessage
                    author="João Oliveira"
                    date="26/10/1999"
                    content="Hoje é o meu aniversário"
                />
                <ChannelMessage
                    author="João Oliveira"
                    date="26/10/1999"
                    content="Hoje é o meu aniversário"
                />
                <ChannelMessage
                    author="João Oliveira"
                    date="26/10/1999"
                    content="Hoje é o meu aniversário"
                />
                <ChannelMessage
                    author="João Oliveira"
                    date="26/10/1999"
                    content="Hoje é o meu aniversário"
                />
                <ChannelMessage
                    author="João Oliveira"
                    date="26/10/1999"
                    content="Hoje é o meu aniversário"
                />
                
                <ChannelMessage
                    author="Renan Cavalcante"
                    date="06/03/2021"
                    content={
                        <>
                            <Mention>@João Oliveira</Mention>, Me carrega no LoL com seu Teemo top.
                        </>
                    }
                    hasMention
                    isBot
                />
            </Messages>

            <InputWrapper>
                <Input type="text" placeholder="Conversar em #chat-livre"/>
                <InputIcon/>
            </InputWrapper>
        </Container>
    )
}

export default ChannelData;