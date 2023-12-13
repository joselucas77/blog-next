'use client';
import { PostData } from '../posts/post';

export const getAllText = async (post: PostData): Promise<string> => {
  // Extrair o conteúdo da chave 'content'
  const content = post.attributes.content;

  // Extrair todos os textos
  const allTexts: string[] = content.reduce((texts: string[], paragraph) => {
    if (
      paragraph.type === 'paragraph' &&
      paragraph.children &&
      paragraph.children.length > 0
    ) {
      const paragraphText = paragraph.children
        .map((child) => child.text)
        .join(' ');
      texts.push(paragraphText);
    }
    return texts;
  }, []);

  // Juntar todos os textos em uma única string
  const combinedText = allTexts.join(' ');

  return combinedText;
};
