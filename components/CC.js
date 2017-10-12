function BlockC(props) {
    return (
        <span>
            <span>2: {props.children}</span>
            <style jsx> {`
				span {
					color: red
                }
                `}
            </style>
        </span>
    )
};

export default BlockC