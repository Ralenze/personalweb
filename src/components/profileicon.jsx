import '../index.css'


function ProfileIcon(props) {

    return (

        <>
        <div className="h-56 w-56 rounded-full bg-text border-2 border-text m-4 shadow-[0_0_20px] shadow-white shadow-2xl">
            <img src={props.img} alt="Profile Icon" className="h-full w-full rounded-full object-fit "/>
        </div>
        </>
    )


}

export default ProfileIcon