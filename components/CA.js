function BlockA(props) {
    return (
        <span>
            <span>{props.children}</span>
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