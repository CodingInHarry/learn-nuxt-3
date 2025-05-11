import type { CoursesReturn } from "~/types/course";

export const useCourse = async (courseSlug: string): Promise<CoursesReturn> => {
  const { data, error } = await useFetch(`/api/courses/${courseSlug}`);

  if (error.value) {
    throw createError({
      ...error.value,
    });
  }

  return data.value as CoursesReturn;
};
