import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import moment from 'moment'
import { marked } from 'marked';
const postsDirectory = path.join(process.cwd(), 'posts');
moment.locale('fr')


export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames: string[] = fs.readdirSync(postsDirectory);
  const articles = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
    const dateFloat = matterResult.data.date
    const date = moment(dateFloat).format('LL')
    const title = matterResult.data.title

    // Combine the data with the id
    return {
      id, dateFloat,
      date, title,
      content: marked.parse(matterResult.content)
    };
  });
  // Sort posts by date
  return articles.sort(({ dateFloat: a }, { dateFloat: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
}
