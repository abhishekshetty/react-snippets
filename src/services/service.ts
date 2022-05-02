export async function createResource<T>(data: T): Promise<T> {
    await timeout(3000);
    return Promise.reject(Error('Error thrown'));
}

function timeout(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
