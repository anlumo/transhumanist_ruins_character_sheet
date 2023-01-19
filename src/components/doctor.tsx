import { Columns, Content, Heading, Section } from "react-bulma-components";
import Move from "./move";

export default function Doctor(_props: any) {
    return <Section>
        <Heading>Playbook Moves</Heading>
        <Content>
            <Columns>
                <Columns.Column>
                    <Move name='First Aid' stat='TECH'>
                        When your character wants to use their medical knowledge to heal an injury, roll 2d6+TECH:
                        <ul>
                            <li>On a 10+, the target character regains 3 hit points.</li>
                            <li>On a 7-9, the target character regains 2 hit points.</li>
                            <li>On a miss, the target character regains 1 hit point.</li>
                        </ul>
                        If a character's hit points are already at maximum, this move will not have any effect.
                    </Move>
                </Columns.Column>
                <Columns.Column>
                    <Move name='Diagnosis' stat='SAVY'>
                        This move is used when your character wants to diagnose an illness or injury. Roll 2d6+SAVVY:
                        <ul>
                            <li>On a 7-9, your character is able to diagnose the condition but not the cause.</li>
                            <li>On a 10+, your character is able to diagnose the condition and the cause.</li>
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
                <li>Saving a patient's life.</li>
                <li>Using your medical knowledge to outsmart an opponent in a non-violent confrontation.</li>
                <li>Performing a difficult medical procedure under pressure.</li>
            </ul>
        </Content>
    </Section>;
}
