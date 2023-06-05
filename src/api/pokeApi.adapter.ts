export interface HttpAdapter {
  get<T>(url: string): Promise<T>
}

export class PokeApiAdapter implements HttpAdapter {

  async get<T>(url: string): Promise<T> {
    const response = await fetch(url)
    const data = await response.json()
    return data
  }

  async post(url: string, body: any) {
    throw new Error("Method not implemented.")

  }

  async put(url: string, body: any) {
    throw new Error("Method not implemented.")

  }

  async delete(url: string) {
    throw new Error("Method not implemented.")
  }
}

export class PokeApiAxiosAdapter implements HttpAdapter {

  async get<T>(url: string): Promise<T> {
    const response = await fetch(url)
    const data = await response.json()
    return data
  }

  async post(url: string, body: any) {
    throw new Error("Method not implemented.")

  }

  async put(url: string, body: any) {
    throw new Error("Method not implemented.")

  }

  async delete(url: string) {
    throw new Error("Method not implemented.")
  }
}