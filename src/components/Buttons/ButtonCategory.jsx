import { Divider } from "@nextui-org/react"
import { BadgeColor } from "../BadgeColor"

export const ButtonCategory = (props) => {

    return (
        <>
            <button class="w-full text-black py-2 px-4 rounded-lg flex gap-4 items-center transition duration-300 ease-in-out hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">
                <BadgeColor color={props.color} />
                <span>{props.label}</span>
            </button><Divider className="my-1" />


        </>
    )
}