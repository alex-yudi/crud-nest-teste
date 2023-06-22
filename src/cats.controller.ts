import { Controller, Get, Param, Post, Req, Res } from "@nestjs/common";
import { Request, Response } from "express";

@Controller('cats')
export class CatsController {
    @Post()
    createCat(): string {
        return 'Gato criado'
    }
    @Get()
    findAll(@Req() req: Request, @Res() res: Response): Response {
        console.log('enviado req')
        return res.status(203).json('ok')
    }
    @Get(':id')
    findById(@Param() params: any): string {
        console.log(params)
        return `O id procurado é o ${params.id}`
    }
}