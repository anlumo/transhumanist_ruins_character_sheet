import { Columns, Content, Heading, Section } from "react-bulma-components";
import Move from "./move";

export default function Scavenger(_props: any) {
    return <Section>
        <Heading>Playbook Moves</Heading>
        <Content>
            <Columns>
                <Columns.Column>
                    <Move name='Scavenge for Resources' stat='SAVY'>
                        When you scavenge for valuable resources in the ruins of a fallen society, roll+SAVY to see how well you do. On a 10+, choose three. On a 7-9, choose two:
                        <ul>
                            <li>You find a valuable resource or piece of equipment.</li>
                            <li>You uncover a hidden cache or stash.</li>
                            <li>You avoid danger or traps.</li>
                            <li>You discover valuable information or clues.</li>
                            <li>You gain the attention of a potential ally or enemy.</li>
                        </ul>
                    </Move>
                </Columns.Column>
                <Columns.Column>
                    <Move name='Trade and Negotiate' stat='SAVY'>
                        When you scavenge for valuable resources in the ruins of a fallen society, roll+Savvy to see how well you do. On a 10+, choose three. On a 7-9, choose two:
                        <ul>
                            <li>You get a good deal and gain a valuable resource or ally.</li>
                            <li>You suffer a setback but learn something valuable.</li>
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
                <li>Scavenging for valuable resources in the ruins of a fallen society.</li>
                <li>Trading or negotiating with other scavengers or survivors to gain resources or allies.</li>
                <li>Using your knowledge of the wasteland to survive and thrive in a hostile environment.</li>
            </ul>
        </Content>
    </Section>;
}
