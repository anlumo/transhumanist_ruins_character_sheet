import { Columns, Content, Heading, Section } from "react-bulma-components";
import Move from "./move";

export default function Hacktivist(_props: any) {
    return <Section>
        <Heading>Playbook Moves</Heading>
        <Content>
            <Columns>
                <Columns.Column>
                    <Move name='Combat Training' stat='RESILIENCE'>
                        You have been trained to fight in various combat scenarios and can use your physical toughness and resilience to fight your enemies. This move can be used in hand-to-hand combat, with firearms, or with advanced weapons. When using this move, roll 2d6+RESILIENCE.
                        <ul>
                            <li>On a 7-9, you succeed in your attack but suffer a minor setback. You might take a graze, or your equipment malfunctions.</li>
                            <li>On a 10+, you not only succeed but you also uncover an opportunity or an ally. You might have an opening to disarm your enemy, or discover a hidden weapon or a way to escape.</li>
                        </ul>
                    </Move>
                </Columns.Column>
                <Columns.Column>
                    <Move name='Demolitions' stat='TECH'>
                        You have knowledge and skill in the use of explosives, can rig and disarm them, and can use them to gain an advantage on the battlefield. This move can be used to destroy obstacles, create cover or take out a group of enemies at once. When using this move, roll 2d6+TECH:
                        <ul>
                            <li>On a 7-9, you succeed in your action but something goes wrong. You might cause more damage than intended, or put yourself in danger.</li>
                            <li>On a 10+, you not only succeed but you also uncover an opportunity or an ally. You might cause a collapse to create a new passage, or use the explosion as a diversion to escape unnoticed.</li>
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
                <li>Rescuing or recruiting other former corporate soldiers or operatives.</li>
                <li>Taking significant steps towards finding a new home or sense of belonging.</li>
                <li>Taking a stand against injustice or oppression, even if it puts you at risk.</li>
            </ul>
        </Content>
    </Section>;
}
