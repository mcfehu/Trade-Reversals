import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
import TextAlign from '@tiptap/extension-text-align';
import Placeholder from '@tiptap/extension-placeholder';
import Color from '@tiptap/extension-color';
import TextStyle from '@tiptap/extension-text-style';
import Highlight from '@tiptap/extension-highlight';
import {
  Bold,
  Italic,
  Underline as UnderlineIcon,
  Link as LinkIcon,
  Image as ImageIcon,
  AlignLeft,
  AlignCenter,
  AlignRight,
  List,
  ListOrdered,
  Quote,
  Heading1,
  Heading2,
  Undo,
  Redo,
  Palette,
  Highlighter
} from 'lucide-react';

interface RichTextEditorProps {
  content: string;
  onChange: (content: string) => void;
}

export default function RichTextEditor({ content, onChange }: RichTextEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      TextStyle,
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: 'text-blue-500 hover:text-blue-600 underline'
        }
      }),
      Image.configure({
        HTMLAttributes: {
          class: 'max-w-full rounded-lg'
        }
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph']
      }),
      Placeholder.configure({
        placeholder: 'Start writing your blog post...'
      }),
      Color.configure({
        types: ['textStyle']
      }),
      Highlight.configure({
        multicolor: true
      })
    ],
    content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    }
  });

  if (!editor) {
    return null;
  }

  const addImage = () => {
    const url = window.prompt('Enter image URL');
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

  const addLink = () => {
    const url = window.prompt('Enter URL');
    if (url) {
      editor.chain().focus().setLink({ href: url }).run();
    }
  };

  const setColor = () => {
    const color = window.prompt('Enter color (hex or name)', '#000000');
    if (color) {
      editor.chain().focus().setColor(color).run();
    }
  };

  const MenuButton = ({ onClick, active, icon: Icon, title }: any) => (
    <button
      onClick={onClick}
      className={`p-2 rounded hover:bg-white/10 ${active ? 'text-blue-400' : 'text-white'}`}
      title={title}
    >
      <Icon className="h-5 w-5" />
    </button>
  );

  return (
    <div className="border border-white/10 rounded-lg overflow-hidden">
      <div className="bg-white/5 p-2 border-b border-white/10 flex flex-wrap gap-1">
        <MenuButton
          onClick={() => editor.chain().focus().toggleBold().run()}
          active={editor.isActive('bold')}
          icon={Bold}
          title="Bold"
        />
        <MenuButton
          onClick={() => editor.chain().focus().toggleItalic().run()}
          active={editor.isActive('italic')}
          icon={Italic}
          title="Italic"
        />
        <MenuButton
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          active={editor.isActive('underline')}
          icon={UnderlineIcon}
          title="Underline"
        />
        <div className="w-px h-6 bg-white/10 mx-1" />
        <MenuButton
          onClick={addLink}
          active={editor.isActive('link')}
          icon={LinkIcon}
          title="Add Link"
        />
        <MenuButton
          onClick={addImage}
          icon={ImageIcon}
          title="Add Image"
        />
        <div className="w-px h-6 bg-white/10 mx-1" />
        <MenuButton
          onClick={() => editor.chain().focus().setTextAlign('left').run()}
          active={editor.isActive({ textAlign: 'left' })}
          icon={AlignLeft}
          title="Align Left"
        />
        <MenuButton
          onClick={() => editor.chain().focus().setTextAlign('center').run()}
          active={editor.isActive({ textAlign: 'center' })}
          icon={AlignCenter}
          title="Align Center"
        />
        <MenuButton
          onClick={() => editor.chain().focus().setTextAlign('right').run()}
          active={editor.isActive({ textAlign: 'right' })}
          icon={AlignRight}
          title="Align Right"
        />
        <div className="w-px h-6 bg-white/10 mx-1" />
        <MenuButton
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          active={editor.isActive('bulletList')}
          icon={List}
          title="Bullet List"
        />
        <MenuButton
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          active={editor.isActive('orderedList')}
          icon={ListOrdered}
          title="Numbered List"
        />
        <MenuButton
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          active={editor.isActive('blockquote')}
          icon={Quote}
          title="Quote"
        />
        <div className="w-px h-6 bg-white/10 mx-1" />
        <MenuButton
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          active={editor.isActive('heading', { level: 1 })}
          icon={Heading1}
          title="Heading 1"
        />
        <MenuButton
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          active={editor.isActive('heading', { level: 2 })}
          icon={Heading2}
          title="Heading 2"
        />
        <div className="w-px h-6 bg-white/10 mx-1" />
        <MenuButton
          onClick={setColor}
          icon={Palette}
          title="Text Color"
        />
        <MenuButton
          onClick={() => editor.chain().focus().toggleHighlight().run()}
          active={editor.isActive('highlight')}
          icon={Highlighter}
          title="Highlight"
        />
        <div className="w-px h-6 bg-white/10 mx-1" />
        <MenuButton
          onClick={() => editor.chain().focus().undo().run()}
          icon={Undo}
          title="Undo"
        />
        <MenuButton
          onClick={() => editor.chain().focus().redo().run()}
          icon={Redo}
          title="Redo"
        />
      </div>
      <EditorContent 
        editor={editor} 
        className="prose prose-invert max-w-none p-4 min-h-[400px] focus:outline-none"
      />
    </div>
  );
}