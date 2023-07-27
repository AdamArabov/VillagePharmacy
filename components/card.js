export default function Card ({children,noPadding}){
    let classes = "bg-white shadow-lg   mb-5 overflow-hidden"
    if(!noPadding){
        classes += ' p-2'
    }
    return(
        // <div className="container mx-auto mt-10">
            <div className={classes}>
                {children}
            {/* </div> */}
        </div>
    )
}