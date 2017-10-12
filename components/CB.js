function BlockB(props) {
	return (
		<span>
			<span>{props.children}</span>
			<style jsx> {`
				span {
					font-weight: bold
				}`}
			</style>
		</span>
	)
}

export default BlockB