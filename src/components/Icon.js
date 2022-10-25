import SVG from "react-inlinesvg";
export const Icon = ({ name, width, height, ...props }) => {
    return (
        <SVG src={`${process.env.PUBLIC_URL}/icons/${name}.svg`}
            width={width}
            height={height}
            {...props} />
    )
}