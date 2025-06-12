'use server';

import {saveMeal} from "@/lib/meals";
import {redirect} from "next/navigation";
import {revalidatePath} from "next/cache";

function isInvalidText(text: string) {
    return !text || text.trim() === '';
}

export async function shareMeal(_: unknown, formData: FormData) {
    const imageFile = formData.get('image');

    // 🛡️ Kiểm tra file ảnh
    if (!(imageFile instanceof File) || imageFile.size === 0) {
        throw new Error('Image file is missing or invalid.');
    }

    // 🛡️ Ép kiểu và kiểm tra các trường bắt buộc
    const title = formData.get('title');
    const summary = formData.get('summary');
    const instructions = formData.get('instructions');
    const creator = formData.get('name');
    const creator_email = formData.get('email');

    const requiredFields = [title, summary, instructions, creator, creator_email];
    if (requiredFields.some(field => typeof field !== 'string' || isInvalidText(field))) {
        return {message: 'Invalid input.'};
    }

    if (!(creator_email as string).includes('@')) {
        return {message: 'Invalid email address.'};
    }

    const meal = {
        title: title as string,
        summary: summary as string,
        instructions: instructions as string,
        image: '', // sẽ được set trong saveMeal
        slug: '',  // sẽ được set trong saveMeal
        imageFile: imageFile as File,
        creator: creator as string,
        creator_email: creator_email as string,
    };

    await saveMeal(meal);
    revalidatePath('/meals')
    redirect('/meals');
}