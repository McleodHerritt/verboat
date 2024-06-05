from pdf2image import convert_from_path
import os

def extract_images_from_pdf(pdf_path, output_dir):
    # Convert PDF to a list of PIL images
    pages = convert_from_path(pdf_path)

    # Create output directory if it doesn't exist
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    # Save each page as an image
    for page_num, page in enumerate(pages):
        image_path = os.path.join(output_dir, f'page_{page_num + 1}.png')
        page.save(image_path, 'PNG')

# Usage example
pdf_path = 'MainPage.pdf'
output_dir = 'output'
extract_images_from_pdf(pdf_path, output_dir)
