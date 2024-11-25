import HeaderRightContent from "./HeaderRightContent";

export default function Header(params) {
    return (
        <header className="flex w-full border-b-2">
            <div className="w-[30%] border-r-2 content-center pl-5">
                <span className="font-semibold">Project M.</span>
            </div>
            <div className="w-full p-5">
                <HeaderRightContent />
            </div>
        </header>
    );
}
