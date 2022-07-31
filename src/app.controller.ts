import { Controller, Delete, Get, Inject, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import * as puppeteer from 'puppeteer';


@Controller()
export class AppController {
	@Get('/')
	async getRenderedHTMLContent(@Req() req: Request, @Res() res: Response) {

		const URL = req.query.url as string;
		const browser = await puppeteer.launch();

		const page = await browser.newPage();
		await page.setCacheEnabled(false);
		await page.goto(URL, {
			waitUntil: 'networkidle2',
			timeout: 0,
		});
		const content = await page.content();

		res.send(content);
	}
}
