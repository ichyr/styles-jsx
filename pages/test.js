import BlockA from '../components/CA'
import BlockB from '../components/CB'

function Test() {
	return (
		<BlockA><BlockB>SHOULD NOT BE BOLD AND RED</BlockB></BlockA>
	)
}

export default Test