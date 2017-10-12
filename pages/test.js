import BlockA from '../components/CA'
import BlockB from '../components/CB'
import BlockC from '../components/CC'
import BlockD from '../components/CD'

function Test() {
    return (
        <div>
            <BlockA>
                <BlockB>SHOULD NOT BE BOLD AND RED</BlockB></BlockA>
            <BlockA><BlockD>SHOULD NOT BE BOLD AND RED</BlockD></BlockA>
        </div>
    )
}

export default Test