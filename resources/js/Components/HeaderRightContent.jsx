import SearchBar from "./SearchBar";

export default function HeaderRightContent() {
    const icons = [
        "images/calendar.svg",
        "images/message-question.svg",
        "images/notification.svg",
    ];
    return (
        <div className="flex justify-between">
            <SearchBar />
            <div className="flex w-[55%] justify-end">
                {icons.map((icon) => (
                    <img
                        src={icon}
                        className="scale-50 hover:cursor-pointer"
                    ></img>
                ))}
            </div>
        </div>
    );
}
