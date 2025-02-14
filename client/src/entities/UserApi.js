export class UserApi{
  static async create(inputs){
    const response = await fetch('/api/users',
    {method:'POST',
    headers:{
      'Content-Type':'application/json',
    }, 
    body: JSON.stringify(inputs),
  });
  return await response.json()
}
}