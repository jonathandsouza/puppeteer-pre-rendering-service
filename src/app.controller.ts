import { Controller, Delete, Get, Inject, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import * as puppeteer from 'puppeteer';


@Controller()
export class AppController {
	@Get('/')
	async getRenderedHTMLContent(@Req() req: Request, @Res() res: Response) {

		const URL = req.query.url as string;

		// Launch puppeteer instance
		const browser = await puppeteer.launch();

		// Create a new page 
		const page = await browser.newPage();

		// Disable caching to ensure we get the latest version of the page
		await page.setCacheEnabled(false);

		// Navigate to the URL
		await page.goto(URL, {
			waitUntil: 'networkidle2',
			timeout: 0,
		});

		// Wait for the page to be loaded
		const content = await page.content();

		res.send(content);
	}
}
