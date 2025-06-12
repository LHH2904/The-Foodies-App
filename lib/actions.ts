'use server';

import {saveMeal} from "@/lib/meals";
import {redirect} from "next/navigation";

export async function shareMeal(formData: FormData) {
    const imageFile = formData.get('image');

    // 🛡️ Kiểm tra file ảnh
    if (!(imageFile instanceof File)) {
        throw new Error('Image file is missing or invalid.');
    }

    // 🛡️ Ép kiểu và kiểm tra các trường bắt buộc
    const title = formData.get('title');
    const summary = formData.get('summary');
    const instructions = formData.get('instructions');
    const creator = formData.get('name');
    const creator_email = formData.get('email');

    if (
        typeof title !== 'string' ||
        typeof summary !== 'string' ||
        typeof instructions !== 'string' ||
        typeof creator !== 'string' ||
        typeof creator_email !== 'string'
    ) {
        throw new Error('Form data is invalid.');
    }

    const meal = {
        title,
        summary,
        instructions,
        image: '', // sẽ được gán trong saveMeal
        slug: '',  // sẽ được gán trong saveMeal
        imageFile,
        creator,
        creator_email,
    }

    await saveMeal(meal);
    redirect('/meals');
}