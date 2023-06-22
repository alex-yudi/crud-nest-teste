import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";

@Controller('customers')
export class CustomerController {
    @Get()
    get() {
        return 'Obter os clientes.'
    }

    @Get(':id')
    getBbyId(@Param('id') id: string) {
        return `Obter o cliente com id ${id}`
    }

    @Post()
    post(@Body() body) {
        return {
            clienteCriado: body
        }
    }

    @Put(':id')
    put(@Param('id') id, @Body() body) {
        return {
            customer: id,
            data: body
        }
    }

    @Delete()
    delete() {
        return 'Deletar um cliente'
    }
}