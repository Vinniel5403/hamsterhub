export const getCourses = async () => {
    // const res = await fetch("https://hamsterhub.co/getoncourses");
    const res = await fetch("https://hamsterhub.co/getoncourses");
    if (!res.ok) {
      throw new Error("Failed to fetch courses");
    }
    return await res.json();
  };
