import { join } from 'path';
import fs from 'fs/promises';

export type GitHubFile = { path: string; content: string }

const contentPath = ''
const redirectsBasePath = join(process.cwd(), '_redirects');

export const getLocalFileOld = async (path: string): Promise<string> => {
	const data = await fs.readFile(`${contentPath}/${path}`, 'utf-8');
	return data.toString();
};

export const getLocalFile = async (path: string): Promise<string> => {
	const jsonDirectory = __dirname + "/../";
	const data = await fs.readFile(`${jsonDirectory}/${path}`, "utf8");
	return data.toString();
}


export const getVercelFile = async (path: string): Promise<string> => {
	const jsonDirectory = __dirname + "/../";// + contentPath;
	//const data = await fs.readFile(`${jsonDirectory}/${path}`, "utf8");
	const data = await fs.readFile(redirectsBasePath, "utf8");
	return data.toString();
}

export const getVercelContent = async (path: string): Promise<Array<GitHubFile>> => {
	try {
		const mdxPath = __dirname + "/../" + contentPath;
		const results = await fs.readdir(`${mdxPath}/${path}`);
		
		const files: Array<GitHubFile> = await Promise.all(results.map(async (fileOrDirectory) => {
			const data = await fs.readFile(`${mdxPath}/${path}/${fileOrDirectory}`, 'utf-8');

			return {
				path: `${path}/${fileOrDirectory}`,
				content: data.toString(),
			}
		}));

		return files;
	} catch (error: any) {
		if (error.code?.includes('ENOENT')) {
			throw new Error('Not found')
		}

		throw error;
	}
}


export const getLocalContent = async (path: string): Promise<Array<GitHubFile>> => {
	try {
		const results = await fs.readdir(`${contentPath}/${path}`);

		const files: Array<GitHubFile> = await Promise.all(results.map(async (fileOrDirectory) => {
			const data = await fs.readFile(`${contentPath}/${path}/${fileOrDirectory}`, 'utf-8');

			return {
				path: `${path}/${fileOrDirectory}`,
				content: data.toString(),
			}
		}));

		return files;
	} catch (error: any) {
		if (error.code?.includes('ENOENT')) {
			throw new Error('Not found')
		}

		throw error;
	}
}