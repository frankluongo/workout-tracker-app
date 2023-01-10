export async function appFetch(url: string, method: string = 'GET', data?: object | null) {
  const body = data ? JSON.stringify(data) : null;
  try {
    const res = await fetch(url, { method, body });
    return await res.json();
  } catch(e) {
    console.error(e);
  }
}