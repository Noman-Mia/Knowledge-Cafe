import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className="text-4xl font-bold flex justify-between container mx-auto
         items-center border-b-4 m-4">
            <h1>Knowladge-Cafe</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;  