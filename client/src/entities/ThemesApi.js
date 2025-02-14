export default class ThemesApi {
  static async getAll() {
    const response = await fetch('/api/topics');
    return await response.json();
  }

  static async getById(id) {
    const response = await fetch(`/api/topics/${id}`);
    return await response.json();
  }
}
