export class QuestionsApi {
  static async getAllById(id) {
    const response = await fetch(`/api/questions/${id}`);
    const  result = await response.json();
    return result
  }
}
