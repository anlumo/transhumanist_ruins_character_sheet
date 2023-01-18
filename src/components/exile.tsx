import { Columns, Content, Heading, Section } from "react-bulma-components";
import Move from "./move";

export default function Exile(_props: any) {
    return <Section>
        <Heading>Playbook Moves</Heading>
        <Content>
            <Columns>
                <Columns.Column>
                    <Move name='Avoid Detection and Stay Out of Sight' stat='RESILIENCE'>
                        When you avoid detection and stay out of sight, roll+Resilience to see how well you do. On a 10+, choose three. On a 7-9, choose two:
                        <ul>
                            <li>You successfully hide or escape from your pursuers.</li>
                            <li>You avoid making a costly mistake or misstep.</li>
                            <li>You gain valuable insight or knowledge about your surroundings.</li>
                            <li>You uncover a hidden weakness or vulnerability in your pursuers.</li>
                            <li>You gain a temporary advantage or leverage over your pursuers.</li>
                        </ul>
                    </Move>
                </Columns.Column>
                <Columns.Column>
                    <Move name='Tinkerer' stat='TECH'>
                        You are able to improvise and modify equipment and technology to suit your needs, whether it's to make a weapon more effective, a shelter more comfortable or a vehicle more reliable. This move can be used to repair broken equipment, jury-rig a solution, or build something new from scavenged parts. When using this move, roll 2d6+TECH.
                        <ul>
                            <li>On a 7-9, you are able to accomplish your task, but something goes wrong. The equipment you were working on may malfunction or break down again soon. The shelter you built leaks or is not very secure. Whatever the case, it's not optimal.</li>
                            <li>On a 10+, you are able to accomplish your task and do it well. The weapon you modified is more effective, the shelter you built is sturdy and comfortable, and the vehicle you fixed is running well.</li>
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
                <li>Surviving on the fringes of society by finding food, water, shelter, and other resources.</li>
                <li>Avoiding detection and staying out of sight to avoid capture or pursuit.</li>
                <li>Using your knowledge of the wasteland to find hidden opportunities or threats.</li>
            </ul>
        </Content>
    </Section>;
}
