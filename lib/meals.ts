import sql from 'better-sqlite3';
import {MealItemProps} from "@/components/meals/meal-item";

const db = sql('meals.db')

export async function getMeals() {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return db.prepare('SELECT * FROM meals').all() as unknown as MealItemProps[];
}