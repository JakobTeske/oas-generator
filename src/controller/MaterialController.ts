import { Get, JsonController} from 'routing-controllers'
import Material from '../model/Material'


@JsonController("/material")
export class MaterialController {
    materials: Array<Material>

    constructor() {
        this.materials = [{ name: 'Wood', density: 3.5, flameable: true }, { name: 'Concrete', density: 5, flameable: false }]
    }

    @Get("/")
    async getMaterials() {
        return this.materials
    }
}