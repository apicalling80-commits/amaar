import zipfile
import xml.etree.ElementTree as ET

def extract_text_from_docx(path):
    document = zipfile.ZipFile(path)
    xml_content = document.read('word/document.xml')
    document.close()
    
    tree = ET.fromstring(xml_content)
    
    # Namespaces
    ns = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
    
    paragraphs = []
    for paragraph in tree.findall('.//w:p', ns):
        texts = paragraph.findall('.//w:t', ns)
        if texts:
            paragraphs.append(''.join([t.text for t in texts]))
            
    return '\n'.join(paragraphs)

if __name__ == "__main__":
    docx_path = "Amor Eventz - About Us.docx"
    try:
        text = extract_text_from_docx(docx_path)
        with open("about_us_content.txt", "w", encoding="utf-8") as f:
            f.write(text)
        print("Text successfully extracted to about_us_content.txt")
    except Exception as e:
        print(f"Error: {e}")
