import { Component } from "react";
import { Content, Heading, Section } from "react-bulma-components";

export default function Scavenger(props: any) {
    return <Section>
        <Heading>Basic Moves</Heading>
        <Content>
            <ul>
                <li>
                    Hack the System: When you hack a computer or cybernetic implant, roll+Tech to see how much information you can uncover or how much control you can gain over the system. On a 10+, choose three. On a 7-9, choose two:
                    <ul>
                        <li>You gain access to sensitive or restricted information.</li>
                        <li>You disrupt or disable a security system.</li>
                        <li>You gain temporary control over a machine or device.</li>
                        <li>You uncover a hidden weakness or vulnerability.</li>
                        <li>You avoid detection or traceback.</li>
                    </ul>
                </li>
            </ul>
        </Content>
    </Section>;
}
