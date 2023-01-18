import { Columns, Content, Heading, Section } from "react-bulma-components";
import Move from "./move";

export default function Nomad(_props: any) {
    return <Section>
        <Heading>Playbook Moves</Heading>
        <Content>
            <Columns>
                <Columns.Column>
                    <Move name='Survive in the Wasteland' stat='SAVY'>
                        When you struggle to survive in the wasteland, roll 2d6+SAVY to see how well you do. On a 10+, choose three. On a 7-9, choose two:
                        <ul>
                            <li>You find food, water, shelter, or other resources.</li>
                            <li>You avoid danger or hostile creatures.</li>
                            <li>You discover valuable information or clues.</li>
                            <li>You gain the help or support of a friendly tribe or community.</li>
                            <li>You uncover a hidden opportunity or threat.</li>
                        </ul>
                    </Move>
                </Columns.Column>
                <Columns.Column>
                    <Move name='Track, Hunt, and Navigation' stat='SAVY'>
                        When you track, hunt, or navigate in the wasteland, roll 2d6+SAVY to see how well you do. On a 10+, choose three. On a 7-9, choose two:
                        <ul>
                            <li>You find your target or destination quickly and efficiently.</li>
                            <li>You avoid making a costly mistake or misstep.</li>
                            <li>You gain valuable insight or knowledge about your surroundings.</li>
                            <li>You uncover a hidden weakness or vulnerability in your target or destination.</li>
                            <li>You gain a temporary advantage or leverage over your target or destination.</li>
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
                <li>Surviving in the wasteland by finding food, water, shelter, and other resources.</li>
                <li>Tracking, hunting, and navigating in the wasteland to find your target or destination.</li>
                <li>Using your knowledge of the wasteland to avoid danger and stay one step ahead of your enemies.</li>
            </ul>
        </Content>
    </Section>;
}
