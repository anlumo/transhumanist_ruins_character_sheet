import { Columns, Content, Heading, Section } from "react-bulma-components";
import Move from "./move";

export default function Fixer(_props: any) {
    return <Section>
        <Heading>Playbook Moves</Heading>
        <Content>
            <Columns>
                <Columns.Column>
                    <Move name='Navigate the Power Dynamics' stat='SAVY'>
                        When you navigate the complex social dynamics of a futuristic city or community, roll 2d6+SAVY to see how well you do. On a 10+, choose three. On a 7-9, choose two:
                        <ul>
                            <li>You gain valuable information or insight.</li>
                            <li>You avoid making a costly mistake or misstep.</li>
                            <li>You gain the attention or respect of a powerful individual or group.</li>
                            <li>You uncover a hidden weakness or vulnerability.</li>
                            <li>You gain a temporary advantage or leverage.</li>
                        </ul>
                    </Move>
                </Columns.Column>
                <Columns.Column>
                    <Move name='Find Information and Resources' stat='SAVY'>
                        When you search for information or resources in the city or community, roll 2d6+SAVY to see how well you do. On a 10+, choose three. On a 7-9, choose two:
                        <ul>
                            <li>You find the information or resource you were looking for.</li>
                            <li>You avoid drawing unwanted attention or suspicion.</li>
                            <li>You gain valuable insight or knowledge.</li>
                            <li>You uncover a hidden opportunity or threat.</li>
                            <li>You gain the help or support of a valuable ally or contact.</li>
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
                <li>Navigating the complex social dynamics of a futuristic city or community.</li>
                <li>Finding information and resources that can help you or your allies achieve your goals.</li>
                <li>Using your cunning and resourcefulness to outsmart your opponents and gain an advantage in a situation.</li>
            </ul>
        </Content>
    </Section>;
}
