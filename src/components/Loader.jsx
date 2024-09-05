import { Html } from "@react-three/drei"


const Loader = ()=>{
    return (
        <Html>
            <div className="w-full h-full absolute top-0 left-0 flex justify-center items-center">
                <div className="w-[10vw] h-[10vh] rounded-full">
                    Loading....
                </div>

            </div>
        </Html>
    )
}

export default Loader