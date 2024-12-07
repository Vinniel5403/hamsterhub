export const getCourses = async () => {
  // กำหนด Timeout เป็น 5 วินาที
  const timeout = 5000; // 5000 มิลลิวินาที (5 วินาที)
  const controller = new AbortController();
  const timeoutId = setTimeout(() => {
    controller.abort(); // ยกเลิกคำขอเมื่อถึง Timeout
  }, timeout);

  try {
    const res = await fetch("https://hamsterhub.co/getoncourses", {
      signal: controller.signal, // ส่งสัญญาณ AbortController
    });

    clearTimeout(timeoutId); // ล้าง Timeout ถ้าคำขอสำเร็จ

    if (!res.ok) {
      throw new Error("Failed to fetch courses"); // เช็คสถานะของการตอบกลับ
    }

    return await res.json(); // คืนค่า JSON เมื่อสำเร็จ
  } catch (error) {
    if (error.name === "AbortError") {
      console.error("Request timeout after 5 seconds");
    } else {
      console.error("Fetch error:", error.message);
    }
    throw error; // โยนข้อผิดพลาดให้ฟังก์ชันที่เรียกใช้งานจัดการต่อ
  }
};
