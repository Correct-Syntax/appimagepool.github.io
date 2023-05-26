
function Button(props: any) {
    const linkPath: string = props.link

    if (props.isAccented == true) {
        return <a href={linkPath} className="bg-accent text-white w-180px h-14 rounded-md flex flex-row justify-center place-items-center text-center cursor-pointer hover:bg-secondary hover:text-accent ease-in-out duration-300">{ props.text }</a>;
    }
    
    if (props.isFlat == true) {
        return <a href={ linkPath } className="text-accent hover:bg-secondary w-180px h-14 rounded-md flex flex-row justify-center place-items-center text-center cursor-pointer ease-in-out duration-300" >{ props.text }</a>;
    }
    
    return <a href={  linkPath } className="text-accent hover:bg-secondary w-180px h-14 rounded-md flex flex-row justify-center place-items-center text-center cursor-pointer ease-in-out duration-300">{ props.text }</a>;
}

export default Button
