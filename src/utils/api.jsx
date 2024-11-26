export const getCourses = async () => {
    // const res = await fetch("https://hamsterhub.co/getoncourses");
    const res = await fetch("https://hamsterhub.co/getoncourses");
    if (!res.ok) {
      throw new Error("Failed to fetch courses");
    }
    return await res.json();
  };
export const getAssets = async () => {
    const res = await fetch("https://nj.dekhub.com/public");
    if (!res.ok) {
      throw new Error("Failed to fetch assets");
    }
    return await res.json();
  };