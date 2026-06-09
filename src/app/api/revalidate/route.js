import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

// Panelden tetiklenen on-demand cache temizleme endpoint'i.
// Gizli token ile korunur; tüm site cache'ini (tüm sayfalar dahil) yeniler.
export async function POST(request) {
  const secret =
    request.headers.get("x-revalidate-secret") ||
    request.nextUrl.searchParams.get("secret");

  if (!process.env.REVALIDATE_SECRET || secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ error: "Yetkisiz istek" }, { status: 401 });
  }

  try {
    // Root layout'u yenilemek altındaki tüm sayfaları (statik ve dinamik) temizler.
    revalidatePath("/", "layout");

    return NextResponse.json({
      revalidated: true,
      now: Date.now(),
    });
  } catch (error) {
    return NextResponse.json(
      { revalidated: false, error: error.message },
      { status: 500 }
    );
  }
}
