function BlockA(props) {
    return (
        <span>
            <span>1: {props.children}</span>
            <style jsx> {`
				span {
					color: red
                }
                `}
            </style>
        </span>
    )
};

export default BlockA