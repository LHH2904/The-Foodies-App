import sql from 'better-sqlite3';
import slugify from "slugify";
import xss from "xss";
import path from "node:path";
import * as fs from "node:fs";


export interface Meal {
    title: string;
    slug?: string;
    image: string;
    summary: string;
    instructions: string;
    creator: string;
    creator_email: string;
}

const db = sql('meals.db')

// 🌟 HÀM TÁCH RIÊNG: Lưu ảnh vào ổ đĩa
async function saveImage(file: File, filename: string) {
    const buffer = Buffer.from(await file.arrayBuffer());
    const filePath = path.join('public/images', filename);
    fs.writeFileSync(filePath, buffer);
}

export async function getMeals() {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    // throw new Error('Loading meals failed');
    return db.prepare('SELECT * FROM meals').all() as unknown as Meal[];
}

export function getMeal(slug: string) {
    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug) as Meal | undefined;
}

export async function saveMeal(meal: Meal & { imageFile: File }) {
    // 🌟 1. Kiểm tra MIME type
    if (!meal.imageFile.type.startsWith('image/')) {
        throw new Error('Invalid file type. Only images are allowed.');
    }

    meal.slug = slugify(meal.title, {lower: true});
    meal.instructions = xss(meal.instructions);

    const extension = meal.imageFile.name.split('.').pop();
    const fileName = `${meal.slug}-${Date.now()}.${extension}`;
    const filePath = path.join('public/images', fileName);

    // (Optional) Nếu vẫn muốn kiểm tra tồn tại
    if (fs.existsSync(filePath)) {
        throw new Error('A file with the same name already exists.');
    }

    // 🌟 3. Gọi hàm lưu ảnh
    await saveImage(meal.imageFile, fileName);
    
    meal.image = `/images/${fileName}`; // ← lưu đường dẫn đến ảnh

    db.prepare(`
        INSERT INTO meals
            (title, slug, image, summary, instructions, creator, creator_email)
        VALUES (@title,
                @slug,
                @image,
                @summary,
                @instructions,
                @creator,
                @creator_email)
    `).run(meal);
}