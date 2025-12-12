'use server';
 
import { revalidateTag } from 'next/cache';
 
export async function updateTop10() {
  revalidateTag('top10');
}

