export interface IRepository<T> {
    addEntity(entity: T): Promise<T>;
    getEntity(id: number): Promise<T>;
    updateEntity(entity: T): Promise<T>;
    removeEntity(entity: T): Promise<T>;    
}
