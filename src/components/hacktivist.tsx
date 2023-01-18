import { Columns, Content, Heading, Section } from "react-bulma-components";
import Move from "./move";

export default function Hacktivist(_props: any) {
    return <Section>
        <Heading>Playbook Moves</Heading>
        <Content>
            <Columns>
                <Columns.Column>
                    <Move name='Hack the System' stat='TECH'>
                        When you hack a computer or cybernetic implant, roll 2d6+TECH to see how much information you can uncover or how much control you can gain over the system. On a 10+, choose three. On a 7-9, choose two:
                        <ul>
                            <li>You gain access to sensitive or restricted information.</li>
                            <li>You disrupt or disable a security system.</li>
                            <li>You gain temporary control over a machine or device.</li>
                            <li>You uncover a hidden weakness or vulnerability.</li>
                            <li>You avoid detection or traceback.</li>
                        </ul>
                    </Move>
                </Columns.Column>
                <Columns.Column>
                    <Move name='Stand for Something' stat='SAVY'>
                        When you take a risk or make a sacrifice to defend a cause or protect the weak, roll 2d6+SAVY to see how well you handle the situation. On a 10+, the GM will give you two options for how your actions affect the situation. On a 7-9, the GM will give you one option:
                        <ul>
                            <li>You achieve your goal and make a positive difference.</li>
                            <li>You suffer a setback but inspire others to follow your example.</li>
                            <li>You create complications for yourself or others but gain a valuable ally or resource.</li>
                        </ul>
                    </Move>
                </Columns.Column>
            </Columns>
        </Content>
        <Heading>Gain XP for:</Heading>
        <Content className="xpgain">
            <ul>
                <li>Complete a major goal or objective: When a player's character achieves a significant goal or objective, they can be awarded XP. This could include completing a quest or mission, defeating a powerful enemy, or solving a difficult problem.</li>
                <li>Advance the story: When a player's actions or choices contribute to advancing the story in a meaningful way, they can be awarded XP. This could include making a tough decision, uncovering a crucial piece of information, or taking a risk that has important consequences.</li>
                <li>Using your hacking skills to fight for a cause or challenge the power structures of the world.</li>
                <li>Taking risks or making sacrifices to defend the weak or protect the innocent.</li>
                <li>Using your knowledge of technology and systems to gain an advantage in a situation.</li>
            </ul>
        </Content>
    </Section>;
}
