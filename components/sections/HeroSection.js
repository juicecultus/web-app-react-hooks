import styled, { keyframes } from 'styled-components'
import { themes } from '../../styles/ColorStyles'
import { H1, MediumText } from '../../styles/TextStyles'
import MockupAnimation from '../animations/MockupAnimation'
import WaveBackgrounds from '../backgrounds/WaveBackgrounds'
import PurchaseButton from '../buttons/PurchaseButton'

export default function HeroSection() {
	return (
		<Wrapper>
			<WaveBackgrounds />
			<ContentWrapper>
				<TextWrapper>
					<Title>
						This
						<br /> is the
						<br /> <span>Hero</span> Section
					</Title>
					<Description>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua.
					</Description>
					<PurchaseButton
						title='Start learning'
						subtitle='120+ hours of video'
					/>
				</TextWrapper>
				<MockupAnimation />
			</ContentWrapper>
		</Wrapper>
	)
}

const animation = keyframes`
    0% {opacity: 0; transform: translateY(-10px); filter: blur(10px);}
    100% { opacity: 1; transform: translateY(0px); filter: blur(0px);}
`

const Wrapper = styled.div`
	overflow: hidden;
`
const ContentWrapper = styled.div`
	max-width: 1234px;
	margin: 0 auto;
	padding: 200px 30px;
	display: grid;
	grid-template-columns: 360px auto;

	@media (max-width: 450px) {
		grid-template-columns: auto;
		gap: 60px;
		padding: 150px 20px 250px;
	}
`

const TextWrapper = styled.div`
	max-width: 360px;
	display: grid;
	gap: 30px;

	> * {
		opacity: 0;
		animation: ${animation} 1s forwards;

		:nth-child(1) {
			animation-delay: 0s;
		}
		:nth-child(2) {
			animation-delay: 0.25s;
		}
		:nth-child(3) {
			animation-delay: 0.5s;
		}
	}
`
const Title = styled(H1)`
	color: ${themes.dark.text1};
	background: linear-gradient(180deg, #730040 0%, #301cbe 100%);
	background-clip: text;
	-webkit-background-clip: text;
	color: transparent;

	span {
		background: linear-gradient(180deg, #ffd7ff 0%, #ffb6ff 100%);
		background-clip: text;
		-webkit-background-clip: text;
		color: transparent;
	}

	@media (max-width: 450px) {
		font-size: 48px;
	}
`
const Description = styled(MediumText)``
