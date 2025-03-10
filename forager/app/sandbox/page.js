import FilterSettings from "../../components/FilterSettings";
import PillList from "../../components/PillList";
import Message from "@/components/Message";
import Search from "@/components/Search";
import MushroomCard from "@/components/MushroomCard";
import MushroomList from "../../components/MushroomList";


export default function SandboxPage() {
    const items = ['Item 1', 'Item 2', 'Item 3']; // Define the items array

    return (
      <div className="page flex items-center flex-row">
        {/* <FilterSettings /> */}
        {/* <Search /> */}
        {/* <Message /> */}
        {/* <MushroomCard mushroom={{name: 'Death Cap', image: "icons/death_cap.png" }} /> */}
        {/* <FilterSettings /> */}
      </div>
    );
}