import MealItem from "@/components/meals/meal-item";
import {Meal} from "@/lib/meals";

interface MealsGridProps {
    meals: Meal[]
}

export default function MealsGrid({meals}: MealsGridProps) {
    return (
        <ul
            className="w-[90%] max-w-[90rem] grid grid-cols-[repeat(auto-fill,minmax(20rem,1fr))] gap-[5rem] my-8 mx-auto list-none p-0"
        >
            {meals.map(meal => (
                <li key={meal.slug}>
                    <MealItem {...meal} />
                </li>
            ))}
        </ul>
    )
}